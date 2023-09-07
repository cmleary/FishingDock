import React, { useEffect, useState  } from "react";
import Home from "./Home";
import FishList from "./FishList";
import Search from "./Search";
import FishForm from "./FishForm";

function App() {

    const [allFish, setAllFish] = useState([])
    const [query, setQuery] = useState("")

  useEffect(() => {
    fetch('http://localhost:4000/fish')
    .then(response => response.json())
    .then(fishData => setAllFish(fishData))
    }, [])

  const onUpdateQuery = event => setQuery(event.target.value)

  const filterFish = allFish.filter(fish => query ? fish.species.toLowerCase().includes(query.toLowerCase()) : true);

  return (
    
    <div>
      <Home />
      <Search query={query} onUpdateQuery= {onUpdateQuery} />
      <FishList allFish={filterFish} />
      <FishForm allFish ={allFish} setAllFish={setAllFish}/>
      {/* <FishGame /> */}
    </div>
  );
}

export default App;
