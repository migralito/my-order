import { useState } from "react"
import Header from "../components/Header"
import CardsOrder from "../components/molecules/CardsOrder"
import { Link } from "react-router-dom"

const Order = ({ cart, tableNumber }) => {

    const priceQuantityCart = cart.map((e) => {
        return { quantity: 1, price: e.price }
    })

    const [quantity, setQuantity] = useState(priceQuantityCart)

    const total = quantity.map((e) => { return e.quantity * e.price }).reduce((acumulador, actual) => acumulador + actual)

    return (
        <>
            <Header description={`Mesa N°: ${tableNumber}`} />
            <Header description={"Mi orden"} />
            <CardsOrder quantity={quantity} setQuantity={setQuantity} cart={cart}/>
            <Header description={`Total de la orden: $${total}`} />
            <Link to={`/table/${tableNumber}/menu`}>Volver a seleccionar el menú</Link>
        </>
    )
}

export default Order;
