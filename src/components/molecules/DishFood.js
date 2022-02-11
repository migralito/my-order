import React from 'react';
import Header from '../Header';
import Description from '../Description';
import Button from './Button';


const DishFood = ({ price, description, titleButton, handleClick, header }) => {
    return <li>
        <Header description={header} />
        <Description description={description} />
        <Description description={`$${price}`} />
        <Button titleButton={titleButton} handleClick={handleClick} />
    </li>;
};

export default DishFood;
