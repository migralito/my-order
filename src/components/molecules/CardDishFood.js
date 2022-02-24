import React from 'react';
import styles from './CardDishFood.module.css'


const CardDishFood = ({ price, description, titleButton, handleClick, header, children, source }) => {
    return <div className={styles.container}>
        <h4 className={styles.header}>{header}</h4>
        <div className={styles.cardBody}>
            <div className={styles.descriptionPrice}>
                <p className={styles.description}>{description}</p>
                <p>{`$${price}`}</p>

                {titleButton === "Agregado" ?
                    <>
                        <button className={styles.aggregate} onClick={handleClick}>{titleButton}</button>
                        {children}
                    </> :
                    <button className={styles.notAgreggate} onClick={handleClick}>{titleButton}</button>
                }
            </div>
            <div className={styles.imgCardDishFoodContainer} >
                <img src={source} className={styles.imgCardDishFood} alt={""} />
            </div>
        </div>
    </div>;
}





export default CardDishFood;
