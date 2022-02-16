import React from 'react';
import Description from '../Description';
import Img from '../Img'
import styles from './CardCategorie.module.css'

const CardCategorie = ({source, description, alternativo, handleClick}) => {
    return <div className={styles.container} onClick={handleClick}>
    <Img source={source} alternativo={alternativo}/>
    <Description description={description}/>
  </div>;
};

export default CardCategorie;
