import React, {useState} from "react";
import HogDetail from "./HogDetail";
import HogNoDetail from "./HogNoDetail";

function HogTile({hog}) {
  const [onHog, setOnHog] = useState(false)

  const handleClick = () => {
    setOnHog(onHog => !onHog)
  }

  return (
    <div className="ui card eight wide column gitTile" onClick= {handleClick}>
        {onHog? <HogDetail hog= {hog}/> : <HogNoDetail hog={hog}/>}
    </div>
  )
  }


export default HogTile;