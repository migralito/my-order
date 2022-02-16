import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import CardOrder from "../molecules/CardOrder";

const MainOrder = ({ cart, tableNumber }) => {

    const priceQuantityCart = cart.map((e) => {
        return { quantity: 1, price: e.price }
    })

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

    const [quantity, setQuantity] = useState(priceQuantityCart)

    const total = quantity.map((e) => { return e.quantity * e.price }).reduce((acumulador, actual) => acumulador + actual)


    return (
        <>
            <Header description={`Mesa Nro: ${tableNumber}`} />
            <Header description={"Mi orden"} />
            <div>
                {cart.map((e, i) => (
                    <CardOrder key={e.id} setQuantity={setQuantity} quantity={quantity} e={e} i={i} handleQuantityAdd={handleQuantityAdd} handleQuantitySubtract={handleQuantitySubtract} />
                ))}
            </div>
            <Header description={`Total de la orden: $${total}`} />
            <Link to={`/table/${tableNumber}/menu`}>Volver a seleccionar el menú</Link>
        </>
    )
};

export default MainOrder;
