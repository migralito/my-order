import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Input.module.css";


const Input = ({ tableNumber, setTableNumber }) => {

    const handleClick = (e) => {
        setTableNumber(e.target.value)
    }

    return (
        <div className={styles.container}>
            <p>Por favor ingresá tu número de mesa.</p>
            <div className={tableNumber === "" ? styles.inputLink : (parseInt(tableNumber) > 50 || isNaN(parseInt(tableNumber)) || parseInt(tableNumber[0]) === 0) ? styles.inputLinkError : styles.inputLink}>
                <input onChange={handleClick} value={tableNumber} placeholder={"N° Mesa"} className={styles.input} />
                {
                    tableNumber === "" ? <Link to={`/`} className={styles.enter}>Entrar</Link> :
                        (parseInt(tableNumber) > 50 || isNaN(parseInt(tableNumber)) || parseInt(tableNumber[0]) === 0) ?
                            <p className={styles.error}>Debe escribir un número de mesa existente.</p> :
                            <Link to={`table/${tableNumber}`} className={styles.enter}>Entrar</Link>
                }
            </div>
        </div>
    )
};

export default Input;


