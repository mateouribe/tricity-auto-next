type Props = {
  text: string;
};
const FormHeading = ({ text }: Props) => {
  return <span className="font-medium text-18 md:text-22">{text}</span>;
};

export default FormHeading;
