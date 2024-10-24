import "./globals.css";
import { downloadInventory } from "@/services/ftpService";
import Google from "@/components/global/google";
import Layout from "@/components/global/layout";
import Navbar from "@/components/global/navbar";
import Alert from "@/components/global/alert";
import Footer from "@/components/global/footer";

(async () => {
  console.log("Initial inventory download on server startup.");
  await downloadInventory();
})();

const namespaces = ["nav", "buttons", "footer"];

export default async function RootLayout({
  children,
  locale,
}: Readonly<{
  children: React.ReactNode;
  locale: string;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="keywords"
          content="car financing, car loans, used cars, auto loans, tricity area, buy here pay here, used car dealership, Ontario car finance, bad credit auto loans, no credit car loans, car search, credit rebuilding, special financing programs, bankruptcy car loans, car inventory, SUVs, sedans, minivans, Ontario used cars"
        />
        <Google />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              name: "Used Cars Dealership in Waterloo, ON | Tricity Auto",
              image:
                "https://www.tricityautofinance.com/assets/images/tricity-auto-social-media-img.png",
              telephone: "(519) 576-3421",
              email: "mailto:tricityauto1@gmail.com",
              url: "https://www.tricityautofinance.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "109 Bridgeport Rd E",
                addressLocality: "Waterloo, ON",
                postalCode: "N2J 2K3",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Monday",
                  opens: "10:00",
                  closes: "20:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Tuesday",
                  opens: "10:00",
                  closes: "20:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Wednesday",
                  opens: "10:00",
                  closes: "20:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Thursday",
                  opens: "10:00",
                  closes: "20:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Friday",
                  opens: "10:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "10:00",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "00:00",
                  closes: "00:00",
                  description: "Closed",
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <Layout locale={locale} namespaces={namespaces}>
          <Alert />
          <Navbar />
          {children}
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
