import { useEffect, useState } from "react";
import DishFood from "./DishFood";
import { getAllProducts, updateSelectedProduct } from "../../services/menu";
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



    const handleClickSelected = (id, item) => () => {
        const productSelected = {
            ...item,
            selected: true
        }
        updateSelectedProduct(id, productSelected)
            .then((response) => {
                setCart([...cart, response])
            }
            )
            .catch((error) => error)
    }

    const handleClickNotSelected = (id, item) => () => {
        const productNotSelected = {
            ...item,
            selected: false
        }
        updateSelectedProduct(id, productNotSelected)
            .then((response) => {
                const currentCart = cart.filter((e) => e.id !== response.id ) 
                setCart(currentCart)
            }
            )
            .catch((error) => error)
    }


    return (
        <>
            {foodCategory.map((e) => (
                e.selected === true ?
                    <div key={e.id}>
                        <DishFood price={e.price} header={e.title} titleButton={"Agregado"} description={e.description} handleClick={handleClickSelected(e.id, e)} />
                        <Button titleButton={"Eliminar de la orden"} handleClick={handleClickNotSelected(e.id, e)} />
                    </div>
                    :
                    <DishFood key={e.id} price={e.price} header={e.title} titleButton={"Agregar a la orden"} description={e.description} handleClick={handleClickSelected(e.id, e)} />
            ))}
        </>
    )
};

export default MenuList;
