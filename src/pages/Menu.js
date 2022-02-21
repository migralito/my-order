
import { useState } from "react";
import CardsCategories from '../components/molecules/CardsCategories'
import CardsDishFood from "../components/molecules/CardsDishFood";
import HeaderBrandTable from "../components/molecules/HeaderBrandTable";
import { Link } from 'react-router-dom'


const Menu = ({ tableNumber, cart, setCart }) => {


    const [categorySelected, setCategorySelected] = useState("Pizzanesas")

    const handleClick = (categorySelected) => () => {
        setCategorySelected(categorySelected.nameCategories)
    }

    return (
        <>
            <HeaderBrandTable tableNumber={tableNumber} />
            <CardsCategories handleClick={handleClick} category={categorySelected} />
            <CardsDishFood cart={cart} setCart={setCart} category={categorySelected} />
            <div>
                {cart.length === 0 ? "" : <Link to={`/table/${tableNumber}/menu/order`}>Ver mi orden</Link>}
                <Link to={`/table/${tableNumber}`}>Volver a home</Link>
            </div>
        </>
    )
};

export default Menu;
