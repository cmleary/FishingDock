import React  from "react";

function FishGameTrophy({trophy}) {

  return (
    <li className="card">
      <img src={trophy.image} alt={trophy.species} />
      <h4>{trophy.species}</h4>
      <small>Points: {trophy.points}</small>
    </li>
  );
}

export default FishGameTrophy;