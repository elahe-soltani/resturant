import React,{useState} from 'react';
import styles from './Card.module.css';
import { Dialog , DialogActions , DialogTitle , Divider} from '@mui/material';
import {useSelector , useDispatch} from 'react-redux';
import { addItem , removeItem , increase , decrease } from '../redux/Cart/cartAction';
import CloseIcon from '@mui/icons-material/Close';
import { isInCart , quantityCount } from '../helpers/functions';
import FoodDetails from './FoodDetails';
const Card = ({foodData}) => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const state = useSelector(state=> state.cartState);
    const dispatch = useDispatch();
    console.log(state)
    return (
        <div className={styles.container}>
          <a onClick={handleClickOpen}><img src={foodData.photo.url} alt="photo"  /></a> 
           <a onClick={handleClickOpen}> <p className={styles.name}>{foodData.name}</p></a> 
           <div className={styles.box}>
           <p className={styles.price}>{foodData.price} تومان </p>
           <div className={styles.btnContainer}>
            {
                isInCart(state,foodData.id)?
                <button className={styles.btn} onClick={()=> dispatch(increase(foodData))}>+</button> :
                <button className={styles.btnAdd}  onClick={()=> dispatch(addItem(foodData))}>+</button>
            }
           {quantityCount(state , foodData.id) > 0 && <span className={styles.counter} >{quantityCount(state,foodData.id)}</span>}
           {quantityCount(state , foodData.id) > 1 && <button className={styles.btn} onClick={()=> dispatch(decrease(foodData))}>-</button>}
           {quantityCount(state , foodData.id)  === 1 && <button className={styles.btn} onClick={()=> dispatch(removeItem(foodData))}>-</button>}
          
           </div>
           </div>
    <div className={styles.dialog} >
        <Dialog open={open} onClose={handleClose}  >
        <DialogTitle textAlign="left" ><CloseIcon sx={{cursor:"pointer"}} onClick={handleClose} />
        </DialogTitle>
          <FoodDetails foodData={foodData} />
        
    <div className={styles.btnContainer}>
      <div>
        {quantityCount(state , foodData.id) > 0 ?
        <button className={styles.btnUpdate} onClick={handleClose}>
          <span> <span>بروزرسانی </span>{quantityCount(state , foodData.id)*foodData.price}تومان </span>
        </button> :
        <button className={styles.btnDisabled} disabled >بروزرسانی </button>
        }
      </div>      
      <div>
        {isInCart(state,foodData.id)?
          <button className={styles.btn} onClick={()=> dispatch(increase(foodData))}>+</button>:
          <button className={styles.btnAdd}  onClick={()=> dispatch(addItem(foodData))}>+</button>
        }
        {quantityCount(state , foodData.id) > 0 && <span className={styles.counter} >{quantityCount(state,foodData.id)}</span>}
        {quantityCount(state , foodData.id) > 1 && <button className={styles.btn} onClick={()=> dispatch(decrease(foodData))}>-</button>}
        {quantityCount(state , foodData.id)  === 1 && <button className={styles.btn} onClick={()=> dispatch(removeItem(foodData))}>-</button>}
      </div>      
    </div>
       
      </Dialog>
    </div>
        </div>
    );
};

export default Card;