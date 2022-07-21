import React from "react";
import HogTile from "./HogTile";

import 'semantic-ui-css/semantic.min.css'
import '../index.css';

function HogList({hogs}) {

  const hogArray = hogs.map(hog => {

    return (
      <HogTile key= {hog.name} hog={hog}/>
    )
  })

	return (
    <div className="ui three stackable cards">
        {hogArray}
    </div>
	);
}

export default HogList;
