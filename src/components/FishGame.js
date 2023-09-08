import React from "react";
import FishGameTrophy from "./FishGameTrophy";
import { useState } from "react";

function FishGame({allFish}) {

    /*  Click cast button

        fetch single random fish with delay
    
        points displayed up top go up,passes image to trophy
    
        Trophy shows storage of catch*/
        const [bucket, setBucket] = useState([])
        
        function cast() {
           setTimeout(() =>{
               alert('!!!');
               let blam = []
               blam = allFish[(Math.floor(Math.random() * allFish.length))]
               setBucket([...bucket,blam])
             }, 2000)
        }
        
  return (
    <div>
      <button onClick={cast}>Cast</button>
       <ul className="cards">{bucket.map(trophy => <FishGameTrophy key={trophy.id} trophy={trophy}/>)}</ul>
    </div>
  );
}

export default FishGame;