import React from "react";

const PotionModal = ({ name, onRequestClose }) => {
  return (
  <div>
    <button onClick={onRequestClose}>Close</button>
    <h1>Este é o modal para {name}</h1>
  </div>
  )
};

export default PotionModal;
