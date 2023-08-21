"use client";

import Footer from "@/components/Footer";
import PotionsContainer from "@/components/PotionsContainer";
import { useEffect, useState } from "react";
import Loading from "./loading";
import Nav from "@/components/Nav";
import Notification from "@/components/Notification";

const Home = () => {
  const [potions, setPotions] = useState(null);
  const [cartSize, setCartSize] = useState(0);
  const [notification, setNotification] = useState([]);

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
          <Nav cartSize={cartSize} setCartSize={setCartSize} />
          <PotionsContainer
            notification={notification}
            setNotification={setNotification}
            potions={potions}
            cartSize={cartSize}
            setCartSize={setCartSize}
          />
          
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
