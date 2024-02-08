import React, { useState } from "react";

function NewPlantForm({ addPlant }) {

  const setup = {
    name: "",
    image: "",
    price: 0,
  };

  const [ newPlant, setNewPlant ] = useState(setup);

  function onSubmit(e) {
    e.preventDefault();
    addPlant(newPlant)
  }

  function onChange(e) {
    setNewPlant({
      ...newPlant,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={onChange} />
        <input type="text" name="image" placeholder="Image URL" onChange={onChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={onChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
