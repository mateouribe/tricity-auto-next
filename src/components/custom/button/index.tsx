"use client";

import Link from "next/link";

type Props = {
  text: string;
  href: string;
  secondaryColor?: boolean;
  className?: string;
  onClick?: () => void;
  bordered?: boolean;
  hasHoverEffect?: boolean;
};

const Button = ({
  text,
  href,
  secondaryColor = false,
  className,
  onClick = () => {},
  bordered = false,
  hasHoverEffect = true,
}: Props) => {
  return (
    <Link
      className={`rounded-20 px-50 py-10 text-16 text-white font-medium flex items-center justify-center flex-row gap-15 min-w-fit max-w-fit uppercase ${
        hasHoverEffect && "hover:-translate-y-5 transition-all"
      } ${secondaryColor ? "bg-grayMouse" : "bg-main"} ${
        bordered ? "!bg-transparent !border !border-white !text-white" : ""
      } ${className}`}
      href={href}
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

export default Button;
