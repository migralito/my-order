import { useEffect, useState } from "react";
import DishFood from "./DishFood";
import { getAllProducts } from "../../services/menu";

const MenuList = ({ category, cart, setCart }) => {

    const [foodCategory, setFoodCategory] = useState([])

    useEffect(() => {
        getAllProducts()
            .then((response) => {
                const categorySelected = response.filter((e) => e.category === category)
                return setFoodCategory(categorySelected)

            })
            .catch((error) => alert(error))
    }, [category])



    const handleClick = (item) => () => {
        setCart([...cart, item])
    }

    console.log(cart)

    return (
        <>
            {foodCategory.map((e) => (
                <DishFood key={e.id} price={e.price} header={e.title} titleButton={"Agregar a la orden"} description={e.description} handleClick={handleClick(e)} />
            ))}
        </>
    )
};

export default MenuList;
