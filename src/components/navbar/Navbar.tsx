import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex max-sm:flex-col flex-row justify-start w-full bg-[#00ced1]">
      <div className="bg-transparent">
        <img
          src="https://resultsarchives.nic.in/cbse/Images/cbseResult.jpg"
          className="w-[60rem] max-sm:w-[30rem] m-2 h-20 "
          alt="cbse logo"
        />
      </div>
      <div className="w-[70%] bg-transparent"></div>
      <div className="flex bg-transparent flex-col mr-2 mt-2 ">
        <h2 className=" mr-3 bg-transparent md:text-lg lg:text-2xl max-sm:ml-4 max-xl:text-xl sm:text-md font-semibold text-white underline ">
          https://cbseresults.vercel.app
        </h2>
        <h3 className="bg-transparent text-xl max-sm:text-start max-sm:ml-4 text-end mr-2 text-[#fff] font-semibold mt-2 ">
          Examination Result 2024
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
