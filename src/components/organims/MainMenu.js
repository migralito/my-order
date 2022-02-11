import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { getAllCategories } from "../../services/menu";
import Card from "../molecules/Card";
import MenuList from "../molecules/MenuList"
import styles from "./HeaderMenu.module.css"


const MainMenu = ({ cart, setCart }) => {

  const [cardsHeaderMenu, setCardsHeaderMenu] = useState([]);

  const [categorySelected, setCategorySelected] = useState("Pizzanesas")

  useEffect(() => {
    getAllCategories()
      .then((response) => {
        setCardsHeaderMenu(response)
      })
  }, []);


  const handleClick = (category) => () => {
    setCategorySelected(category.nameCategories)
  }

  return (
    <>
      <div className={styles.header}>
        <Swiper spaceBetween={50}
          slidesPerView={3}
      /* onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)} */>
          {cardsHeaderMenu.map((e) => (
            <SwiperSlide key={e.id}>
              <Card source={e.photo} description={e.nameCategories} alt={e.nameCategories} handleClick={handleClick(e)} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <ul>
        <MenuList cart={cart} setCart={setCart} category={categorySelected} />
      </ul>
    </>
  )
};

export default MainMenu;
