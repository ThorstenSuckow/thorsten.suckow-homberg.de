---
title: "Fix: Ext JS Simlets and omitting the status code"
authors: [thorstensuckow]
tags: [javascript, sencha, extjs]
---

## Fix: Ext JS Simlets and omitting the status code

I recently stumbled upon a mean error that was hard to track down. Luckily, the issue was caused by a simple carelessness regarding fully configured response-objects of Simlets used in the dev-environment of the conjoon-project and did not require any large refactoring.

*The original issue is tracked here: [https://github.com/conjoon/extjs-app-webmail/issues/196](https://github.com/conjoon/extjs-app-webmail/issues/196)*

### The issue

The problem was related to batch-operations in Ext JS: When any operation of the batch fails, the pauseonexception-setting is considered and further processing of any remaining operation is halted. The user then has the option to retry the last failed operation, continuing with the remaining operations if this was finally successful.
However, retrying some of the failed operations gave the following error:

![](https://cdn-images-1.medium.com/max/2000/0*_Lq8JlNRBBEutuGY.png)

The operation that failed — and which is now about to be retried — was already destroyed by Ext JS internal garbage-collector.

### The fix

It took some time to find out that the operation was destroyed and that some of the properties required for re-running it were already de-referenced. This took me to the internals of response-handling of XMLHttpRequests of Ext JS and finally to the code where the HTTP status of a request was inspected. Take note that I’m mainly developing with Simlets to avoid costly network roundtrips to any backend.

> _It is mandatory for the Simlets to properly treat mocked backend-errors by also providing the appropriate status-code._

It was assumed that simply setting the success-property in any of the delete/put/...-methods of a simlet treating the request would later on be parsed internally; setting the status-code of the response automatically to anything other than 200. That is not the case. It is mandatory for the Simlets to properly treat mocked backend-errors by also providing the appropriate status-code.

The flaw was too often overseen since the status-field was **not set,** as the following code examples show (examples represent code in any of the delete/post/put/...-methods of a Json-Simlet; see Ext.ux.ajax.Simlet):

The following leaves the ret.status-property undefined:

```javascript
    //....
    const ret = {};
    ret.responseText = Ext.JSON.encode({
        success: false
    });
    return ret;
```

… while the following re-uses the predefined value of 200 for the status, even if success=false should indicate that the request could not be processed as expected:

```javascript
    const 
        me = this,
        ret = {};

    Ext.Array.forEach(me.responseProps, function (prop) {
        if (prop in me) {
            ret[prop] = me[prop];
        }
    });

    ret.responseText = Ext.JSON.encode({
        success: false
    });

    return ret;
```

In both cases, Ext.data.request.Ajax would parse the response and its status in the onComplete-method:

```javascript
    result = Ext.data.request.Ajax.parseStatus(xhr.status, xhr);
```

An undefined status would cause the response to be treated as **not successful** (example 1), while anything other than undefined would be parsed and interpreted according to its HTTP-status representative (successful: 200; failure: 404, 500 etc.).

ExtJS would assume that a successful operation is not needed anymore; it is automatically destroyed then. This was unexpected behavior in this case, since the code marked the operation as a failure, but not via the status-code, which was required.


