import Admonition from '@theme/Admonition';
import Link from '@docusaurus/Link';

/**
 * Gemeinsamer Hinweis zu Plan und Nutzungsgrenzen (Paywall/Limits in der App).
 * In Markdown/MDX: `import LimitsPlanNote from '@site/src/components/LimitsPlanNote';` dann `<LimitsPlanNote />`.
 */
export default function LimitsPlanNote() {
  return (
    <Admonition type="note" title="Limits und Plan">
      Für diese Funktion können <strong>Nutzungsgrenzen</strong> oder{' '}
      <strong>Regeln des jeweiligen Plans</strong> gelten. Einzelheiten dazu unter{' '}
      <Link to="/docs/einstellungen/nutzung">Nutzung</Link>.
    </Admonition>
  );
}
