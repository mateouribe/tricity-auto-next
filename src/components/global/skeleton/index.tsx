import "./index.css";

type Props = {
  width: string | number;
  height: string | number;
  className?: string;
};

const Skeleton = ({ width, height, className }: Props) => {
  const style = {
    width,
    height,
  };
  return (
    <span
      className={`skeleton rounded-20 ${className} overflow-hidden`}
      style={style}
    ></span>
  );
};

export default Skeleton;
