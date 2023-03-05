---
title: "Fix: Missing favicon.ico in Sencha ExtJS production builds"
authors: [thorstensuckow]
tags: [javascript, sencha, extjs]
---

## Fix: Missing favicon.ico in Sencha ExtJS production builds

Fixing missing favicon.ico in Ext JS applications.

*The original issue is tracked here: [https://github.com/conjoon/conjoon/issues/24](https://github.com/conjoon/conjoon/issues/24)*

### The issue

I’m not quite sure *when *and *why *it broke, but it looks like production builds of Sencha Ext JS applications do not contain any **favicon.ico** originally existing in the development build (*anymore*).

While everything seems to be okay with development builds (that’s easy, they refer to the development’s root folder in most cases and do not copy and move files around like the production build does), deploying to production will show the default icon coming with your vendor’s browser for any Sencha ExtJS application, at least when your environment is using the following package versions:

```
    webpack v4.39.3n/a
    ext-webpack-plugin v7.6.0 
    Ext JS v7.6.0.41 
    Sencha Cmd v7.6.0.87
``

A call to

```bash
    $ cross-env webpack 
          --env.profile=desktop 
          --env.environment=production 
          --env.treeshake=yes 
          --env.cmdopts=--uses
```

will produce the production build, but the production build will not contain the favicon.ico. Here’s proof (… sort of):

![](https://cdn-images-1.medium.com/max/2000/1*XGxSX1p43oVtk3cif5mE2Q.png)

### The fix

I did not invest too much investigating the reason why this file is omitted. Instead, I added the copy-webpack-plugin to the project and made sure the the favicon is copied over when running npm run build.

If you’re reading this post, you most likely stumbled across the same issue. Here’s how to fix it.

1. Add copy-webpack-plugin to your project

I’m still sporting **webpack v4.39.3 **so I had to fall back to an older version of the plugin. I’m using **copy-webpack-plugin@6.4.1** in this case:

```bash
    $ npm i -D copy-webpack-plugin@6.4.1
```

2. Add a few more modules to your project’s webpack.config.js

Add the following two lines to the head of the file:

```javascript
    // ....
    const CopyWebpackPlugin = require("copy-webpack-plugin");
    const fs = require("fs");
    //...
```

Why fs? I couldn’t find an easy way to access the application’s name at this point of the build step through the variables available, so I’m using fs to parse the project's app.json. The value of its name-property is then used for computing the destination folder for the *copy*-operation.

3. Add the **copy-webpack-plugin** to the list of plugins in the script

You’ll easily find the location that has to be edited when looking for the **@sencha/ext-webpack-plugin**-configuration:

```javascript
    const plugins = [
      new ExtWebpackPlugin({
        // ...
      }),
      new CopyWebpackPlugin({
        patterns: [{
          from: path.resolve(__dirname, './favicon.ico'),
          to: path.join(
              __dirname,
              "build",
              environment,
              JSON.parse(
                fs.readFileSync(
                  path.resolve(__dirname, './app.json')
                )
              ).name
          )
        }]
      })
    ]
```

Subsequent builds will now contain the **favicon.ico**.

