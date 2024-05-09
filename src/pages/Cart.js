import React, { useState, useEffect } from "react"
import NavBar from "../components/NavBar";
import MDBanner from "../components/MDBanner";


function Cart() {

    const [cartItems, setCartItems] = useState([])
    const [totalInCart, setTotalInCart] = useState(0)

    const cupcakeItems = []

    function add(accumulator, a) {
        console.log(a)
        console.log(accumulator)
        return (accumulator + a.price)
    }


    useEffect(() => {
        const items = Object.keys(localStorage)
        const itemComponents = items.map(item => {
            let cupcake = JSON.parse(item)
            let amount = localStorage.getItem(item);
            cupcakeItems.push(cupcake)
            return (
                <div key={cupcake.id}>{cupcake.name}: {amount}  <div className="price">${cupcake.price.toFixed(2)}</div>
                </div>)
        })
        setCartItems(itemComponents);
        setTotalInCart([...cupcakeItems].reduce(add, 0))
    }, [])

    function handleClearCart() {
        localStorage.clear();
        setCartItems()
        setTotalInCart(0)
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
                    <div className="cart-list"> 
                    <div className="items-in-cart">{cartItems}</div>
                        <br></br>
                        <div className="total-in-cart">
                           {totalInCart === 0 ? "" : `Total: $${totalInCart.toFixed(2)}`} 
                        </div>
                    </div>
                    <div>
                        <button className="place-order-button">Place Order</button>
                        <button className="clear-cart-button" onClick={() => handleClearCart()}>Clear Cart</button>
                    </div>
                </div>
                <MDBanner />
            </main >
        </div >
    )
}
export default Cart;