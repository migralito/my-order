import Brand from "../Brand";
import Description from "../Description";
import styles from "./HeaderBrandTable.module.css"

const HeaderBrandTable = ({ tableNumber }) => {
    return (
        <>
            <div className={styles.headerBrandTableContainer}>
                <Brand clases={styles.brand} />
                <div className={styles.table}>
                    <Description description={`Mesa `} />
                    <Description description={`N° ${tableNumber}`} clases={styles.tableNumber} />
                </div>
            </div>
        </>
    )
};

export default HeaderBrandTable;
