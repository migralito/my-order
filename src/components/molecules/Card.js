import React from 'react';
import Description from '../Description';
import Img from '../Img'
import styles from './Card.module.css'

const Card = ({source, description, alternativo}) => {
  return <div className={styles.container}>
    <Img source={source} alternativo={alternativo}/>
    <Description description={description}/>
  </div>;
};

export default Card;
