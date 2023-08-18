"use client";

import Footer from "@/components/Footer";
import PotionsContainer from "@/components/PotionsContainer";
import { useEffect, useState } from "react";
import Loading from "./loading";

const Home = () => {
  const [potions, setPotions] = useState(null);

  useEffect(() => {
    fetch("/potions.json")
      .then((response) => response.json())
      .then((data) => {
        setPotions(Object.values(data.potions));
      });
  }, []);

  return (
    <>
      {potions !== null ? (
        <>
          {" "}
          <PotionsContainer potions={potions} />
          <Footer />
        </>
      ) : (
        <>
          <Loading />
        </>
      )}
    </>
  );
};

export default Home;
