import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Locobox Dokumentation',
  tagline: 'Modelleisenbahn-Verwaltung mit System.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.locobox.ch',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: true,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          showLastUpdateAuthor: true,
          editUrl:
            'https://github.com/yannikg/locobox-docs/tree/main/',
        },
        blog: false,
        sitemap: {
          ignorePatterns: [
            '/docs/todo/',
            '/docs/generation-report/',
            '/search/',
          ],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        // Index all docs to provide a fast client-side search.
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        language: ['de'],
        hashed: true,
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Locobox Doku',
      logo: {
        alt: 'Locobox Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'uebersicht/uebersicht',
          position: 'left',
          label: 'Übersicht',
        },
        {
          type: 'dropdown',
          label: 'Sammlung',
          to: '/docs/artikel/',
          activeBaseRegex: 'docs/(artikel|decoder|kategorien)',
          position: 'left',
          items: [
            {
              type: 'doc',
              docId: 'artikel/artikel',
              label: 'Artikel',
            },
            {
              type: 'doc',
              docId: 'decoder/decoder',
              label: 'Decoder',
            },
            {
              type: 'doc',
              docId: 'kategorien/kategorien',
              label: 'Kategorien',
            },
            {
              type: 'doc',
              docId: 'artikel/artikel-labels',
              label: 'Labels',
            },
          ],
        },
        {
          type: 'doc',
          docId: 'zuege/zuege',
          position: 'left',
          label: 'Züge',
        },
        {
          type: 'doc',
          docId: 'drucken/drucken-uebersicht',
          position: 'left',
          label: 'Drucken',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          type: 'dropdown',
          label: 'Mehr',
          position: 'right',
          items: [
            {
              type: 'doc',
              docId: 'premium/premium',
              label: 'Premium',
            },
            {
              type: 'doc',
              docId: 'einstellungen/einstellungen',
              label: 'Einstellungen',
            },
            {
              type: 'doc',
              docId: 'papierkorb/papierkorb',
              label: 'Papierkorb',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Links',
          position: 'right',
          items: [
            {
              href: 'https://www.locobox.ch',
              label: 'Locobox',
            },
            {
              href: 'https://database.locobox.ch',
              label: 'Datenbank',
            },
          ],
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Dokumentation',
          items: [
            {
              label: 'Erste Schritte',
              to: '/docs/generelles/generelles-erste-schritte',
            },
          ],
        },
        {
          title: 'Locobox',
          items: [
            {
              label: 'Locobox',
              href: 'https://www.locobox.ch',
            },
            {
              label: 'Datenbank',
              href: 'https://database.locobox.ch',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Locobox. Alle Rechte vorbehalten.`,
    },
    prism: {
      theme: prismThemes.github,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
