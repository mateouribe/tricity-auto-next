import initTranslations from "@/app/i18n";
import { InventoryProvider } from "@/context/InventoryContext";
import TranslationsProvider from "../translationsProvider";

// (async () => {
//   console.log("Initial inventory download on server startup.");
//   await downloadInventory();
// })();

const Layout = async ({
  children,
  locale,
  namespaces,
}: Readonly<{
  children: React.ReactNode;
  locale: string;
  namespaces: string[];
}>) => {
  const { resources } = await initTranslations(locale, namespaces);
  return (
    <InventoryProvider>
      <TranslationsProvider
        locale={locale}
        resources={resources}
        namespaces={namespaces}
      >
        {children}
      </TranslationsProvider>
    </InventoryProvider>
  );
};

export default Layout;
