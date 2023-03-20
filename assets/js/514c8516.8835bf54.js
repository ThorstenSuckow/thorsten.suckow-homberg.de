"use strict";(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[3846],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||h[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"bcc-header issues with Horde_Mime_Mail",authors:["thorstensuckow"],tags:["php","horde","bug"]},o=void 0,s={permalink:"/blog/2023/03/20/horde-mail-ignores-bcc",editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/blog/2023-03-20-horde-mail-ignores-bcc/index.md",source:"@site/blog/2023-03-20-horde-mail-ignores-bcc/index.md",title:"bcc-header issues with Horde_Mime_Mail",description:"bcc-header issues with HordeMimeMail",date:"2023-03-20T00:00:00.000Z",formattedDate:"March 20, 2023",tags:[{label:"php",permalink:"/blog/tags/php"},{label:"horde",permalink:"/blog/tags/horde"},{label:"bug",permalink:"/blog/tags/bug"}],readingTime:2.64,hasTruncateMarker:!1,authors:[{name:"Thorsten Suckow-Homberg",url:"https://thorsten.suckow-homberg.de",imageURL:"https://avatars.githubusercontent.com/u/823135",key:"thorstensuckow"}],frontMatter:{title:"bcc-header issues with Horde_Mime_Mail",authors:["thorstensuckow"],tags:["php","horde","bug"]},nextItem:{title:"Fix: Missing favicon.ico in Sencha ExtJS production builds",permalink:"/blog/2023/02/19/fix-missing-favicon-in-extjs"}},l={authorsImageUrls:[void 0]},c=[{value:"<code>bcc</code>-header issues with <code>Horde_Mime_Mail</code>",id:"bcc-header-issues-with-horde_mime_mail",level:2}],p={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"bcc-header-issues-with-horde_mime_mail"},(0,r.kt)("inlineCode",{parentName:"h2"},"bcc"),"-header issues with ",(0,r.kt)("inlineCode",{parentName:"h2"},"Horde_Mime_Mail")),(0,r.kt)("p",null,"This issue caused some uncertainty since I was not sure if the headers were broken due to missing quotes.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/conjoon/php-lib-conjoon/issues/17"},"https://github.com/conjoon/php-lib-conjoon/issues/17"),"."),(0,r.kt)("p",null,"Turns out that the way I assembled an email from a full text and converting it back to an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"Horde_Mime_Mail"),"\ndoes not consider the type of the internal representation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"bcc"),"-field properly. It's related to\n",(0,r.kt)("inlineCode",{parentName:"p"},"Horde_Mail_Rfc822_List::_normalize")," and how values passed from ",(0,r.kt)("inlineCode",{parentName:"p"},"Horde_Mime_Mail::send()")," are processed by it."),(0,r.kt)("p",null,"Here's a code snippet that shows how I use a full text message as input, then converting it back to an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"Horde_Mime_Mail"),"\nwith headers processed by ",(0,r.kt)("inlineCode",{parentName:"p"},"Horde_Mime_Headers::parseHeaders()"),".\nThe original message has a ",(0,r.kt)("inlineCode",{parentName:"p"},"bcc")," header-field:"),(0,r.kt)("p",null,"(Original code ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/conjoon/php-lib-conjoon/blob/ec170f351c0ff8dbdc390c8712dc24c47745abf6/src/Horde/Mail/Client/Imap/HordeClient.php#L648"},"can be found here"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="HordeClient.php"',title:'"HordeClient.php"'},"         $target = $item->getFullMsg(false);\n         // ... \n         $headers = Horde_Mime_Headers::parseHeaders($target);\n\n         $mail = new Horde_Mime_Mail($headers);\n         $part = Horde_Mime_Part::parseMessage($target);\n         $mail->setBasePart($part);\n\n         $mailer = $this->getMailer($account);\n         $mail->send($mailer);   \n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Horde_Mime_Mail")," temporarily removes the ",(0,r.kt)("inlineCode",{parentName:"p"},"bcc")," header and stores it in a property named ",(0,r.kt)("inlineCode",{parentName:"p"},"_bcc"),", then uses this value to add\nit to the recipients' addresses later on in ",(0,r.kt)("inlineCode",{parentName:"p"},"send()"),". This is so the ",(0,r.kt)("inlineCode",{parentName:"p"},"bcc"),"-header is not appearing in the source of the message\nthe recipients receive (see ",(0,r.kt)("a",{parentName:"p",href:"https://www.ietf.org/rfc/rfc2822.txt"},"https://www.ietf.org/rfc/rfc2822.txt"),", Section ",(0,r.kt)("strong",{parentName:"p"},"3.6.3")," and ",(0,r.kt)("strong",{parentName:"p"},"5"),"):"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},'"The "Bcc:" field (where the "Bcc" means "Blind Carbon Copy") contains\naddresses of recipients of the message whose addresses are not to be\nrevealed to other recipients of the message."')," ",(0,r.kt)("a",{parentName:"p",href:"https://www.ietf.org/rfc/rfc2822.txt"},"https://www.ietf.org/rfc/rfc2822.txt, Section ",(0,r.kt)("strong",{parentName:"a"},"3.6.3")))),(0,r.kt)("p",null,"This is a part of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/horde/Mime/blob/d9c11439bd82b7887b03271d595b998123b9fa0a/lib/Horde/Mime/Mail.php#L463"},(0,r.kt)("inlineCode",{parentName:"a"},"Horde_mime_Mail::send()")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Horde/Mime/Mail.php"',title:'"Horde/Mime/Mail.php"'},"\n        /* Build recipients. */\n        $recipients = clone $this->_recipients;\n        foreach (array('to', 'cc') as $header) {\n            if ($h = $this->_headers[$header]) {\n                $recipients->add($h->getAddressList());\n            }\n        }\n        if ($this->_bcc) {\n            $recipients->add($this->_bcc);\n        }\n")),(0,r.kt)("p",null,"The source above shows that for ",(0,r.kt)("inlineCode",{parentName:"p"},"to")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"cc")," the method ",(0,r.kt)("inlineCode",{parentName:"p"},"getAddressList()")," is being called, while the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"_bcc")," gets\npassed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"add()")," method.  However, ",(0,r.kt)("inlineCode",{parentName:"p"},"_bcc")," holds in this case an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"Horde_Mime_Headers_Addresses"),",\nwhich ",(0,r.kt)("inlineCode",{parentName:"p"},"Horde_Mail_Rfc822_List::_normalize()")," does not consider. The value is ultimately ignored, Emails are not being\nsent to the addresses mentioned in the ",(0,r.kt)("inlineCode",{parentName:"p"},"bcc")," header."),(0,r.kt)("p",null,"Here's the implementation of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/horde/Mail/blob/5458e457a2b6c333a7aed8cd2d720e83aae2f381/lib/Horde/Mail/Rfc822/List.php#L302"},(0,r.kt)("inlineCode",{parentName:"a"},"normalize()")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Horde/Mail/Rfc822/List.php"',title:'"Horde/Mail/Rfc822/List.php"'},"\n    protected function _normalize($obs)\n    {\n        $add = array();\n\n        if (!($obs instanceof Horde_Mail_Rfc822_List) &&\n            !is_array($obs)) {\n            $obs = array($obs);\n        }\n\n        foreach ($obs as $val) {\n            if (is_string($val)) {\n                $rfc822 = new Horde_Mail_Rfc822();\n                $val = $rfc822->parseAddressList($val);\n            }\n\n            if ($val instanceof Horde_Mail_Rfc822_List) {\n                $val->setIteratorFilter(self::BASE_ELEMENTS);\n                foreach ($val as $val2) {\n                    $add[] = $val2;\n                }\n            } elseif ($val instanceof Horde_Mail_Rfc822_Object) {\n                $add[] = $val;\n            }\n        }\n\n        return $add;\n    }\n\n")),(0,r.kt)("p",null,"A possible fix is to call ",(0,r.kt)("inlineCode",{parentName:"p"},"getAddressList()")," on ",(0,r.kt)("inlineCode",{parentName:"p"},"_bcc")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"Horde_Mime_Mail::send()")," or check for this type in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"normalize()"),"-method of ",(0,r.kt)("inlineCode",{parentName:"p"},"Horde_Mail_Rfc822_List"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="Horde/Mail/Rfc822/List.php.diff"',title:'"Horde/Mail/Rfc822/List.php.diff"'},"\n    protected function _normalize($obs)\n    {\n        $add = array();\n\n\n+       if ($obs instanceof Horde_Mime_Headers_Addresses) {\n+           $obs = $obs->getAddressList();\n+       }\n     \n        if (!($obs instanceof Horde_Mail_Rfc822_List) &&\n            !is_array($obs)) {\n            $obs = array($obs);\n        }\n")),(0,r.kt)("p",null,"Fixing this in ",(0,r.kt)("inlineCode",{parentName:"p"},"Horde/Mime/Mail.php")," is also possible, although I do not know if that would cause any side effect since I\ncould not find the expected type of ",(0,r.kt)("inlineCode",{parentName:"p"},"_bcc"),". It gets checked in '_normalize()' (see above) so I guess this would be the\nbetter place to apply the fix:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="Horde/Mime/Mail.php.diff"',title:'"Horde/Mime/Mail.php.diff"'},"\n        /* Build recipients. */\n        $recipients = clone $this->_recipients;\n        foreach (array('to', 'cc') as $header) {\n            if ($h = $this->_headers[$header]) {\n                $recipients->add($h->getAddressList());\n            }\n        }\n        if ($this->_bcc) {\n-            $recipients->add($this->_bcc);\n+            $recipients->add($this->_bcc->getAddressList()); \n        }\n")))}h.isMDXComponent=!0}}]);