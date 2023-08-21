"use client";
import Image from "next/image";
import React from "react";
import ReactModal from "react-modal";
import { useState } from "react";
import PotionModal from "./PotionModal";
import Notification from "./Notification";

const Potion = ({
  potionName,
  potionImage,
  potionPrice,
  potionEffect,
  potionIngredients,
  cartSize,
  setCartSize,
  notification,
  setNotification,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="potion_card" onClick={openModal}>
        <Image
          className="potion_image"
          width={180}
          height={180}
          alt={potionName}
          src={potionImage}
          priority={true}
        />
        <div className="potion_name_container">
          <h3 className="potion_name">{potionName}</h3>-
          <p className="potion_price">${potionPrice}</p>
        </div>
      </div>
      
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="potion_modal"
        overlayClassName="overlay_modal"
      >
        
        <PotionModal
          cartSize={cartSize}
          setCartSize={setCartSize}
          onRequestClose={closeModal}
          name={potionName}
          price={potionPrice}
          image={potionImage}
          effect={potionEffect}
          ingredients={potionIngredients}
          notification={notification}
          setNotification={setNotification}
        />
      </ReactModal>
      
    </>
  );
};

export default Potion;
