---
title: "bcc-header issues with Horde_Mime_Mail"
authors: [thorstensuckow]
tags: [php, horde, bug]
enableComments: true
---

## `bcc`-header issues with `Horde_Mime_Mail`

This issue caused some uncertainty since I was not sure if the headers were broken due to missing quotes. 
See https://github.com/conjoon/php-lib-conjoon/issues/17.

Turns out that the way I assembled an email from a full text and converting it back to an instance of `Horde_Mime_Mail`
does not consider the type of the internal representation of the `bcc`-field properly. It's related to
`Horde_Mail_Rfc822_List::_normalize` and how values passed from `Horde_Mime_Mail::send()` are processed by it.
<!--truncate-->
Here's a code snippet that shows how I use a full text message as input, then converting it back to an instance of `Horde_Mime_Mail`
with headers processed by `Horde_Mime_Headers::parseHeaders()`. 
The original message has a `bcc` header-field:

(Original code [can be found here](https://github.com/conjoon/php-lib-conjoon/blob/ec170f351c0ff8dbdc390c8712dc24c47745abf6/src/Horde/Mail/Client/Imap/HordeClient.php#L648)).

```php title="HordeClient.php"
         $target = $item->getFullMsg(false);
         // ... 
         $headers = Horde_Mime_Headers::parseHeaders($target);

         $mail = new Horde_Mime_Mail($headers);
         $part = Horde_Mime_Part::parseMessage($target);
         $mail->setBasePart($part);

         $mailer = $this->getMailer($account);
         $mail->send($mailer);   
```

`Horde_Mime_Mail` temporarily removes the `bcc` header and stores it in a property named `_bcc`, then uses this value to add 
it to the recipients' addresses later on in `send()`. This is so the `bcc`-header is not appearing in the source of the message 
the recipients receive (see [https://www.ietf.org/rfc/rfc2822.txt](https://www.ietf.org/rfc/rfc2822.txt), Section **3.6.3** and **5**):

> _"The "Bcc:" field (where the "Bcc" means "Blind Carbon Copy") contains
addresses of recipients of the message whose addresses are not to be
revealed to other recipients of the message."_ [https://www.ietf.org/rfc/rfc2822.txt, Section **3.6.3**](https://www.ietf.org/rfc/rfc2822.txt)

This is a part of [`Horde_mime_Mail::send()`](https://github.com/horde/Mime/blob/d9c11439bd82b7887b03271d595b998123b9fa0a/lib/Horde/Mime/Mail.php#L463):

```php title="Horde/Mime/Mail.php"

        /* Build recipients. */
        $recipients = clone $this->_recipients;
        foreach (array('to', 'cc') as $header) {
            if ($h = $this->_headers[$header]) {
                $recipients->add($h->getAddressList());
            }
        }
        if ($this->_bcc) {
            $recipients->add($this->_bcc);
        }
```

The source above shows that for `to` / `cc` the method `getAddressList()` is being called, while the value of `_bcc` gets 
passed to the `add()` method.  However, `_bcc` holds in this case an instance of `Horde_Mime_Headers_Addresses`, 
which `Horde_Mail_Rfc822_List::_normalize()` does not consider. The value is ultimately ignored, Emails are not being 
sent to the addresses mentioned in the `bcc` header.

Here's the implementation of [`normalize()`](https://github.com/horde/Mail/blob/5458e457a2b6c333a7aed8cd2d720e83aae2f381/lib/Horde/Mail/Rfc822/List.php#L302):

```php  title="Horde/Mail/Rfc822/List.php"

    protected function _normalize($obs)
    {
        $add = array();

        if (!($obs instanceof Horde_Mail_Rfc822_List) &&
            !is_array($obs)) {
            $obs = array($obs);
        }

        foreach ($obs as $val) {
            if (is_string($val)) {
                $rfc822 = new Horde_Mail_Rfc822();
                $val = $rfc822->parseAddressList($val);
            }

            if ($val instanceof Horde_Mail_Rfc822_List) {
                $val->setIteratorFilter(self::BASE_ELEMENTS);
                foreach ($val as $val2) {
                    $add[] = $val2;
                }
            } elseif ($val instanceof Horde_Mail_Rfc822_Object) {
                $add[] = $val;
            }
        }

        return $add;
    }

```

A possible fix is to call `getAddressList()` on `_bcc` in `Horde_Mime_Mail::send()` or check for this type in the 
`normalize()`-method of `Horde_Mail_Rfc822_List`:

```diff  title="Horde/Mail/Rfc822/List.php.diff"

    protected function _normalize($obs)
    {
        $add = array();


+       if ($obs instanceof Horde_Mime_Headers_Addresses) {
+           $obs = $obs->getAddressList();
+       }
     
        if (!($obs instanceof Horde_Mail_Rfc822_List) &&
            !is_array($obs)) {
            $obs = array($obs);
        }
```

Fixing this in `Horde/Mime/Mail.php` is also possible, although I do not know if that would cause any side effect since I 
could not find the expected type of `_bcc`. It gets checked in '_normalize()' (see above) so I guess this would be the
better place to apply the fix, instead of doing this:

```diff title="Horde/Mime/Mail.php.diff"

        /* Build recipients. */
        $recipients = clone $this->_recipients;
        foreach (array('to', 'cc') as $header) {
            if ($h = $this->_headers[$header]) {
                $recipients->add($h->getAddressList());
            }
        }
        if ($this->_bcc) {
-            $recipients->add($this->_bcc);
+            $recipients->add($this->_bcc->getAddressList()); 
        }
```

--------
Update 21.03.2023: PR available [here](https://github.com/maintaina-com/Mail/pull/3)