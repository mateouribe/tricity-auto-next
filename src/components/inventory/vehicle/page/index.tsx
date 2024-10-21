"use client";

import SectionTitle from "@/components/global/sectionTitle";
import Skeleton from "@/components/global/skeleton";
import { InventoryContext, InventoryItem } from "@/context/InventoryContext";
import React, { useContext, useEffect, useState } from "react";
import Details from "../../carsCard/details";
import Carousel from "../../carousel";
import Input from "@/components/custom/input";
import { useTranslation } from "react-i18next";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
};

const Page = ({ vin }: { vin: string }) => {
  const { t } = useTranslation();
  const { inventory, setMessage, setShowMessage } =
    useContext(InventoryContext);
  const [car, setVehicle] = useState<InventoryItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [isLoadingForm, setIsLoadingForm] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (inventory && vin) {
      const foundVehicle = inventory.find((v) => v.VIN === vin);
      if (!foundVehicle) {
        setVehicle(null);
      } else {
        setVehicle(foundVehicle);
        setIsLoading(false);
      }
    }
  }, [inventory, vin]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoadingForm(true);

    if (car) {
      const updatedMessage =
        formData.message +
        `\n\nVehicle: ${car?.YEAR} ${car?.MAKE} ${car?.MODEL} | ${car?.TRIM}`;

      const updatedFormData = { ...formData, message: updatedMessage };

      try {
        const response = await fetch(
          "https://www.tricityautofinance.com/api/email/contact",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedFormData),
          }
        );

        if (response.ok) {
          resetForm();
          setShowMessage(true);
          setMessage(
            "Thank you for contacting us! We will get back to you shortly."
          );
        } else {
          const errorMessage = await response.text();
          console.error("Error sending email:", errorMessage);
          alert(
            `Error sending email: ${response.status} ${response.statusText}`
          );
        }
      } catch (error) {
        console.error("Network error:", error);
        alert("Network error: Could not send email. Please try again later.");
      } finally {
        setIsLoadingForm(false);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
    setIsLoadingForm(false);
  };

  if (car === null && !isLoading) {
    return (
      <section className="h-[100vh] w-full flex items-center justify-center">
        <h1 className="text-30 md:text-48 text-main">Vehicle not found</h1>
      </section>
    );
  }

  return (
    <section className="py-[70px]">
      <div className="flex items-start md:items-center justify-between md:flex-row flex-col px-mobile md:px-tablet lg:px-desktop mb-[70px] gap-10 md:gap-0">
        {isLoading ? (
          <Skeleton width={"60%"} height={50} />
        ) : (
          <SectionTitle
            title={`${car?.YEAR} ${car?.MAKE} ${car?.MODEL} | ${car?.TRIM}`}
            containerClassName={"!mb-0 w-[65%]"}
            isH1
          />
        )}
        {isLoading ? (
          <Skeleton width={"20%"} height={50} />
        ) : (
          <div className="flex flex-col items-start gap-5 md:items-end">
            <span className="font-medium leading-none text-30 md:text-48 text-main">
              {car?.LISTPRICE
                ? `$${parseInt(car?.LISTPRICE).toLocaleString()}`
                : "Contac us"}
            </span>

            {car?.LISTPRICE && (
              <span className="text-right text-grayMouse text-14">
                Plus taxes
              </span>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-col w-full h-full lg:flex-row lg:row p-mobile lg:p-0 lg:pr-desktop gap-30">
        {/* Vehicle Image - left */}
        <aside className="w-full lg:w-[60%] h-full">
          {isLoading ? (
            <>
              <Skeleton
                width={"100%"}
                height={"75vh"}
                className={"lg:!border-l-none"}
              />
              <div className="grid w-full grid-cols-10 gap-10">
                <Skeleton
                  width={"100%"}
                  height={"80px"}
                  className="!rounded-[5px]"
                />
                <Skeleton
                  width={"100%"}
                  height={"80px"}
                  className="!rounded-[5px]"
                />
                <Skeleton
                  width={"100%"}
                  height={"80px"}
                  className="!rounded-[5px]"
                />
                <Skeleton
                  width={"100%"}
                  height={"80px"}
                  className="!rounded-[5px]"
                />
                <Skeleton
                  width={"100%"}
                  height={"80px"}
                  className="!rounded-[5px]"
                />
                <Skeleton
                  width={"100%"}
                  height={"80px"}
                  className="!rounded-[5px]"
                />
                <Skeleton
                  width={"100%"}
                  height={"80px"}
                  className="!rounded-[5px]"
                />
                <Skeleton
                  width={"100%"}
                  height={"80px"}
                  className="!rounded-[5px]"
                />
                <Skeleton
                  width={"100%"}
                  height={"80px"}
                  className="!rounded-[5px]"
                />
                <Skeleton
                  width={"100%"}
                  height={"80px"}
                  className="!rounded-[5px]"
                />
              </div>
            </>
          ) : (
            <Carousel
              images={
                car?.PHOTOS
                  ? car?.PHOTOS.split(",")
                  : ["/assets/images/no-car-image.webp"]
              }
            />
          )}
        </aside>

        {/* Vehicle Details - right */}
        <aside className="w-full lg:w-[40%] gap-30 flex flex-col justify-between">
          <div className="flex flex-col gap-10">
            <h5 className="font-medium text-22">Description</h5>
            {isLoading ? (
              <Skeleton width={"100%"} height={"40vh"} />
            ) : (
              <div className="flex flex-col gap-10">
                {car?.MAKE && (
                  <Details title={t("make")} value={car?.MAKE} isPage />
                )}
                {car?.MODEL && (
                  <Details title={t("model")} value={car?.MODEL} isPage />
                )}

                {car?.YEAR && (
                  <Details title={t("year")} value={car?.YEAR} isPage />
                )}
                {car?.TRIM && (
                  <Details title={t("trim")} value={car?.TRIM} isPage />
                )}
                {car?.DRIVETYPE && (
                  <Details
                    title={t("driveType")}
                    value={car?.DRIVETYPE}
                    isPage
                  />
                )}
                {car?.TRANSMISSIONTYPE &&
                  car?.TRANSMISSIONTYPE.toLowerCase() !==
                    "transmission type" && (
                    <Details
                      title={t("transmissionType")}
                      value={car?.TRANSMISSIONTYPE}
                      isPage
                    />
                  )}
                {car?.ODOMETER &&
                  car?.ODOMETER.toLowerCase() !== "odometer" && (
                    <Details
                      title={t("odometer")}
                      value={`${parseInt(car?.ODOMETER).toLocaleString(
                        "en-US"
                      )} kms`}
                      isPage
                    />
                  )}
                {car?.EXTCOLOUR && (
                  <Details
                    title={t("exteriorColor")}
                    value={car?.EXTCOLOUR}
                    isPage
                  />
                )}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-10">
            <h5 className="font-medium text-22">{t("contactUs")}</h5>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-row gap-10">
                <Input
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder={"First Name"}
                  className={"!bg-[#F2F0EE]"}
                  required
                  fullWidth
                />
                <Input
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder={"Last Name"}
                  className={"!bg-[#F2F0EE]"}
                  fullWidth
                  required
                />
              </div>
              <Input
                name="email"
                type={"email"}
                value={formData.email}
                onChange={handleChange}
                placeholder={"Email"}
                className={"!bg-[#F2F0EE] mt-10"}
                required
                fullWidth
              />
              <Input
                name="phoneNumber"
                type={"tel"}
                value={formData.phoneNumber}
                onChange={handleChange}
                pattern="^\d{10}$"
                placeholder={"Phone Number"}
                className={"!bg-[#F2F0EE] mt-10"}
                required
                fullWidth
              />
              <div className="flex flex-row items-center gap-10">
                <Input
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={"Message"}
                  className={"!bg-[#F2F0EE] mt-10"}
                  textarea
                  fullWidth
                  required
                />
                <input
                  className={`bg-main py-10 w-full rounded-full text-white cursor-pointer uppercase ${
                    isLoadingForm && "opacity-50"
                  }`}
                  value={t("buttons:submit")}
                  type="submit"
                  disabled={isLoadingForm}
                />
              </div>
            </form>
          </div>
        </aside>
      </div>

      <div className="pt-50 px-mobile md:px-tablet lg:px-desktop">
        {!isLoading && car?.OPTIONS && (
          <>
            <h5 className="mb-10 font-medium text-22">{t("options")}</h5>
            <div className="flex flex-row flex-wrap gap-10">
              {car?.OPTIONS.split(";").map((option, index) => (
                <span
                  className="px-10 py-5 cursor-default bg-[#F2F0EE] text-[#A6A5A4] rounded-full"
                  key={index}
                >
                  {option}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Page;
