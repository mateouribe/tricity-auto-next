import Script from "next/script";

const Google = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-11402469258"
      />

      {/* Inline configuration for Google Ads */}
      <Script
        id="google-ads-inline-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-11402469258');
    `,
        }}
      />
    </>
  );
};

export default Google;
