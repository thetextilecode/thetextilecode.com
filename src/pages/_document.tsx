import Document, { Head, Html, Main, NextScript } from 'next/document';

/**
 * Sanitize Google Analytics ID to prevent XSS attacks.
 * Only allows valid GA4 (G-XXXXXXXXXX) or Universal Analytics (UA-XXXXXX-X) IDs.
 */
const sanitizeGaId = (gaId: string | undefined): string | null => {
  if (!gaId) return null;
  // GA4 format: G-XXXXXXXXXX (10+ alphanumeric after G-)
  // UA format: UA-XXXXXXXX-X (numeric with dashes)
  const ga4Pattern = /^G-[A-Z0-9]{10,}$/;
  const uaPattern = /^UA-\d{4,}-\d{1,}$/;
  if (ga4Pattern.test(gaId) || uaPattern.test(gaId)) {
    return gaId;
  }
  return null;
};

class MyDocument extends Document {
  render() {
    const gaId = sanitizeGaId(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);

    return (
      <Html lang="en">
        <Head>
          {/*<!-- Global site tag (gtag.js) - Google Analytics -->*/}
          {gaId && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                id="site-tag-01"
              />
              <script
                id="site-tag-02"
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });`,
                }}
              />
            </>
          )}
        </Head>
        <body className={'thetextilecode'}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
