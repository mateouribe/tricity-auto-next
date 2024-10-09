type Props = {
  label?: string;
  placeholder?: string;
  type: string;
  name: string;
  className?: string;
  value?: string;
  onChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  required?: boolean;
  fullWidth?: boolean;
  textarea?: boolean;
  pattern?: string | null;
  containerClassName?: string;
  min?: number | null;
};

const Input = ({
  label,
  placeholder,
  type,
  name,
  className,
  value,
  onChange,
  required = false,
  fullWidth = false,
  textarea = false,
  pattern = null,
  containerClassName = "",
  min = null,
}: Props) => {
  return (
    <div
      className={`${(fullWidth || textarea) && "w-full"} ${containerClassName}`}
    >
      {label && <span>{label}</span>}
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={(event) =>
            onChange &&
            onChange(
              event as
                | React.ChangeEvent<HTMLInputElement>
                | React.ChangeEvent<HTMLTextAreaElement>
            )
          }
          className={`w-full rounded-20 bg-white placeholder:text-[#C2C1C0] px-20 py-10 min-h-[50px] max-h-[100px] focus-visible:outline-none focus-visible:!outline-main/60 ${className}`}
          placeholder={placeholder}
          required={required}
        />
      ) : (
        <input
          className={`px-20 py-10 rounded-full bg-white placeholder:text-[#C2C1C0] focus-visible:outline-none focus-visible:!outline-main/60 ${className} w-full`}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          pattern={pattern ?? undefined}
          min={min ?? undefined}
        />
      )}
    </div>
  );
};

export default Input;
