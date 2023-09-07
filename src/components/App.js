import React, { useEffect, useState  } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import FishList from "./FishList";
import Search from "./Search";
import FishForm from "./FishForm";
import FishGame from "./FishGame";

function App() {

  const [allFish, setAllFish] = useState([])
  const [query, setQuery] = useState("")
  const [page, setPage] = useState("/")

  useEffect(() => {
    fetch('http://localhost:4000/fish')
    .then(response => response.json())
    .then(fishData => setAllFish(fishData))
  }, [])

  const onUpdateQuery = event => setQuery(event.target.value)

  const filterFish = allFish.filter(fish => fish.species.toLowerCase().includes(query.toLowerCase()));

  function getCurrentPage() {
    switch(page) {
        case "/":
            return <Home />
        case "/fish":
            return (
              <div>
                <Search query={query} onUpdateQuery= {onUpdateQuery} />
                <FishList allFish={filterFish} />
              </div>)
        case "/form":
            return (
              // <div>
            <FishForm allFish ={allFish} setAllFish={setAllFish}/>
            /* <FishGame/>
            </div> */
            )
        default:
            return <h1>404 not found</h1>
    }
}

  return (
    <div>
      <NavBar onChangePage={setPage} />
            {getCurrentPage()}
    </div>
  );
}

export default App;
