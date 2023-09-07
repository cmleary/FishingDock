import React from "react";

function FishForm({fish, setFish}) {

    const onAddFish = event => {
        event.preventDefault();
        const newFish = {"species": event.target.species.value,
            "habitat": event.target.habitat.value,
            "image": event.target.image.value,
            "description": event.target.image.value,
            "points": Number(event.target.image.value),
        }
      
    fetch('http://localhost:3000/fish', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body:JSON.stringify(newFish)
    }).then(response => response.json())
      .then(newFish => setFish([...fish, newFish]))
  }

  return (
    <div className="new-plant-form">
      <h2>New Fish</h2>
      <form onSubmit = {onAddFish}>
        <input type="text" name="name" placeholder="Fish species" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="text" name="habitat"  placeholder="Habitat" />
        <input type="text" name="description"  placeholder="Description" />
        <input type="number" name="points" step="1"  placeholder="Point value" />
        <button type="submit">Add Fish</button>
      </form>
    </div>
  );

  }
export default FishForm;



