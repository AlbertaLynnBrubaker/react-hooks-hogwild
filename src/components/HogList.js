import React from "react";

function HogList({hogs}) {

  const hogArray = hogs.map(hog => {

    return (
      <>
        <h3>Name: {hog.name}</h3>
        <p>specialty: {hog.specialty}</p>
        <p>greased: {}</p>
    weight: 2.0,
    "highest medal achieved": "bronze",
    image:
      </>
    )
  })

	return (
		<div>
			
		</div>
	);
}

export default HogList;
