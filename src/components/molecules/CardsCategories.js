
import { useEffect, useState } from "react";
import { getAllCategories } from "../../services/menu"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CardCategorie from "./CardCategorie";
import styles from "./CardsCategories.module.css"


const CardsCategories = ({ handleClick, category }) => {

  const [cardsHeaderMenu, setCardsHeaderMenu] = useState([]);

  useEffect(() => {
    const categories = getAllCategories()
    setCardsHeaderMenu(categories)
  }, []);


  return (
    <>
      <div className={styles.header}>
        <Swiper spaceBetween={50}
          slidesPerView={3}>
          {cardsHeaderMenu.map((e) => (
            <SwiperSlide key={e.id}>
              {e.nameCategories === category ?
                <CardCategorie source={e.photo} handleClick={handleClick(e)} description={e.nameCategories} alt={e.nameCategories} clases={styles.selected} /> :
                <CardCategorie source={e.photo} handleClick={handleClick(e)} description={e.nameCategories} alt={e.nameCategories} clases={styles.notSelected} />
              }
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
};

export default CardsCategories;
