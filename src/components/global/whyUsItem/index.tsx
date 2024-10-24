/* eslint-disable react/prop-types */

import Link from "next/link";

type Props = {
  title: string;
  content: string;
  icon: React.ReactNode;
  href: string;
};

const WhyUsItem = ({ title, content, icon, href }: Props) => {
  return (
    <Link className="flex flex-row w-full gap-20" href={href}>
      {icon}
      <div className="w-full gap-5">
        <h3 className="font-medium text-22">{title}</h3>
        <p className="text-grayMouse">{content}</p>
      </div>
    </Link>
  );
};

export default WhyUsItem;
