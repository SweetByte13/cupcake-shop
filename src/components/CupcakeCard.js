import React, { useState, useEffect } from "react"


function CupcakeCard({ cupcake }) {

  const { name, image, price } = cupcake

  const [amountInCart, setAmountInCart] = useState(0)


  function handleAddToCartButton(e) {

console.log(amountInCart)
return (
  setAmountInCart(amountInCart)
)
    //add to cart will update number on shopping cart icon-STILL NEED
  }

  function handleDecreaseButton() {

    if (amountInCart >= 1) {
     return setAmountInCart(amountInCart-1)
    }
  }

  function handleIncreaseButton() {

    if (amountInCart >= 0) {
     return setAmountInCart(amountInCart +1)
    }
  }


return (
  <div className="card" >
    <img src={image} alt={name} className="cupcake-images" />
    <h4>{name}</h4>
    <p>Price: ${price}</p>
    <div aria-live="assertive" className="box quantity">
      <button className="plus-minus-button" onClick={() => handleDecreaseButton()}>  -  </button>
      <span> {amountInCart} </span>
      <button className="plus-minus-button" onClick={() => handleIncreaseButton()}>  +  </button>
    </div>
    <button  onClick={(e) => handleAddToCartButton(e)}>Add to Cart</button>
  </div>

)
}

export default CupcakeCard;