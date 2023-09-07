import React  from "react";

function FishCard({oneFish}) {

  return (
    <li className="card">
      <img src={oneFish.image} alt={oneFish.name} />
      <h4>{oneFish.species}</h4>
      <h4>Habitat: {oneFish.habitat}</h4>
      <p>{oneFish.description}</p>
      <small>Points: {oneFish.points}</small>
    </li>
  );
}

export default FishCard;
