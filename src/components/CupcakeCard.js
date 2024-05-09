import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CurrencyInput from 'react-currency-input-field';


function CupcakeCard({ cupcake }) {

  const { id, name, image, price } = cupcake

  const [amountInCart, setAmountInCart] = useState(0)

  useEffect(() => {
    let cartCupCakeAmount = localStorage.getItem(JSON.stringify(cupcake));
    if(cartCupCakeAmount !== null){
      setAmountInCart(parseInt(cartCupCakeAmount))
    }
  }, [])

  function handleAddToCartButton(e) {

    console.log(amountInCart)
    
    setAmountInCart(amountInCart)
    
    //add to cart will update number on shopping cart icon-STILL NEED

    localStorage.setItem(JSON.stringify(cupcake), amountInCart)

  }

  function handleDecreaseButton() {

    if (amountInCart >= 1) {
      localStorage.setItem(JSON.stringify(cupcake), amountInCart - 1)
      setAmountInCart(amountInCart - 1)
      
    }
  }

  function handleIncreaseButton() {

    if (amountInCart >= 0) {
      return setAmountInCart(amountInCart + 1)
    }
  }

  return (

    <Card style={{ width: '18rem' }} className="cupcake-card">
      <Card.Img variant="top" src={image} className="cupcake-images" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="cupcake-price">
        Price: ${price.toFixed(2)}
          <div className="amount-in-cart">{amountInCart === 0 ? "" : amountInCart}</div>
        </Card.Text>
        <div className="buttons">
        <Button className="plus-minus-button" onClick={() => handleDecreaseButton()} variant="warning"> - </Button>
        <Button className="cupcake-card-button" onClick={(e) => handleAddToCartButton(e)} variant="light">Add to Cart</Button>
        <Button className="plus-minus-button" onClick={() => handleIncreaseButton()} variant="warning"> + </Button>
        </div>

      </Card.Body>
    </Card>
  );
}

export default CupcakeCard;