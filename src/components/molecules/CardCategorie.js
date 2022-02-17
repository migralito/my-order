import React from 'react';
import Description from '../Description';
import Img from '../Img'
import styles from './CardCategorie.module.css'

const CardCategorie = ({source, description, alternativo, handleClick, clases}) => {
    return <div className={styles.container} onClick={handleClick}>
    <Img source={source} alternativo={alternativo} clases={styles.imgCardCategorie}/>
    <Description description={description}/>
  </div>;
};

export default CardCategorie;
