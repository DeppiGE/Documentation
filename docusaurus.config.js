// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Fiesta Heroes Doc',
    tagline: 'Fiesta online - Dev Documentation',
    url: 'https://doc.fiestaheroes.com/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.png',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: '', // Usually your GitHub org/user name.
    projectName: '', // Usually your repo name.

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
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/FiestaHeroes/Documentation/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/FiestaHeroes/Documentation/',
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
        navbar: {
            title: 'Fiesta Heroes',
            logo: {
                alt: 'Fiesta Heroes Logo',
                src: 'img/favicon.png',
            },
            items: [/**{
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: 'Doc',
                },*/
                {
                    href: 'https://fiestaheroes.com/',
                    label: 'Homepage',
                    position: 'right',
                },
                {
                    href: 'https://github.com/FiestaHeroes/Documentation',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Fiesta Heroes',
                    items: [{
                            label: 'Website',
                            href: 'https://fiestaheroes.com/',
                        },
                        {
                            label: 'Documentation',
                            href: 'https://doc.fiestaheroes.com/',
                        },
                        {
                            label: 'Archive',
                            href: 'https://archive.fiestaheroes.com/',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [{
                        label: 'Discord - Fiesta Heroes',
                        href: 'https://discord.gg/TCFzBPgtPX',
                    },
                    {
                        label: 'Discord - Dev',
                        href: 'https://discord.gg/Fn7PNEKb3K',
                    }],
                },
                {
                    title: 'More',
                    items: [{
                            label: 'GitHub - Fiesta Heroes',
                            href: 'https://github.com/FiestaHeroes',
                        },
                        {
                            label: 'GitHub - Doc',
                            href: 'https://github.com/FiestaHeroes/Documentation',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} FiestaHeroes Team.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
            additionalLanguages: ['lua'],
        },
    }),
};

module.exports = config;