import React, {useState, useEffect} from "react";
import CupcakeCard from "./CupcakeCard";

function CupcakeContainer({cupcakes}) {

    const cupcake = cupcakes.map((cupcake) => {
        return <CupcakeCard key={cupcake.id} cupcake={cupcake}/>
      })
console.log(cupcake)
    return(
        <div className="card-container">
            {cupcake}
        </div>
    )
}

export default CupcakeContainer;