import { useEffect, useState } from "react";
import { getAllCategories } from "../../services/menu"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from "../molecules/Card";
import MenuList from "../molecules/MenuList"
import { Link } from 'react-router-dom';
import styles from "./HeaderMenu.module.css"


const MainMenu = ({ cart, tableNumber, setCart }) => {

  const [cardsHeaderMenu, setCardsHeaderMenu] = useState([]);

  const [categorySelected, setCategorySelected] = useState("Pizzanesas")


  useEffect(() => {
    getAllCategories()
      .then((response) => {
        setCardsHeaderMenu(response)
      })
  }, []);


  const handleClick = (categorySelected) => () => {
    setCategorySelected(categorySelected.nameCategories)
  }


  const handleClickSelected = (item) => () => {
    setCart([...cart, item])
  }


  const handleClickNotSelected = (item) => () => {
    const cartCurrent = cart.filter((e) => e.id !== item.id)
    setCart(cartCurrent)
  }



  return (
    <>
      {`Mesa Nro: ${tableNumber}`}
      <br />
      {cart.length === 0 ? "" : <Link to={`/table/${tableNumber}/menu/order`}>Ver mi orden</Link>}
      <br />
      <Link to={`/table/${tableNumber}`}>Volver a home</Link>
      <div className={styles.header}>
        <Swiper spaceBetween={50}
          slidesPerView={3}>
          {cardsHeaderMenu.map((e) => (
            <SwiperSlide key={e.id}>
              <Card source={e.photo} handleClick={handleClick(e)} description={e.nameCategories} alt={e.nameCategories} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <ul>
        <MenuList cart={cart} category={categorySelected} handleClickNotSelected={handleClickNotSelected} handleClickSelected={handleClickSelected} />
      </ul>
    </>
  )
};

export default MainMenu;
