import React from 'react';
import Description from '../Description';
import Button from '../Button';
import Img from '../Img';
import styles from './CardDishFood.module.css'


const CardDishFood = ({ price, description, titleButton, handleClick, header, children, source }) => {
    return <div className={styles.container}>
        <h4 className={styles.header}>{header}</h4>
        <div className={styles.cardBody}>
            <div className={styles.descriptionPrice}>
                <Description description={description} clases={styles.description} />
                <Description description={`$${price}`} />
                {titleButton === "Agregado" ?
                    <>
                        <Button titleButton={titleButton} handleClick={handleClick} clases={styles.aggregate} />
                        {children}
                    </> :
                    <Button titleButton={titleButton} handleClick={handleClick} clases={styles.notAgreggate} />
                }
            </div>
            <div className={styles.imgCardDishFoodContainer} >
                <Img source={source} clases={styles.imgCardDishFood} />
            </div>
        </div>
    </div>;
}





export default CardDishFood;
