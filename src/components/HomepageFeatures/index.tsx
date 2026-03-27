import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imageSrc: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Einfach nutzen',
    imageSrc: require('@site/static/img/no-download.webp').default,
    description: (
      <>
        Locobox läuft direkt im Browser und ist ohne Installation nutzbar.
        Du kannst deine Sammlung schnell erfassen und verwalten.
      </>
    ),
  },
  {
    title: 'Fokus auf deine Sammlung',
    imageSrc: require('@site/static/img/overview.webp').default,
    description: (
      <>
        Nutze die globale Suche, den Zug-Builder und den CSV-Import, um
        effizienter mit deinem Bestand zu arbeiten.
      </>
    ),
  },
  {
    title: 'Modern und mobil',
    imageSrc: require('@site/static/img/mobile.webp').default,
    description: (
      <>
        Die App ist fürs Handy optimiert und läuft auf Desktop und Mobilgerät
        konsistent und performant.
      </>
    ),
  },
];

function Feature({title, imageSrc, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imageSrc} alt={title} className={styles.featureImage} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
