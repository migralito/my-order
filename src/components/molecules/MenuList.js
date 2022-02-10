import { useEffect, useState } from "react";
import DishFood from "./DishFood";
import { getAll } from "../../services/menu";

const MenuList = ({category}) => {

    const [foodCategory, setFoodCategory] = useState([])

    useEffect(() => {
        getAll()
            .then((response) => {
                const categorySelected = response.filter((e) => e.nameCategories === category)
                return setFoodCategory(categorySelected)

            })
            .catch((error) => alert(error))
    }, [category])


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
