import Details from "./details";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

type Props = {
  car: {
    title: string;
    year: string;
    make: string;
    model: string;
    price: string;
    odometer: string;
    image: string;
    VIN: string;
  };
};

const CarsCard = ({ car }: Props) => {
  const { t } = useTranslation();

  return (
    <Link
      className="bg-[#fff] rounded-10 flex flex-col overflow-hidden cursor-pointer shadow-sm carContainer min-h-full justify-between hover:scale-[1.01] transition-all duration-500 ease-out hover:shadow-md"
      href={`inventory/cars/${car.VIN}`}
    >
      <Image
        className="w-full h-[245px] max-h-[245px] min-h-[245px] object-cover bg-gray-200"
        src={car.image !== "" ? car.image : "/assets/images/no-car-image.webp"}
        alt={`Image of a ${car.title} available at Tricity Auto, a used car dealership in Waterloo`}
        width={400}
        height={245}
      />
      <div className="flex flex-col justify-between h-full p-20">
        <p className="font-medium">{car.title}</p>
        <div className="flex flex-col gap-5 mt-20">
          <Details title={t("carDetails:year")} value={car.year} />
          <Details title={t("carDetails:make")} value={car.make} />
          <Details title={t("carDetails:model")} value={car.model} />
          <Details title={t("carDetails:odometer")} value={car.odometer} />
        </div>
        <div className="flex flex-row items-center justify-between mt-10">
          <span className="text-[18px]">{t("carDetails:price")}</span>
          <span className="text-[18px] text-main">{car.price}</span>
        </div>
      </div>
      <div className="w-full p-20">
        <p className="rounded-[5px] border-[2px] border-main w-full py-10 text-center font-medium text-main">
          {t("buttons:buyNow")}
        </p>
      </div>
    </Link>
    //     </div>
  );
};

export default CarsCard;
