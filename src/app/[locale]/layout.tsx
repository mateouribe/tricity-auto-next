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
