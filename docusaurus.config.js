// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const {sortSidebarItems} = require("./src/Util");



/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'thorsten.suckow-homberg.de',
  tagline: 'PHP, JavaScript & Beyond',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://thorsten.suckow-homberg.de',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'thorstensuckow', // Usually your GitHub org/user name.
  projectName: 'thorsten.suckow-homberg.de', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          async sidebarItemsGenerator({
                                        defaultSidebarItemsGenerator,
                                        ...args
                                      }) {
            // Use the provided data to generate a custom sidebar slice
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            return sortSidebarItems(sidebarItems);
          },
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Home',
        /*logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },*/
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Articles',
          },{
            type: "docSidebar",
            sidebarId: "addendum",
            position: "left",
            label: "Addendum"
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/thorstensuckow',
            className: "header-github-link",
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [/*
          {
            title: 'Social',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/thorstensuckow',
              },
            ],
          },
          {
            title: 'Github',
            items: [
              {
                label: 'github.com/thorstensuckow',
                href: 'https://github.com/thorstensuckow',
              },
            ],
          },
        */],
        copyright: `copyright © ${new Date().getFullYear()} Thorsten Suckow-Homberg. Except where otherwise <a href="license">noted</a>, the content on this page is licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['php', 'http']
      },
    }),
};

module.exports = config;
