import { useState } from "react"
import CardsOrder from "../components/molecules/CardsOrder"
import HeaderBrandTable from "../components/molecules/HeaderBrandTable"
import { Link } from "react-router-dom"

const Order = ({ cart, tableNumber }) => {

    const priceQuantityCart = cart.map((e) => {
        return { quantity: 1, price: e.price }
    })

    const [quantity, setQuantity] = useState(priceQuantityCart)

    const total = quantity.map((e) => { return e.quantity * e.price }).reduce((acumulador, actual) => acumulador + actual)

    return (
        <>
            <HeaderBrandTable tableNumber={tableNumber}/>
            <h3>Mi orden</h3>
            <CardsOrder quantity={quantity} setQuantity={setQuantity} cart={cart}/>
            <h3>{`Total de la orden: $${total}`}</h3>
            <Link to={`/table/${tableNumber}/menu`}>Volver a seleccionar el menú</Link>
        </>
    )
}

export default Order;
