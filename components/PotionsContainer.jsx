import Potion from "./Potion";

const PotionsContainer = ({ potions, onRequestOpen }) => {

  return (
    <section className="section_container">
      <div className="potion_section_title">
      <h1>Potions</h1>
      </div>
      <ul className="potions_section">
        {potions?.map((potion) => (
          <li key={potion.id}>
            <Potion
              potionName={potion.name}
              potionImage={potion.image}
              potionPrice={potion.price}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PotionsContainer;

/**
 
 */
