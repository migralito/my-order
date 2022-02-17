import React from 'react';
import Header from '../Header';
import Description from '../Description';
import Button from '../Button';
import Img from '../Img';
import styles from './CardDishFood.module.css'


const CardDishFood = ({ price, description, titleButton, handleClick, header, children, source }) => {
    return <div className={styles.container}>
        <Header description={header} />
        <Description description={description} />
        <Description description={`$${price}`} />
        <Img source={source} clases={styles.imgCardDishFood} />
        <div>
            <Button titleButton={titleButton} handleClick={handleClick} />
            {children}
        </div>
    </div>;
};

export default CardDishFood;
