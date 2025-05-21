---
slug: Releasing-conjoon-V1.0
title: Releasing conjoon V1.0
tags: [release, conjoon, open source, email]
enableComments: true
---

## Releasing conjoon V1.0

I’m happy to announce conjoon 1.0, the very first major release of the Open Source JavaScript Email client.

For updating to the latest version, simply use our [installer](https://www.conjoon.org/blog/2022/11/14/docs/api/misc/@conjoon/create-conjoon). It will let you select the latest release when opting for the version to install.
<!--truncate-->
![](https://cdn-images-1.medium.com/max/3126/0*0A2MPF6zRkH3ks2E.png)

## Highlights[​](https://www.conjoon.org/blog/2022/11/14/1.0.0-release#highlights)

v1.0.0 marks the first major release for our JavaScript Email frontend, over 100 tickets related to [bugfixes, optimizations and minor features](https://github.com/orgs/conjoon/projects/3) across all projects where closed.

This release focuses on providing a stable frontend in conjunction with [lumen-app-email](https://www.conjoon.org/docs/api/backends/@conjoon/lumen-app-email).

Besides the features already introduced with the release candidates, the following features have been added:

### Plugins[​](https://www.conjoon.org/blog/2022/11/14/1.0.0-release#plugins)

* Plugin [mail-internal-mailtohandler](https://www.conjoon.org/docs/api/plugins/@conjoon/extjs-app-webmail/mail-internal-mailtohandler): Plugin for registering conjoon as the protocol handler for mailto-links

![](https://cdn-images-1.medium.com/max/2004/0*iehzFekzIAWO5vfh.png)

### Installer and CLI actions for lumen-app-email[​](https://www.conjoon.org/blog/2022/11/14/1.0.0-release#installer-and-cli-actions-for-lumen-app-email)

The installation for lumen-app-email has been simplified with the help of Artisan and CLI commands. To get an instance of lumen-app-email running, use

```bash
    $ composer create-project conjoon/lumen-app-email {targetDir} {version}
```

which will start the installation process. For more information, refer to the [official guide](https://www.conjoon.org/docs/api/backends/@conjoon/lumen-app-email#installation-1).

![](https://cdn-images-1.medium.com/max/3218/0*X1lMoQ8gvmbMwhAF.png)

### Docker Container[​](https://www.conjoon.org/blog/2022/11/14/1.0.0-release#docker-container)

[ddev-ms-email](https://www.conjoon.org/docs/api/backends/@conjoon/ddev-ms-email) has been updated to utilize the installer of lumen-app-email and additionally provides integration options for conjoon so that the container can be used for serving both the backend and the frontend.

    $ ddev create-conjoon

will start the installation of conjoon. For more information, refer to the [official guide](https://www.conjoon.org/docs/api/backends/@conjoon/ddev-ms-email).

Happy coding! 🎈