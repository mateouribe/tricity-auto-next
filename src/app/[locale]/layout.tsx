import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../../components/global/navbar";
import Footer from "../../components/global/footer";
import Alert from "@/components/global/alert";
import { InventoryProvider } from "../../context/InventoryContext";
import TranslationsProvider from "@/components/global/translationsProvider";
import initTranslations from "../i18n";
import { downloadInventory } from "@/services/ftpService";
import Google from "@/components/global/google";

(async () => {
  console.log("Initial inventory download on server startup.");
  await downloadInventory();
})();

export const metadata: Metadata = {
  title: "Tricity Auto Finance - Waterloo, ON Used Car Dealership",
  description:
    "Tricity Auto is Waterloo's trusted used car dealership offering guaranteed approvals, fast financing, and credit rebuilding. Secure your next vehicle with ease today.",
};

const namespaces = ["nav", "buttons", "footer"];

export default async function RootLayout({
  children,
  locale,
}: Readonly<{
  children: React.ReactNode;
  locale: string;
}>) {
  const { resources } = await initTranslations(locale, namespaces);

  return (
    <html lang="en">
      <head>
        <title>Used Cars Dealership in Waterloo, ON - Tricity Auto</title>
        <meta
          name="description"
          content="Tricity Auto is Waterloo's trusted used car dealership offering guaranteed approvals, fast financing, and credit rebuilding. Secure your next vehicle with ease today."
        />
        <meta
          name="keywords"
          content="vehicle financing, car loans, used cars, auto loans, tricity area, buy here pay here, used car dealership, Ontario car finance, bad credit auto loans, no credit car loans, vehicle search, credit rebuilding, special financing programs, bankruptcy car loans, car inventory, SUVs, sedans, minivans, Ontario used vehicles"
        />
      </head>
      <Google />
      <body>
        <InventoryProvider>
          <TranslationsProvider
            locale={locale}
            resources={resources}
            namespaces={namespaces}
          >
            <Alert />
            <Navbar />
            {children}
            <Footer />
          </TranslationsProvider>
        </InventoryProvider>
      </body>
    </html>
  );
}
