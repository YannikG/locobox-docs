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
        'generelles/generelles-browser-kompatibilitaet',
        'generelles/globale-suche',
      ],
    },
  ],
  uebersichtSidebar: ['uebersicht/uebersicht'],
  artikelSidebar: [
    'artikel/artikel',
    'artikel/artikel-liste',
    'artikel/artikel-detailansicht',
    'artikel/artikel-bearbeiten',
    'artikel/artikel-csv-import',
    'artikel/artikel-massenbearbeitung',
  ],
  zuegeSidebar: ['zuege/zuege', 'zuege/zuege-komposition'],
  decoderSidebar: [
    'decoder/decoder',
    'decoder/decoder-funktionsmatrix',
    'decoder/decoder-konfiguration',
  ],
  kategorienSidebar: ['kategorien/kategorien'],
  druckenSidebar: [
    'drucken/drucken',
    'drucken/adressliste',
    'drucken/drucken-qr-code',
  ],
  einstellungenSidebar: [
    'einstellungen/einstellungen',
    'einstellungen/konto',
    'einstellungen/anzeigeeinstellungen',
    'einstellungen/nutzung',
  ],
  papierkorbSidebar: ['papierkorb/papierkorb'],
};

export default sidebars;
