import React, { useState, useEffect } from "react"
import NavBar from "../components/NavBar";

function Cart() {

    const [cartItems, setCartItems] = useState([])

    const totalInCart = [...cartItems].reduce(add, 0)

    function add(accumulator, a) {
        return (accumulator + a)
    }
    console.log(totalInCart)

    // const total = totalInCart.map((total) => {
    //     return console.log(total)
    // })

    useEffect(() => {
        const items = Object.keys(localStorage)//{ ...localStorage };
        const itemComponents = items.map(item => {
            let cupcake = JSON.parse(item)
            let amount = localStorage.getItem(item);

            return (
                <div key={cupcake.id}>{cupcake.name}:
                    <span className="amount"> {amount}</span>
                    <span className="price">${cupcake.price}</span>
                </div>)
        })
        setCartItems(itemComponents);
    }, [])

    function handleClearCart() {
        localStorage.clear();
        setCartItems()
    }

    return (
        <div className="cart">
            <NavBar />
            <header className="Shop-header">
                <h2>Crazy Good Cupcake Shop</h2>
            </header>
            <main>
                <div className="cart-container">
                    <h3>Items In Cart:</h3>
                    <div className="cart-list"> {cartItems}
                        <br></br>
                        Total: ${totalInCart}
                    </div>
                    <div>
                        <button classname="place-order-button">Place Order</button>
                        <button className="clear-cart-button" onClick={() => handleClearCart()}>Clear Cart</button>
                    </div>
                </div>
            </main >
        </div >
    )
}
export default Cart;