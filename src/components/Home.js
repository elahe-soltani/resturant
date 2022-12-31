import React from 'react';
import { useParams } from 'react-router-dom';
import Banner from './Banner';
import Header from './Header';
import ShopeCart from './ShopeCart';
import styles from './Home.module.css'
import Slider from './Slider'
import FoodAll from './FoodAll';
const Home = () => {
    
    var user=0
    const params=useParams();
     if(params.id)
        {
         user=1 
        }
    return (
        <div> 
            <Header user={user}/>
            <Banner />
            <div className={styles.container}>
                <div className={styles.shopeCart}>
                <ShopeCart />
                </div>
           
            <div className={styles.box}>
                <div className={styles.slider}>
                    <Slider  />
                </div>
                
                <FoodAll />
            </div>
            </div>
           
            
        </div>
    );
};
export default Home;