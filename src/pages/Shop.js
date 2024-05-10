import React, { useState } from "react"
import NavBar from "../components/NavBar";
import CupcakeContainer from "../components/CupcakeContainer";
import ReviewForm from "../components/ReviewForm";
import DropdownFilter from "../components/DropdownFilter";
import ReviewsContainer from "../components/ReviewsContainer";
import MDBanner from "../components/MDBanner";

function Shop({cupcakes, setCupcakes}) {
  const [reviews, setReviews] = useState([]);

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
        <ReviewsContainer reviews={reviews} setReviews={setReviews}/>
        <CupcakeContainer cupcakes={cupcakes}/>;
        <ReviewForm reviews={reviews}  setReviews={setReviews}/>
      </main>
      <MDBanner />
    </div>
  )
}

export default Shop;