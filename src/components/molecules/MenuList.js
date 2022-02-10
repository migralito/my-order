import { useEffect, useState } from "react";
import DishFood from "./DishFood";
import { getAll } from "../../services/menu";

const MenuList = () => {


    const [foodCategory, setFoodCategory] = useState([])

    useEffect(() => {
        getAll()
            .then((response) => {
                const pizzanesas = response.filter((e) => e.nameCategories === "Pizzanesas")
                console.log(pizzanesas)
                return setFoodCategory(pizzanesas)

            })
            .catch((error) => alert(error))
    }, [])


    return (
        <>
            {foodCategory.map((item) => (
                item.products.map((e) => (
                    <DishFood key={e.id} price={e.price} title={e.title} description={e.description} />
                ))
            ))}
        </>
    )
};

export default MenuList;
