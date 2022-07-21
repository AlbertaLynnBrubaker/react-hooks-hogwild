import React, {useState} from "react";
import HogTile from "./HogTile";

function HogList({hogs}) {

  const hogArray = hogs.map(hog => {

    return (
      <HogTile key= {hog.name} hog= {hog}/>
    )
  })


	return (
    <div>
        <div className="ui eight stackable cards">{hogArray}</div>
        <div></div>
    </div>
	);
}

export default HogList;
