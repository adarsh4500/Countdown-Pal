import React from "react";

const Page = (props) => {
  return (
    <div className="flex flex-col h-4/5 w-4/5 mx-auto my-auto items-center justify-center text-center border-2">
      <h1 className=" text-6xl my-4">Lorem Ipsum Name</h1>
      <h1 className="text-8xl my-4"> Day 00/00/00 00:00:00</h1>
      <div className=" text-sm my-8 text-left mx-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </div>
  );
};

export default Page;
