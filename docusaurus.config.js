module.exports = {
  title: 'Wasp',
  tagline: 'A simple language for developing full-stack web apps with less code.',
  url: 'https://wasp-lang.github.io/web',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'wasp-lang', // Usually your GitHub org/user name.
  projectName: 'web', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: true,
    navbar: {
      title: '.wasp (alpha)',
      logo: {
        alt: 'Wasp logo',
        src: 'img/wasp-logo-eqpar-circle.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
          className: 'navbar-item-docs navbar-item-outside'
        },
        {
          to: 'https://discord.gg/rzdnErX',
          label: 'Chat @',
          position: 'right',
          className: 'navbar-item-discord navbar-item-outside'
        },
        {
          to: '/#join-the-list',
          label: 'Join the list',
          position: 'right',
          className: 'navbar-item-email-signup navbar-item-inner'
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'right'
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
              label: 'Getting started',
              to: 'docs'
            },
            {
              label: 'Todo app tutorial',
              to: 'docs/tutorials/todo-app'
            },
            {
              label: 'Reference',
              to: 'docs/language/basic-elements'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/rzdnErX'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/wasp-lang/wasp'
            },
            {
              label: 'Contact',
              href: 'docs/contact'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Wasp.`,
    },
    algolia: {
      apiKey: '51575685bf62ecdfd2e3a1974de921e6',
      indexName: 'wasp-lang',
      // TODO: contextualSearch is useful when you are doing versioning,
      //   it searches only in v1 docs if you are searching from v1 docs.
      //   We should enable it if we start doing versioning.
      // contextualSearch: true
    }
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
  scripts: [
    '/scripts/posthog.js'
  ]
};
