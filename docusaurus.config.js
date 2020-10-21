module.exports = {
  title: 'Wasp',
  tagline: 'A programming language that understands what a web app is.',
  url: 'https://wasp-lang.github.io',
  baseUrl: '/web/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'wasp-lang', // Usually your GitHub org/user name.
  projectName: 'web', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      title: '.wasp (alpha)',
      logo: {
        alt: 'Wasp logo',
        src: 'img/wasp-logo-eqpar-circle.png',
      },
      items: [
        {
          to: '#join-the-list',
          label: 'Join the list',
          position: 'right',
          className: 'navbar-item-email-signup navbar-item-inner'
        },
        {
          to: '#how-it-works',
          label: 'How it works',
          position: 'right',
          className: 'navbar-item-inner'
        },
        {
          to: '#the-language',
          label: 'The Language',
          position: 'right',
          className: 'navbar-item-inner'
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
          className: 'navbar-item-outside'
        },
        {
          href: 'https://blog.wasp-lang.dev/',
          label: 'Blog',
          position: 'right',
          className: 'navbar-item-outside'
        },
        {
          href: 'https://github.com/wasp-lang/wasp',
          className: 'navbar-item-github',
          position: 'right',
        },
      ],
    },
    prism: {
      additionalLanguages: ['shell-session']
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Wasp.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/wasp-lang/web/edit/master/',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            'prismjs/themes/prism-dark.css'
          ]
        },
      },
    ],
  ],
};
