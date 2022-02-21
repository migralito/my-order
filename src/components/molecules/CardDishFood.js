import React from 'react';
import Header from '../Header';
import Description from '../Description';
import Button from '../Button';
import Img from '../Img';
import styles from './CardDishFood.module.css'


const CardDishFood = ({ price, description, titleButton, handleClick, header, children, source }) => {
    return <div className={styles.container}>
        <Header description={header} clases={styles.header} />
        <div className={styles.cardBody}>
            <div className={styles.descriptionPrice}>
                <Description description={description} clases={styles.description} />
                <Description description={`$${price}`} />
                <Button titleButton={titleButton} handleClick={handleClick} clases={styles.buttonAdd}  />
                {children}
            </div>
            <div className={styles.imgCardDishFoodContainer} >
                <Img source={source} clases={styles.imgCardDishFood} />
            </div>
        </div>
    </div>;
};

export default CardDishFood;
