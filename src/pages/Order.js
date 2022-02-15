import { useState } from "react";
import MainOrder from "../components/organims/MainOrder"


const Order = ({ cart, tableNumber }) => {

    const priceQuantityCart = cart.map((e) => {
        return { quantity: 1, price: e.price }
    })

    const [quantity, setQuantity] = useState(priceQuantityCart)

    const total = quantity.map((e) => { return e.quantity * e.price }).reduce((acumulador, actual) => acumulador + actual)

    const handleQuantityAdd = (i) => () => {
        const quantityAdd = [...quantity]
        quantityAdd[i].quantity = quantityAdd[i].quantity + 1
        setQuantity(
            quantityAdd
        )
    }

    const handleQuantitySubtract = (i) => () => {
        const quantitySubtract = [...quantity]
        quantitySubtract[i].quantity = quantitySubtract[i].quantity - 1
        setQuantity(
            quantitySubtract
        )
    }

    return (
        <>
            <MainOrder cart={cart} quantity={quantity} setQuantity={setQuantity} tableNumber={tableNumber} handleQuantityAdd={handleQuantityAdd} handleQuantitySubtract={handleQuantitySubtract} total={total} />
        </>
    )
};

export default Order;
