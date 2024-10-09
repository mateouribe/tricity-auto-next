type Props = {
  children: React.ReactNode;
  className?: string;
};
const FormWrapper = ({ children, className }: Props) => {
  return (
    <div
      className={`flex flex-col items-start justify-start p-30 gap-30 bg-lightOrange rounded-20 ${className} form`}
    >
      {children}
    </div>
  );
};

export default FormWrapper;
