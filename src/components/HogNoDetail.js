import React from "react";

import 'semantic-ui-css/semantic.min.css'
import '../index.css';

function HogNoDetail({hog}) {

    return (
    <div className="ui card eight wide column gitTile">
        <h3>Name: {hog.name}</h3>
        <img src={hog.image} alt= "Where's the pork?" />
    </div>
  )
  }


export default HogNoDetail;
