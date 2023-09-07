import React from "react";
import FishGameTrophy from "./FishGameTrophy";


function FishGame() {

    /*  Click cast button

        fetch single random fish with delay
    
        points displayed up top go up,passes image to trophy
    
        Trophy shows storage of catch*/
        function Cast() {
            fetch('http://localhost:4000/fish')
            .then(response => response.json())
            .then(data => console.log(data))
        }

  return (
    <button onClick={Cast}>Add Fish</button>
  );
}

export default FishGame;