import { useEffect, useState } from "react";
import DishFood from "./DishFood";
import { getAllProducts } from "../../services/menu";
import Button from "./Button";

const MenuList = ({ category, cart, setCart }) => {

    const [foodCategory, setFoodCategory] = useState([])

    useEffect(() => {
        getAllProducts()
            .then((response) => {
                const categorySelected = response.filter((e) => e.category === category)
                return setFoodCategory(categorySelected)

            })
            .catch((error) => alert(error))
    }, [category, cart])


    const handleClickSelected = (item) => () => {
        setCart([...cart, item])
    }


    const handleClickNotSelected = (item) => () => {
        const cartCurrent = cart.filter((e) => e.id !== item.id)
        setCart(cartCurrent)
    }



    return (
        <>
            {foodCategory.map((e) => (
                cart.filter((item) => item.id === e.id).length > 0 ?
                    <div key={e.id}>
                        <DishFood price={e.price} header={e.title} titleButton={"Agregado"} description={e.description} />
                        <Button titleButton={"Eliminar de la orden"} handleClick={handleClickNotSelected(e)} />
                    </div>
                    :
                    <DishFood key={e.id} price={e.price} header={e.title} titleButton={"Agregar a la orden"} description={e.description} handleClick={handleClickSelected(e)} />
            ))}
        </>
    )
};

export default MenuList;
