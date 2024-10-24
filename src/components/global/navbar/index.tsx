import Link from "next/link";
import Image from "next/image";
import Mobile from "./mobile";
import UnorganizedList from "./unorganizedList";

const Navbar = () => {
  return (
    <header>
      <div
        className={`hidden lg:block sticky top-0 left-0 z-[999] pt-20 pb-10 bg-white`}
      >
        <nav className="flex flex-row items-center px-20 lg:px-[60px] justify-between">
          <Link href={"/"}>
            <Image
              className="w-auto bg-contain cursor-pointer h-100"
              alt="Tricity Auto logo, used cars in Waterloo"
              loading="lazy"
              src={"/assets/images/logo.svg"}
              width={134}
              height={134}
            />
          </Link>

          <UnorganizedList />
        </nav>
      </div>

      <Mobile />
    </header>
  );
};

export default Navbar;
