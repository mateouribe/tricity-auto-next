type Props = {
  title: string;
  value: string | number | null;
  isPage?: boolean;
};

const Details = ({ title, value, isPage = false }: Props) => {
  return (
    <div
      className={`flex flex-row items-center justify-between ${
        isPage && "pr-0 lg:pr-40 pb-5 border-b border-[#D7D7D7]"
      }`}
    >
      <span className="text-grayMouse">{title}</span>
      <span>{value}</span>
    </div>
  );
};

export default Details;
