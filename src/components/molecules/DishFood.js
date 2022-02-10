import React from 'react';
import Header from '../Header';
import Description from '../Description';
import Button from './Button';


const DishFood = ({ price, description, title }) => {
    return <li>
        <Header description={title} />
        <Description description={description} />
        <Description description={`$${price}`} />
        <Button title={"Agregar al pedido"} />
    </li>;
};

export default DishFood;
