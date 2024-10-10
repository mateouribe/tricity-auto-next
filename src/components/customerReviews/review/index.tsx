import Image from "next/image";

type Props = {
  name: string;
  image: string;
  review: string;
};

const Review = ({ name, image, review }: Props) => {
  return (
    <div className="cursor-pointer flex flex-col w-full h-full gap-40 p-20 transition-all shadow-sm rounded-20 bg-lightOrange hover:scale-[1.01]">
      <div className="flex flex-row items-center justify-start gap-5">
        <Image
          className="rounded-full size-60"
          src={image}
          alt={`${name}'s profile photo from Google Reviews for Tricity Auto, a trusted used cars dealership in Waterloo, ON`}
          width={60}
          height={60}
        />
        <div className="flex flex-col gap-5">
          <span>{name}</span>
          <span>⭐️⭐️⭐️⭐️⭐️</span>
        </div>
      </div>
      <p>{review}</p>
    </div>
  );
};

export default Review;
