"use client";

import Input from "@/components/custom/input";
import { InventoryContext } from "@/context/InventoryContext";
import { useContext, useState } from "react";

const Form = () => {
  const { setMessage, setShowMessage } = useContext(InventoryContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://www.tricityautofinance.com/api/email/contact",
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
        // Log the actual response for debugging
        const errorMessage = await response.text();
        console.error("Error sending email:", errorMessage);
        alert(`Error sending email: ${response.status} ${response.statusText}`);
        setIsLoading(false);
      }
    } catch (error) {
      // Differentiate between network issues and server errors
      console.error("Network error:", error);
      setIsLoading(false);
      alert("Network error: Could not send email. Please try again later.");
    }
  };

  const resetForm = () => {
    setIsLoading(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  };

  return (
    <form className="flex flex-col w-full gap-10" onSubmit={handleSubmit}>
      <div className="flex flex-row gap-10">
        <Input
          placeholder={"First name:"}
          name="firstName"
          type="text"
          value={formData.firstName}
          onChange={handleChange}
          fullWidth
          required
        />
        <Input
          placeholder={"Last name:"}
          name="lastName"
          type="text"
          value={formData.lastName}
          onChange={handleChange}
          fullWidth
          required
        />
      </div>
      <Input
        placeholder={"Email:"}
        name="email"
        type={"email"}
        value={formData.email}
        onChange={handleChange}
        required
        fullWidth
      />
      <Input
        placeholder={"Phone number: 1234567890"}
        name="phoneNumber"
        type={"tel"}
        value={formData.phoneNumber}
        onChange={handleChange}
        pattern="^\d{10}$"
        required
        fullWidth
      />
      <Input
        placeholder={"Message:"}
        name="message"
        type="text"
        value={formData.message}
        onChange={handleChange}
        className={"min-h-[60px]"}
        required
        textarea
      />
      <input
        value={"submit"}
        className={
          "!w-[70%] !max-w-none mt-30 bg-main rounded-20 px-50 py-10 text-16 text-white font-medium flex items-center justify-center flex-row gap-15 min-w-fit cursor-pointer disabled:opacity-50 uppercase hover:bg-main/80 transition-all duration-200"
        }
        disabled={isLoading}
        type="submit"
      />
    </form>
  );
};

export default Form;
