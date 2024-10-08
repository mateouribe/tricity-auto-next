import nodemailer, { TransportOptions } from "nodemailer";
import { mailConfig } from "../config/mailConfig";

const transporter = nodemailer.createTransport(mailConfig as TransportOptions);

interface ContactEmailOptions {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  message?: string;
}

interface FinancingEmailOptions {
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  dob: string;
  cellPhone: string;
  workPhone?: string;
  sin?: string;
  maritalStatus: string;
  address: string;
  address2?: string;
  city: string;
  province: string;
  postalCode: string;
  mortgageRent: number;
  employer: string;
  occupation: string;
  businessPhone: string;
  timeAtEmployer: string;
  grossIncome: number;
  comments?: string;
}

const sendContactEmail = async ({
  firstName,
  lastName,
  phoneNumber,
  email,
  message,
}: ContactEmailOptions): Promise<void> => {
  const formattedDate = new Date().toISOString();
  const mailOptions = {
    from: email,
    to: "tricityauto1@gmail.com",
    subject: `New Contact Form Submission from ${firstName} ${lastName}`,
    text: `Name: ${firstName} ${lastName}\nPhone: ${phoneNumber}\nEmail: ${email}\nMessage: ${message}\nReceived at: ${formattedDate}`,
  };
  await transporter.sendMail(mailOptions);
};

const sendFinancingEmail = async ({
  firstName,
  middleName,
  lastName,
  email,
  dob,
  cellPhone,
  workPhone,
  sin,
  maritalStatus,
  address,
  address2,
  city,
  province,
  postalCode,
  mortgageRent,
  employer,
  occupation,
  businessPhone,
  timeAtEmployer,
  grossIncome,
  comments,
}: FinancingEmailOptions): Promise<void> => {
  const formattedDate = new Date().toISOString();

  const xmlContent = `
    <?xml version="1.0"?>
    <adf>
      <prospect status="new">
        <requestdate>${formattedDate}</requestdate>
        <customer>
          <comments>${comments || "No additional comments provided."}</comments>
          <contact>
            <name part="full">${firstName || ""} ${middleName || ""} ${
    lastName || ""
  }</name>
            <name part="first">${firstName || ""}</name>
            <name part="last">${lastName || ""}</name>
            <phone type="cellphone">${cellPhone || ""}</phone>
            <email>${email || ""}</email>
            <address>
              <street>${address || ""}</street>
              <apartment>${address2 || ""}</apartment>
              <city>${city || ""}</city>
              <regioncode>${province || ""}</regioncode>
              <postalcode>${postalCode || ""}</postalcode>
              <country>CA</country>
            </address>
          </contact>
        </customer>
        <provider>
          <name>Website</name>
        </provider>
      </prospect>
    </adf>
  `;

  const mailOptionsDealerPull = {
    from: email || "no-reply@yourdomain.com",
    to: "tricity@leads.dealerpull.com",
    cc: "samacleinc@gmail.com",
    subject: `New Application for Ontario Loan sent by ${
      firstName || "Unknown"
    } ${lastName || "Unknown"} for Tricity Auto`,
    text: xmlContent,
  };

  const mailOptionsTricityAuto = {
    from: email || "no-reply@samacle.com",
    to: "tricityauto1@gmail.com",
    subject: `New Application for Ontario Loan sent by ${
      firstName || "Unknown"
    } ${lastName || "Unknown"}`,
    text: `
      A new application has been submitted with the following details:

      **Personal Information**
      - First Name: ${firstName || "N/A"}
      - Middle Name: ${middleName || "N/A"}
      - Last Name: ${lastName || "N/A"}
      - Email: ${email || "N/A"}
      - Date of Birth: ${dob || "N/A"}
      - Cell Phone: ${cellPhone || "N/A"}
      - Work Phone: ${workPhone || "N/A"}
      - Social Insurance Number: ${sin || "N/A"}
      - Marital Status: ${maritalStatus || "N/A"}

      **Residential Information**
      - Current Address: ${address || "N/A"}
      - Address Line 2: ${address2 || "N/A"}
      - City: ${city || "N/A"}
      - Province: ${province || "N/A"}
      - Postal Code: ${postalCode || "N/A"}
      - Mortgage Payment / Rent: $${mortgageRent || "N/A"}

      **Employment Information**
      - Current Employer: ${employer || "N/A"}
      - Title / Occupation: ${occupation || "N/A"}
      - Business Phone: ${businessPhone || "N/A"}
      - Time at Employer: ${timeAtEmployer || "N/A"}
      - Gross Monthly Income: $${grossIncome || "N/A"}

      **Additional Comments**
      ${comments || "No additional comments provided."}

      Thank you,
      Samacle Team
    `,
  };

  await transporter.sendMail(mailOptionsDealerPull);
  await transporter.sendMail(mailOptionsTricityAuto);
};

export const emailService = {
  sendContactEmail,
  sendFinancingEmail,
};
