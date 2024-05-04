import React, { useState, useEffect } from "react"
import NavBar from "../components/NavBar";
import CupcakeContainer from "../components/CupcakeContainer";
import ReviewForm from "../components/ReviewForm";
import DropdownFilter from "../components/DropdownFilter";

function Shop({cupcakes, setCupcakes}) {

  return (
    <div className="Shop">
      <NavBar />
      <header className="Shop-header">
        <h2>Crazy Good Cupcake Shop</h2>
      </header>
      <main>
        <div>
          <DropdownFilter cupcakes={cupcakes} setCupcakes={setCupcakes}/>
        </div>
        <CupcakeContainer cupcakes={cupcakes} />;
        <ReviewForm />
      </main>
    </div>
  )
}

export default Shop;