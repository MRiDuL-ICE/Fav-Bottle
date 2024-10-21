import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart, removeFromLS } from "../../utilities/localstorage";
import Cart from "../cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    useEffect(() => {
        console.log(bottles.length);
        if(bottles.length){
            const storedCart = getStoredCart();
        console.log('getting stored cart', storedCart, bottles);
        const savedCart = [];
        for(const id of storedCart){
            console.log(id);
            const bottle = bottles.find(bottle => bottle.id === id);
            if(bottle){
                savedCart.push(bottle);
            }
        }
        console.log("saved cart", savedCart);
        setCart(savedCart);
        }
    },[bottles])

    const handleAddToCart = bottle => {
        console.log(bottle.name);
        const newCart = [...cart, bottle]
        setCart(newCart);
        addToLS(bottle.id);
    }

    const handleRemoveFromCart = id => {
        // remove from cart
        const remCart = cart.filter(bottle => bottle.id !== id)
        setCart(remCart)

        // remove from local storage
        removeFromLS(id);
    }

    return (
        <div >
            <div>
            
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            </div>
           <div className="box-container">
            {
                bottles.map(bottle => <Bottle handleAddToCart={handleAddToCart}  key={bottle.id} bottle={bottle}></Bottle>)
            }
           </div>
        </div>
    );
};

export default Bottles;