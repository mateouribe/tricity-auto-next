type Props = {
  title: string;
  content?: string;
  subtitle?: string;
  className?: string;
  containerClassName?: string;
  contentClassName?: string;
  grayContent?: boolean;
  isH1?: boolean;
};

const SectionTitle = ({
  title,
  content,
  subtitle,
  className,
  containerClassName,
  contentClassName,
  grayContent = false,
  isH1 = false,
}: Props) => {
  return (
    <div
      className={`section-title mb-40 flex flex-col gap-30 ${containerClassName}`}
    >
      {subtitle && <span className="text-grayMouse">{subtitle}</span>}
      {isH1 ? (
        <h1
          className={`text-30 md:text-[40px] lg:text-48 font-medium leading-none ${className}`}
        >
          {title}
        </h1>
      ) : (
        <h2
          className={`text-30 md:text-[40px] lg:text-48 font-medium leading-none ${className}`}
        >
          {title}
        </h2>
      )}
      {content && (
        <p className={`${grayContent && "text-grayMouse"} ${contentClassName}`}>
          {content}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
