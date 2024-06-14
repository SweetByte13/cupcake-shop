import React, { useState, useEffect } from "react";
import Shop from './Shop';

function App() {
// BIG TEST
const [cupcakes, setCupcakes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/Cupcakes")
      .then((resp) => (resp.json()))
      .then((data) => setCupcakes(data))
  }, [])

  return (
    <Shop cupcakes={cupcakes} setCupcakes={setCupcakes}/>
  );
}

export default App;
