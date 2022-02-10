import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { getAll } from "../../services/menu";
import Card from "../molecules/Card";
import styles from "./HeaderMenu.module.css"


const HeaderMenu = () => {

  const [cardsHeaderMenu, setCardsHeaderMenu] = useState([]);

  useEffect(() => {
    getAll()
      .then((response) => {
        setCardsHeaderMenu(response)
      })
  }, []);


  return (
    <div className={styles.header}>
      <Swiper spaceBetween={50}
        slidesPerView={3}
      /* onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)} */>
        {cardsHeaderMenu.map((e) => (
          <SwiperSlide key={e.id}>
            <Card source={e.photo} description={e.nameCategories} alt={e.nameCategories} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
};

export default HeaderMenu;
