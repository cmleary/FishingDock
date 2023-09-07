import React from "react";
import FishCard from "./FishCard";


function FishList({allFish}) {
  return (
    <ul className="cards">{allFish.map(oneFish => <FishCard key={oneFish.id} oneFish={oneFish}/>)}</ul>
  );
}

export default FishList;