import { useEffect, useState } from "react";
import DishFood from "./DishFood";
import { getAllCategories, getAllProducts } from "../../services/menu";

const MenuList = ({ category, cart, setCart }) => {

    const [foodCategory, setFoodCategory] = useState([])

   useEffect(() => {
        getAllCategories()
            .then((response) => {
                const categorySelected = response.filter((e) => e.nameCategories === category)
                return setFoodCategory(categorySelected)

            })
            .catch((error) => alert(error))
    }, [category])


   useEffect(() => {
      getAllProducts()
     .then((response) =>  {
      const filterProductsSelected =  response.filter((e)=> e.selected === true)
      return setCart([...cart, ...filterProductsSelected]) 
    })
     .catch((error)=> alert(error)) 
   }, [])

   console.log(foodCategory)

    return (
        <>
            {foodCategory.map((item) => console.log(item))}
                
                    {/* <DishFood key={e.id} price={e.price} title={e.title} description={e.description}    handleClick={handleClick(e)} />*/}
        </>
    )
};

export default MenuList;
