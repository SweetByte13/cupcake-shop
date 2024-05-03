import React, { useState, useEffect } from "react"
import NavBar from "../components/NavBar";
import CupcakeContainer from "../components/CupcakeContainer";
import CupcakeForm from "../components/CupcakeForm";

function Shop() {

  const [cupcakes, setCupcakes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/Cupcakes")
      .then((resp) => (resp.json()))
      .then((data) => setCupcakes(data))
  }, [])
  return (
    <div className="Shop">
      <NavBar />
      <header className="Shop-header">
        <h2>Crazy Good Cupcake Shop</h2>
      </header>
      <main>
        <CupcakeContainer cupcakes={cupcakes} />;
        <CupcakeForm />
      </main>
    </div>
  )
}

export default Shop;