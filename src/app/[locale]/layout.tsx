import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../../components/global/navbar";
import Footer from "../../components/global/footer";
import Alert from "@/components/global/alert";
import { InventoryProvider } from "../../context/InventoryContext";
import TranslationsProvider from "@/components/global/translationsProvider";
import initTranslations from "../i18n";

export const metadata: Metadata = {
  title: "Tricity Auto Finance - Waterloo, ON Used Car Dealership",
  description:
    "Tricity Auto is Waterloo's trusted used car dealership offering guaranteed approvals, fast financing, and credit rebuilding. Secure your next vehicle with ease today.",
};

// if (typeof window === "undefined") {
//   inventoryCron();
// }

const namespaces = ["nav"];

export default async function RootLayout({
  children,
  locale,
}: Readonly<{
  children: React.ReactNode;
  locale: string;
}>) {
  const { t, resources } = await initTranslations(locale, namespaces);

  return (
    <html lang="en">
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