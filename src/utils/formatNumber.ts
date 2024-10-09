type Props = {
  value: string | number | null;
};

const formatNumber = ({ value }: Props) => {
  if (value === null) return "0";
  return `${parseInt(value.toString()).toLocaleString()}`;
};

export default formatNumber;
