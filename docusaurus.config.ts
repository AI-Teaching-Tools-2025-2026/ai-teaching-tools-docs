import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AI Teaching Tool',
  tagline: 'Empowering Educators with Artificial Intelligence',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://AI-Teaching-Tools-2025-2026.github.io',
  baseUrl: '/ai-teaching-tools-docs/',

  organizationName: 'AI-Teaching-Tools-2025-2026',
  projectName: 'ai-teaching-tools-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/AI-Teaching-Tools-2025-2026/ai-teaching-tools/',
        },
        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      disableSwitch: true,
    },

    navbar: {
      title: 'AI Teaching Tools',
      logo: {
        alt: 'AI Teaching Tools Logo',
        src: '/ai-teaching-tools-docs/img/ai-teaching-tools-icon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs', // renamed from Tutorial (recommended)
        },
        {
          href: 'https://github.com/AI-Teaching-Tools-2025-2026/ai-teaching-tools',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Contributions',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/AI-Teaching-Tools-2025-2026/ai-teaching-tools',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Email',
              href: 'mailto:cscapstone2026@protonmail.com',
            },
            {
              label: 'GitHub Issues',
              href: 'https://github.com/AI-Teaching-Tools-2025-2026/ai-teaching-tools/issues',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AI Teaching Tool. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;