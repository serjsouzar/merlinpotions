"use client";

import Nav from "@/components/Nav";
import PotionsContainer from "@/components/PotionsContainer";
import { useEffect, useState } from "react";

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
      <Nav />
      <PotionsContainer potions={potions} />      
    </>
  );
};

export default Home;

