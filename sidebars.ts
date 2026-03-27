import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  generellesSidebar: [
    {
      type: 'category',
      label: 'Generelles',
      link: {
        type: 'doc',
        id: 'generelles/generelles',
      },
      items: [
        'generelles/generelles-erste-schritte',
        'generelles/spotlight-globale-suche',
      ],
    },
  ],
  uebersichtSidebar: ['uebersicht/uebersicht'],
  artikelSidebar: ['artikel/artikel'],
  zuegeSidebar: ['zuege/zuege'],
  decoderSidebar: ['decoder/decoder'],
  kategorienSidebar: ['kategorien/kategorien'],
  druckenSidebar: ['drucken/drucken'],
  einstellungenSidebar: [
    'einstellungen/einstellungen',
    'einstellungen/anzeigeeinstellungen',
    'einstellungen/nutzung',
  ],
  papierkorbSidebar: ['papierkorb/papierkorb'],
};

export default sidebars;
