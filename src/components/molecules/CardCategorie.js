import React from 'react';
import Description from '../Description';
import Img from '../Img'
import styles from './CardCategorie.module.css'

const CardCategorie = ({ source, description, alternativo, handleClick, clases }) => {
  return <div onClick={handleClick}>
    <Img source={source} alternativo={alternativo} clases={styles.imgCardCategorie} />
    <Description description={description} clases={clases} />
  </div>;
};

export default CardCategorie;
