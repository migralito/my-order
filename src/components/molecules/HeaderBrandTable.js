import Brand from "../Brand";
import styles from "./HeaderBrandTable.module.css"

const HeaderBrandTable = ({ tableNumber }) => {
    return (
        <>
            <div className={styles.headerBrandTableContainer}>
                <Brand clases={styles.brand} />
                <div className={styles.table}>
                    <p>Mesa</p>
                    <p className={styles.tableNumber}>{`N° ${tableNumber}`} </p>
                </div>
            </div>
        </>
    )
};

export default HeaderBrandTable;
