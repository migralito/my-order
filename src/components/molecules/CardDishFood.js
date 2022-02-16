import React from 'react';
import Header from '../Header';
import Description from '../Description';
import Button from '../Button';


const CardDishFood = ({ price, description, titleButton, handleClick, header, children }) => {
    return <li>
        <Header description={header} />
        <Description description={description} />
        <Description description={`$${price}`} />
        <Button titleButton={titleButton} handleClick={handleClick} />
        {children}
    </li>;
};

export default CardDishFood;
