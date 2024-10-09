type Props = {
  label?: string;
  options: string[];
  name: string;
  required?: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  firstOption?: string;
  noFirstOption?: boolean;
};

const SelectList = ({
  label,
  options,
  name,
  required = false,
  value,
  onChange,
  className = "",
  firstOption = "Select an option",
  noFirstOption = false,
}: Props) => {
  return (
    <div>
      {label && <span>{label}</span>}
      <select
        className={`px-20 py-10 rounded-full bg-white text-black focus:outline-none ${className}`}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
      >
        {!noFirstOption && (
          <option value="" disabled>
            {firstOption}
          </option>
        )}
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectList;
