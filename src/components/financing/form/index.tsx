"use client";

import Input from "@/components/custom/input";
import FormHeading from "../formHeading";
import SelectList from "@/components/custom/SelectList";
import FormWrapper from "../formWrapper";
import { useContext, useState } from "react";
import { InventoryContext } from "@/context/InventoryContext";
import { useTranslation } from "react-i18next";

const Form = () => {
  const { t } = useTranslation();
  const { setMessage, setShowMessage } = useContext(InventoryContext);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    dob: "",
    cellPhone: "",
    workPhone: "",
    sin: "",
    maritalStatus: "",
    address: "",
    address2: "",
    city: "",
    province: "",
    postalCode: "",
    mortgageRent: "",
    employer: "",
    occupation: "",
    businessPhone: "",
    timeAtEmployer: "",
    grossIncome: "",
    comments: "",
    agreeTerms: false,
    agreeConsent: false,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setIsLoading(true); // Set the loading state to true

    try {
      const response = await fetch(
        "http://localhost:3000/api/email/financing",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
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
        alert(`Error sending email: ${response.status} ${response.statusText}`);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Network error:", error);
      setIsLoading(false);
      alert("Network error: Could not send email. Please try again later.");
    }
  };

  type CheckboxProps = {
    children: React.ReactNode;
    name: string;
  };

  const Checkbox = ({ children, name }: CheckboxProps) => {
    return (
      <label className="flex items-start justify-start gap-20 cursor-pointer">
        <input
          type="checkbox"
          name={name}
          className="border-none accent-main min-w-20 min-h-20"
          required
        />
        {children}
      </label>
    );
  };

  const resetForm = () => {
    setIsLoading(false);
    setFormData({
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      dob: "",
      cellPhone: "",
      workPhone: "",
      sin: "",
      maritalStatus: "",
      address: "",
      address2: "",
      city: "",
      province: "",
      postalCode: "",
      mortgageRent: "",
      employer: "",
      occupation: "",
      businessPhone: "",
      timeAtEmployer: "",
      grossIncome: "",
      comments: "",
      agreeTerms: false,
      agreeConsent: false,
    });
  };

  return (
    <form className="flex flex-col gap-40" onSubmit={handleSubmit}>
      <div className="flex flex-col w-full lg:flex-row gap-30">
        <FormWrapper className="w-full lg:w-[60%] gap-30 flex flex-col justify-between">
          <div className="flex flex-col w-full gap-20">
            <FormHeading text={t("personalInfo")} />
            <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              <Input
                type="text"
                name="firstName"
                placeholder="First Name: *"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
              <Input
                type="text"
                name="middleName"
                placeholder="Middle Name/Initial: "
                value={formData.middleName}
                onChange={handleInputChange}
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Last Name: *"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
              <Input
                type="email"
                name="email"
                placeholder="Email Address: *"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <Input
                type="date"
                name="dob"
                placeholder="Date of Birth: *"
                value={formData.dob}
                onChange={handleInputChange}
                required
              />
              <Input
                type="text"
                name="cellPhone"
                placeholder="Cell Phone: *"
                value={formData.cellPhone}
                onChange={handleInputChange}
                pattern="^\d{10}$"
                required
              />
              <Input
                type="text"
                name="workPhone"
                placeholder="Work Phone:"
                pattern="^\d{10}$"
                value={formData.workPhone}
                onChange={handleInputChange}
              />
              <Input
                type="text"
                name="sin"
                placeholder="Social Insurance Number:"
                value={formData.sin}
                onChange={handleInputChange}
              />
              <SelectList
                className="w-full"
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleInputChange}
                firstOption="Select Marital Status"
                options={[
                  "Single",
                  "Married",
                  "Common Law",
                  "Divorced",
                  "Widowed",
                ]}
                required
              />
            </div>
          </div>

          <div className="flex flex-col w-full gap-20">
            <FormHeading text={t("residentialInfo")} />
            <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
              <Input
                type="text"
                name="address"
                placeholder="Current Address: *"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
              <Input
                type="text"
                name="address2"
                placeholder="Current Address Line 2: "
                value={formData.address2}
                onChange={handleInputChange}
              />
              <Input
                type="text"
                name="city"
                placeholder="City: *"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
              <SelectList
                className="w-full"
                name="province"
                firstOption="Select Province"
                value={formData.province}
                onChange={handleInputChange}
                options={[
                  "Alberta",
                  "British Columbia",
                  "Manitoba",
                  "New Brunswick",
                  "Newfoundland and Labrador",
                  "Northwest Territories",
                  "Nova Scotia",
                  "Nunavut",
                  "Ontario",
                  "Prince Edward Island",
                  "Quebec",
                  "Saskatchewan",
                  "Yukon",
                ]}
                required
              />
              <Input
                type="text"
                name="postalCode"
                placeholder="Postal Code: *"
                value={formData.postalCode}
                onChange={handleInputChange}
                required
              />
              <Input
                type="number"
                name="mortgageRent"
                placeholder="Mortgage Payment / Rent ($): *"
                min={0}
                value={formData.mortgageRent}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </FormWrapper>
        <div className="w-full lg:w-[40%] flex flex-col gap-30">
          <FormWrapper>
            <div className="flex flex-col w-full gap-20">
              <FormHeading text={t("employmentInfo")} />
              <div className="grid grid-cols-1 gap-20">
                <Input
                  type="text"
                  name="employer"
                  placeholder="Current Employer: *"
                  value={formData.employer}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  type="text"
                  name="occupation"
                  placeholder="Title / Occupation: *"
                  value={formData.occupation}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  type="text"
                  name="businessPhone"
                  placeholder="Business Phone: *"
                  pattern="^\d{10}$"
                  value={formData.businessPhone}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  type="text"
                  name="timeAtEmployer"
                  placeholder="Time at Employer - Years and Months: *"
                  value={formData.timeAtEmployer}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  type="number"
                  name="grossIncome"
                  placeholder="Gross Monthly Income ($): *"
                  min={0}
                  value={formData.grossIncome}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </FormWrapper>
          <FormWrapper className={"h-full"}>
            <div className="flex flex-col w-full gap-20">
              <FormHeading text={t("commentsAndCertifications")} />
              <Input
                className={"h-full"}
                placeholder={"Comments, References or Additional Information"}
                name="comments"
                type="text"
                value={formData.comments}
                onChange={handleInputChange}
                textarea
              />
            </div>
          </FormWrapper>
        </div>
      </div>

      <div className="flex flex-col gap-20">
        <Checkbox name={"agreeTerms"}>{t("termsAndConsentOne")}</Checkbox>
        <Checkbox name={"agreeConsent"}>{t("termsAndConsentTwo")}</Checkbox>
      </div>

      <input
        value={t("buttons:submit")}
        className={
          "!w-[70%] !max-w-fit mt-30 bg-main rounded-20 px-50 py-10 text-16 text-white font-medium flex items-center justify-center flex-row gap-15 min-w-fit cursor-pointer disabled:opacity-50 uppercase"
        }
        disabled={isLoading}
        type="submit"
      />
    </form>
  );
};

export default Form;
