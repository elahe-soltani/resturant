import React from 'react';
import { quantityCount  , isInCart} from '../helpers/functions';
import { addItem , removeItem , increase , decrease } from '../redux/Cart/cartAction';
import { useSelector , useDispatch } from 'react-redux';
import styles from "./CardShope.module.css";
const CardShop = ({data}) => {
    const state = useSelector(state=> state.cartState);
    const dispatch = useDispatch();
    return (
        <div className={styles.container}>
            <div >
               <p className={styles.name}>{data.name}</p> 
               <p className={styles.price}>{data.price} تومان</p>
            </div>
            <div className={styles.btnContainer}>
            <button className={styles.btn} onClick={()=> dispatch(increase(data))}>+</button> 
            {quantityCount(state , data.id) > 0 && <span className={styles.counter} >{quantityCount(state,data.id)}</span>}
           {quantityCount(state , data.id) > 1 && <button className={styles.btn} onClick={()=> dispatch(decrease(data))}>-</button>}
           {quantityCount(state , data.id)  === 1 && <button className={styles.btn} onClick={()=> dispatch(removeItem(data))}>-</button>}

           </div>
        </div>
       
    );
};

export default CardShop;