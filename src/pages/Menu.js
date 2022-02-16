
import { useState } from "react";
import CardsCategories from '../components/molecules/CardsCategories'
import CardsDishFood from "../components/molecules/CardsDishFood";
import Header from "../components/Header"
import { Link } from 'react-router-dom'

const Menu = ({ tableNumber, cart, setCart }) => {


    const [categorySelected, setCategorySelected] = useState("Pizzanesas")

    const handleClick = (categorySelected) => () => {
        setCategorySelected(categorySelected.nameCategories)
    }

    return (
        <>
            <Header description={`Mesa N°: ${tableNumber}`}/>
            {cart.length === 0 ? "" : <Link to={`/table/${tableNumber}/menu/order`}>Ver mi orden</Link>}
            <CardsCategories handleClick={handleClick} />
            <ul>
            <CardsDishFood cart={cart} setCart={setCart} category={categorySelected}/>
            <Link to={`/table/${tableNumber}`}>Volver a home</Link>
            </ul>
        </>
    )
};

export default Menu;
