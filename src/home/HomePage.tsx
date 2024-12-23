import DetailsCard from "@/components/detailis_card/DetailsCard";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <Navbar />
      <DetailsCard />
    </>
  );
};

export default HomePage;
