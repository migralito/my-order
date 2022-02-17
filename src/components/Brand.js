/* import styles from './Brand.module.css' */
import brand from '../images/brand.jpg'


const Brand = ({children, clases}) => {
    return(
        <>
         <img src={brand} alt={'brand'} className={clases}/>
         {children}
        </>
    )
};


export default Brand;
