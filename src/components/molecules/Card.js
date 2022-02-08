import React from 'react';
import Description from '../Description';
import Img from '../Img'

const Card = ({source, description, alternativo}) => {
  return <>
    <Img source={source} alternativo={alternativo}/>
    <Description description={description}/>
  </>;
};

export default Card;
