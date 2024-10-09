import Page from "@/components/inventory/vehicle/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Used car for sale in Waterloo, ON - Tricity Auto",
  description:
    "Check out this well-maintained used car for sale in Waterloo, ON. Great mileage, affordable price, and financing options.",
  openGraph: {
    title: "Used car for sale in Waterloo, ON - Tricity Auto",
    description:
      "Check out this well-maintained used car for sale in Waterloo, ON. Great mileage, affordable price, and financing options.",
    siteName: "Tricity Auto - Waterloo, ON Used Car Dealership",
    locale: "en_US",
    type: "website",
  },
};

const VehiclePage = ({ params: { vin } }: { params: { vin: string } }) => {
  return <Page vin={vin} />;
};

export default VehiclePage;
