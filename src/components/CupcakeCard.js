import React, { useState, useEffect } from "react"

function CupcakeCard({cupcake}) {

const {name, image, price} = cupcake

    return (
        <div className="card" >
        <img src={image} alt={name} className="cupcake-images"/>
        <h4>{name}</h4>
        <p>Price: {price}</p>
        {/* <button onClick={(e) => handelDelete(e)}>X</button> */}
      </div>

)
}

export default CupcakeCard;