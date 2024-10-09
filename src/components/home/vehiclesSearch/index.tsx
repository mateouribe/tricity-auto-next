// import { useTranslation } from "react-i18next";
// import CarsCard from "../../global/carsCard";
// import Skeleton from "../../global/skeleton";

import Button from "../../custom/button";
import Input from "../../custom/input";
import MakeSelectList from "../../inventory/makeSelectList";
import VehiclesQuantity from "../../inventory/vehiclesQuantity";
import VehiclesCards from "../../inventory/vehiclesCards";

const VehiclesSearch = () => {
  //   const { t } = useTranslation();
  //   const { inventory, makes } = useContext(InventoryContext);
  //   const [selectedMake] = useState("All");

  //   type PriceProps = {
  //     price: string;
  //   };
  //   const formatPrice = ({ price }: PriceProps) => {
  //     return `$${parseInt(price).toLocaleString()}`;
  //   };

  return (
    <section className="relative py-desktop bg-main">
      <div className="mx-auto px-mobile md:px-tablet lg:px-desktop">
        {/* HEADER */}
        <div className="flex flex-row justify-between">
          <p className="font-medium text-white text-20 lg:text-30">Title</p>
          <VehiclesQuantity />
        </div>

        {/* FILTERS */}
        <div className="flex flex-col flex-wrap items-start justify-start w-full gap-10 md:items-end md:flex-row md:gap-20 my-30">
          <div className="flex flex-row items-center gap-10">
            <label className="text-white text-14">Filter by Make: </label>
            <MakeSelectList />
          </div>
          <div className="flex flex-row items-center justify-between flex-1 w-full max-w-full gap-10">
            <Input placeholder="Search" fullWidth type="text" name="search" />
            <Button text={"Search"} secondaryColor href={"/inventory"} />
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
