import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { placeholder } from "@babel/types";

function PlantPage() {

  const [ plants, setPlants ] = useState([]);
  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(dbPlants => setPlants(dbPlants))
  }, []);

  const [ filter, setFilter ] = useState("");
  function changeFilter(text) {
    setFilter(text);
} 

function addPlant(newPlant) {

fetch("http://localhost:6001/plants", {
  method: "POST",
  headers: { "Content-Type": "Application/JSON" },
  body: JSON.stringify(newPlant)
})
.then(response => response.json())
.then(addedPlant => {
    setPlants([...plants, addedPlant]);
});
}

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search changeFilter={changeFilter}/>
      <PlantList plants={plants} filter={filter} />
    </main>
  );
}

export default PlantPage;
