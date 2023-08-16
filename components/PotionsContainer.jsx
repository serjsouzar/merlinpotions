"use client";

import Potion from "./Potion";

const PotionsContainer = ({ potions }) => {
  return (
    <section className="section_container">
      <ul className="potions_section">
        {potions?.map((potion) => (
          <li key={potion.id}>
            <Potion potionName={potion.name} potionImage={potion.image} potionPrice={potion.price}/>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PotionsContainer;
