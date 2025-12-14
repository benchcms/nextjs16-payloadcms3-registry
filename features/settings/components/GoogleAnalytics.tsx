import Script from "next/script";
import { getSettings } from "../queries/settings";

/**
 * Google Analytics tracking scripts.
 * Automatically checks if GA is configured and only loads if ID is present.
 */
export async function GoogleAnalytics() {
  const settings = await getSettings();

  if (!settings?.googleAnalyticsId) {
    return null;
  }

  return (
    <>
      {/* Load the Google Analytics library */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${settings.googleAnalyticsId}`}
      />

      {/* Initialize Google Analytics */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${settings.googleAnalyticsId}');
        `}
      </Script>
    </>
  );
}
