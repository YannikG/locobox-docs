import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  generellesSidebar: [
    {
      type: 'category',
      label: 'Generelles',
      link: {
        type: 'doc',
        id: 'generelles',
      },
      items: ['generelles-erste-schritte'],
    },
  ],
  uebersichtSidebar: ['uebersicht'],
  artikelSidebar: ['artikel'],
  zuegeSidebar: ['zuege'],
  decoderSidebar: ['decoder'],
  kategorienSidebar: ['kategorien'],
  druckenSidebar: ['drucken'],
  einstellungenSidebar: ['einstellungen'],
  papierkorbSidebar: ['papierkorb'],
};

export default sidebars;
