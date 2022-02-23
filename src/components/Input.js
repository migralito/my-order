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
            <div className={tableNumber === ""  ? styles.inputLink : (parseInt(tableNumber) > 50 || isNaN(parseInt(tableNumber)) || parseInt(tableNumber[0]) === 0) ? styles.inputLinkError : styles.inputLink}>
                <input onChange={handleClick} value={tableNumber} placeholder={"N° Mesa"} className={styles.input} />
                {
                    tableNumber === "" ? <Link to={`/`} className={styles.enter}>Entrar</Link> :
                        (parseInt(tableNumber) > 50 || isNaN(parseInt(tableNumber)) || parseInt(tableNumber[0]) === 0) ?
                            <Description description={'Debe escribir un número de mesa existente.'} clases={styles.error} /> :
                            <Link to={`table/${tableNumber}`} className={styles.enter}>Entrar</Link>
                }
            </div>
        </div>
    )
};

export default Input;


