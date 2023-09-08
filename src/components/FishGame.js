import React from "react";
import FishGameTrophy from "./FishGameTrophy";
import { useState } from "react";

function FishGame({allFish}) {
    const [bucket, setBucket] = useState([])
    const [points, setPoints]  = useState(0);
    const [casts,setCasts]  = useState(5);

    function cast() {
      if (casts > 0) {
        setTimeout(() =>{
          alert('!!!');
          let blam = []
          blam = allFish[(Math.floor(Math.random() * allFish.length))]
          setPoints(points + blam.points)
          setBucket([...bucket,blam]) 
          setCasts(casts -1);
        }, 2000)
      }
      else alert('Too tired to cast.')
    }
        
  return (
    <div>
      <button className="cast" onClick={cast}>Cast</button>
      <h1 className="points">{points}</h1>
      <ul className="cards">{bucket.map(trophy => <FishGameTrophy key={trophy.id} trophy={trophy}/>)}</ul>
    </div>
  );
}

export default FishGame;