import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/menu";
import Header from "../Header";
import { FaTrashAlt } from "react-icons/fa";
import CardDishFood from "./CardDishFood"
import styles from "./CardsDishFood.module.css"


const CardsDishFood = ({ category, cart, setCart }) => {

    const [foodCategory, setFoodCategory] = useState([])

    useEffect(() => {
        const allProducts = getAllProducts()
        const categorySelected = allProducts.filter((e) => e.category === category)
        return setFoodCategory(categorySelected)
    }, [category])


    const handleClickSelected = (item) => () => {
        setCart([...cart, item])
    }

    const handleClickNotSelected = (item) => () => {
        const cartCurrent = cart.filter((e) => e.id !== item.id)
        setCart(cartCurrent)
    }

    return (
        <div className={styles.container}>
            <Header description={category} clases={styles.header}/>
            {foodCategory.map((e) => (
                cart.filter((item) => item.id === e.id).length > 0 ?
                    <CardDishFood key={e.id} price={e.price} header={e.title} titleButton={"Agregado"} description={e.description} handleClick={handleClickSelected(e)} source={e.photo}>
                        <FaTrashAlt onClick={handleClickNotSelected(e)} className={styles.buttonRemove}/>
                    </CardDishFood>
                    :
                    <CardDishFood key={e.id} price={e.price} header={e.title} titleButton={"Agregar a la orden"} description={e.description} handleClick={handleClickSelected(e)} source={e.photo} />
            ))}
        </div>
    )
};

export default CardsDishFood;
