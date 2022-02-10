import React from 'react';
import Header from '../Header';
import Description from '../Description';
import Button from './Button';


const DishFood = ({ price, description, title, handleClick }) => {
    return <li>
        <Header description={title} />
        <Description description={description} />
        <Description description={`$${price}`} />
        <Button title={title} handleClick={handleClick}/>
    </li>;
};

export default DishFood;
