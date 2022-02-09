import styles from './Img.module.css'

const Img = ({source, alternativo}) => {
    return <img src={source} alt={alternativo} className={styles.img}/>
};


export default Img;
