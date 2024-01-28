import Link from "next/link";
const Header = () => {
  return (
    <>
      <div className="flex flex-row h-24 items-center text-white bg-white bg-opacity-5">
        <Link href="/">
          <h1 className=" text-3xl font-medium ml-8 mr-auto">Countdown Pal</h1>
        </Link>
        <div className="flex flex-row align-middle ml-auto">
          <Link href="/events">
            <button className="mx-8 ">Events</button>
          </Link>
          {/* <Link href="/login">
            <button className="mx-3 ">Login</button>
          </Link>
          <Link href="/signup">
            <button className="mx-3  ">Signup</button>
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default Header;
