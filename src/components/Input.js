import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Input.module.css"
import Description from './Description';

const Input = ({ tableNumber, setTableNumber }) => {

    const handleClick = (e) => {
        setTableNumber(e.target.value)
    }

    return (
        <div className={styles.container}>
            <Description description={'Por favor ingresá tu número de mesa.'} />
            <div className={styles.inputLink}>
                <input onChange={handleClick} value={tableNumber} placeholder={"N° Mesa"} className={styles.input} />
                <Link to={`table/${tableNumber}`} className={styles.enter}>Entrar</Link>
            </div>
        </div>
    )

};

export default Input;
