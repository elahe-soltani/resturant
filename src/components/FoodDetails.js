import React,{useState,useEffect} from 'react';
import styles from './FoodDetails.module.css'

const FoodDetails = ({foodData}) => {
    const [open, setOpen] =useState(false);
    useEffect(()=>{
       handleClickOpen();
    },[])
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div>
        <img src={foodData.photo.url}/>
        <div className={styles.container}>
        <p className={styles.name}>{foodData.name}</p>
        <p className={styles.price}>{foodData.price} تومان</p>
        <p className={styles.details}>{foodData.details}</p>
        </div>
    </div>
    );
};

export default FoodDetails;