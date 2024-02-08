import React, { useState } from "react";

function PlantCard({ plant }) {
  const { id, name, image, price } = plant;
  const [isInStock, setIsInStock] = useState(true);

  function onClick() {
    setIsInStock(!isInStock);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={onClick}>In Stock</button>
      ) : (
        <button onClick={onClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
