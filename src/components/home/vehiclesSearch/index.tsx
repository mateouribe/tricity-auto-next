import { TranslationProps } from "@/types/i18nTypes";
import Button from "../../custom/button";
import Input from "../../custom/input";
import MakeSelectList from "../../inventory/makeSelectList";
import VehiclesQuantity from "../../inventory/vehiclesQuantity";
import VehiclesCards from "../../inventory/vehiclesCards";
const VehiclesSearch = ({ t }: TranslationProps) => {
  return (
    <section className="relative py-desktop bg-main">
      <div className="mx-auto px-mobile md:px-tablet lg:px-desktop">
        {/* HEADER */}
        <div className="flex flex-row justify-between">
          <h2 className="font-medium text-white text-20 lg:text-30">
            {t("inventory:title")}
          </h2>
          <VehiclesQuantity />
        </div>

        {/* FILTERS */}
        <div className="flex flex-col flex-wrap items-start justify-start w-full gap-10 md:items-end md:flex-row md:gap-20 my-30">
          <div className="flex flex-row items-center gap-10">
            <label className="text-white text-14">
              {t("inventory:makeSelect")}
            </label>
            <MakeSelectList />
          </div>
          <div className="flex flex-row items-center justify-between flex-1 w-full max-w-full gap-10">
            <Input placeholder="Search" fullWidth type="text" name="search" />
            <Button
              text={t("buttons:search")}
              secondaryColor
              href={"/inventory"}
            />
          </div>
        </div>

        {/* CARS */}
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-60">
          <VehiclesCards skeletonsQuantity={3} />
        </div>
      </div>
    </section>
  );
};

export default VehiclesSearch;
