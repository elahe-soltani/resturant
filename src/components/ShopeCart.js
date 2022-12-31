import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import styles from './ShopeCart.module.css';
import { useSelector , useDispatch } from 'react-redux';
import { clear } from '../redux/Cart/cartAction';
import CardShop from '../shared/CardShop';
const ShopeCart = () => {
    const state = useSelector(state=> state.cartState);
    const dispatch = useDispatch();
    console.log(state.itemCounter)
    return (
        <div className={styles.container}>
            
            <div className={styles.header}>
            <p>سبد خرید</p>
            {state.itemCounter >0  &&
          <a onClick={()=> dispatch(clear())} ><DeleteOutlineIcon sx={{fontSize:"28px" , cursor:"pointer"}}/></a>  
           }
           </div>
          {state.itemCounter ===0 && 
           <div className={styles.box}>
           <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-bag-x-fill" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6.854 8.146a.5.5 0 1 0-.708.708L7.293 10l-1.147 1.146a.5.5 0 0 0 .708.708L8 10.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 10l1.147-1.146a.5.5 0 0 0-.708-.708L8 9.293 6.854 8.146z"/>
           </svg>
               <p>سبد خرید خالی است</p>
           </div>
          }  
        {state.itemCounter >0 &&
            state.selectItems.map(item => <CardShop key={item.id}  data={item}/>)
        } 
        {state.itemCounter >0 &&
        <div>
          <div className={styles.totalBox}>
            <p >هزینه کل </p>
            <p className={styles.total} >{state.total} تومان</p>
          </div>
         <button className={styles.btn} >تکمیل سفارش</button>
        </div>
        }
           </div>
    );
};

export default ShopeCart;