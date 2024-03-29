import React, { useEffect, useState  } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import FishList from "./FishList";
import Search from "./Search";
import FishForm from "./FishForm";
import FishGame from "./FishGame";
import { Switch, Route } from "react-router-dom";

function App() {

  const [allFish, setAllFish] = useState([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    fetch('http://localhost:4000/fish')
    .then(response => response.json())
    .then(fishData => setAllFish(fishData))
  }, [])

  const onUpdateQuery = event => setQuery(event.target.value)

  const filterFish = allFish.filter(fish => fish.species.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>   
          <Route path="/fish">
            <div>
              <Search query={query} onUpdateQuery= {onUpdateQuery} />
              <FishForm allFish ={allFish} setAllFish={setAllFish}/>
              <FishList allFish={filterFish} />
            </div>
          </Route>
          <Route path="/game">
            <div>
              <FishGame allFish={allFish}/>
            </div> 
          </Route>
        </Switch>
    </div>
  );
}

export default App;
