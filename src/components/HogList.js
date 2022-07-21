import React, {useState} from "react";
import HogTile from "./HogTile";

function HogList({hogs}) {
  const [selectGreased, setSelectGreased] = useState('All')

  const filteredHogs = hogs.filter(hog => {
    if (selectGreased === "All") {
      return true;
    } else if (selectGreased === "Greased") {
      return hog.greased === true;
    } else if (selectGreased === "Not Greased") {
      return hog.greased === false;
    }
  })

  const displayHogs = filteredHogs.map(hog => {

    return (
      <HogTile key= {hog.name} hog= {hog}/>
    )
  })

  const handleFilter = (e) => {
    setSelectGreased(e.target.value)
  }

	return (
    <div>
      <div id="filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All" default>All</option>
          <option value="Greased">Greased</option>
          <option value="Not Greased">Not Greased</option>
        </select>
      </div>
      <div className="ui eight stackable cards">{displayHogs}</div>
      
    </div>
	);
}

export default HogList;
