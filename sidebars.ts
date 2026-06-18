import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  generellesSidebar: [
    {
      type: 'category',
      label: 'Einstieg',
      link: {
        type: 'doc',
        id: 'generelles/generelles',
      },
      items: [
        'generelles/generelles-erste-schritte',
        'generelles/generelles-anmelden',
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
    'artikel/artikel-duplizieren',
    'artikel/artikel-bilder',
    'artikel/artikel-csv-import',
    'artikel/artikel-massenbearbeitung',
  ],
  kategorienSidebar: ['kategorien/kategorien'],
  zuegeSidebar: ['zuege/zuege', 'zuege/zuege-komposition'],
  decoderSidebar: [
    'decoder/decoder',
    'decoder/decoder-liste',
    'decoder/decoder-funktionsmatrix',
    'decoder/decoder-konfiguration',
    'decoder/decoder-adressen',
  ],
  druckenSidebar: [
    'drucken/drucken-uebersicht',
    'drucken/adressliste',
    'drucken/verkaufsliste',
    'drucken/sammlungsverzeichnis',
    'drucken/drucken-qr-code',
  ],
  premiumSidebar: [
    'premium/premium',
    'premium/gratis-und-limits',
    'premium/abonnement',
  ],
  einstellungenSidebar: [
    'einstellungen/einstellungen',
    'einstellungen/konto',
    'einstellungen/nutzung',
    'einstellungen/anzeigeeinstellungen',
    'einstellungen/sprache',
    'einstellungen/waehrung',
  ],
  papierkorbSidebar: ['papierkorb/papierkorb'],
};

export default sidebars;
