/* eslint-disable react/prop-types */

type Props = {
  title: string;
  content: string;
  icon: React.ReactNode;
};

const WhyUsItem = ({ title, content, icon }: Props) => {
  return (
    <div className="flex flex-row w-full gap-20">
      {icon}
      <div className="w-full gap-5">
        <h4 className="font-medium text-22">{title}</h4>
        <p className="text-grayMouse">{content}</p>
      </div>
    </div>
  );
};

export default WhyUsItem;
