import React from "react";

function HogDetail({hog}) {

    return (
    <div className="ui card eight wide column gitTile">
        <h3>Name: {hog.name}</h3>
        <img src={hog.image} alt= "Where's the pork?" />
        <p>Specialty: {hog.specialty}</p>
        <p>Greased: {hog.greased ? "Yes" : "No"}</p>
        <p>weight: {hog.weight}</p>
        <p>Highest medal achieved: {hog["highest medal achieved"]}</p>
    </div>
  )
  }


export default HogDetail;
