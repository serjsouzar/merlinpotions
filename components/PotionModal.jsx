import Image from "next/image";
import React from "react";

const PotionModal = ({
  name,
  price,
  image,
  effect,
  ingredients,
  onRequestClose,
}) => {
  return (
    <div className="modal">
      <header className="header_close-btn">
        <div className="close_btn">
          <button onClick={onRequestClose}>X</button>
        </div>
      </header>
      <section className="modal_container_info">
        <Image
          className="modal_image"
          width={180}
          height={180}
          alt={name}
          src={image}
        />
        <div className="modal_info">
          <h2>{name}</h2>
          <br/>
          <div className="modal_effect">
          <h3>Use/Effect:</h3>
          <br/>
          <p>{effect}</p>
          <br/>  
          </div>

          <div className="modal_ingredients">
          <h3>Ingredients:</h3>
          <br/>
          <ul>
            {ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <br/>
          </div>      
          <div>
          <h3>Price:</h3>   
          <h3 style={{color:"#e44104"}}>${price}</h3>
          </div>

          <div className="modal_add_cart">
          <button>ADD TO CART</button>    
          </div>   
        </div>
      </section>
    </div>
  );
};

export default PotionModal;
