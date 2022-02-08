import React from 'react';

const Input = ({tableNumber, setTableNumber}) => {

    const handleClick = (e) => {
        setTableNumber(e.target.value)
    }

    return <input onChange={handleClick} value={tableNumber} placeholder={"N° Mesa"} />;
};


export default Input;
