module.exports = {
  title: 'Copper Plus',
  tagline: 'Decentralized Social Network for Commodity Market',
  url: 'https://copper-plus.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon/favicon.ico',
  organizationName: 'copper-plus', // Usually your GitHub org/user name.
  projectName: 'copper-plus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '| Copper-plus',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'More About',
          position: 'left',
        },
        //{to: 'blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'More About',
          items: [
            {
              label: 'Documentation',
              to: 'docs/',
            },
            {
              label: 'Further Readings',
              to: '#',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/copperplus.srilanka',
            },
            {
              label: 'Twitter',
              href: '#',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '#',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/copper-plus/copper-plus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Legator Solutions (Pvt) Ltd, Inc. Built with Docusaurus.`,
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
            'https://github.com/copper-plus/copper-plus/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/copper-plus/copper-plus/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
