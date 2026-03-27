import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Locobox Dokumentation',
  tagline: 'Deine Modelleisenbahn, deine Kontrolle.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://www.locobox.ch',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

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
          editUrl:
            'https://github.com/yannikg/locobox-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Locobox Doku',
      logo: {
        alt: 'Locobox Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'generellesSidebar',
          position: 'left',
          label: 'Generelles',
        },
        {
          type: 'docSidebar',
          sidebarId: 'uebersichtSidebar',
          position: 'left',
          label: 'Übersicht',
        },
        {
          type: 'docSidebar',
          sidebarId: 'artikelSidebar',
          position: 'left',
          label: 'Artikel',
        },
        {
          type: 'docSidebar',
          sidebarId: 'zuegeSidebar',
          position: 'left',
          label: 'Züge',
        },
        {
          type: 'docSidebar',
          sidebarId: 'decoderSidebar',
          position: 'left',
          label: 'Decoder',
        },
        {
          type: 'docSidebar',
          sidebarId: 'kategorienSidebar',
          position: 'left',
          label: 'Kategorien',
        },
        {
          type: 'docSidebar',
          sidebarId: 'druckenSidebar',
          position: 'left',
          label: 'Drucken',
        },
        {
          type: 'docSidebar',
          sidebarId: 'einstellungenSidebar',
          position: 'left',
          label: 'Einstellungen',
        },
        {
          type: 'docSidebar',
          sidebarId: 'papierkorbSidebar',
          position: 'left',
          label: 'Papierkorb',
        },
        {
          href: 'https://www.locobox.ch',
          label: 'Hauptseite',
          position: 'right',
        },
        {
          href: 'https://github.com/yannikg/locobox-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Dokumentation',
          items: [
            {
              label: 'Einstieg',
              to: '/docs/generelles-erste-schritte',
            },
          ],
        },
        {
          title: 'Projekt',
          items: [
            {
              label: 'Locobox Hauptseite',
              href: 'https://www.locobox.ch',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/yannikg/locobox-docs',
            },
            {
              label: 'Probleme melden',
              href: 'https://github.com/yannikg/locobox-docs/issues',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Locobox. Alle Rechte vorbehalten.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
