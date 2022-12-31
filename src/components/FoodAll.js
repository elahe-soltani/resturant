import React from 'react';
import {Grid} from '@mui/material'
import { useQuery } from '@apollo/client';
import { GET_FOOD_INFO } from '../graphql/queries';
import Card from './Card';
import styles from './FoodAll.module.css';
import Loader from '../shared/Loader';
const FoodAll = () => {
    // let group="starter";
    const {loading, data , errors } = useQuery(GET_FOOD_INFO );
   
    if (loading) return  <Loader />
    if (errors) return <h3>Errors...</h3>
    const starter=data.foods.filter(item => item.group ==="starter")
    const soup=data.foods.filter(item => item.group ==="soup")
    const pasta=data.foods.filter(item => item.group ==="pasta")
    const pizza=data.foods.filter(item => item.group ==="pizza")
    const humburger=data.foods.filter(item => item.group ==="humburger")
    const ramen=data.foods.filter(item => item.group ==="ramen")
    const sushi=data.foods.filter(item => item.group ==="sushi")
    const salad=data.foods.filter(item => item.group ==="salad")
    const coldDrink=data.foods.filter(item => item.group ==="coldDrink")
    const hotDrink=data.foods.filter(item => item.group ==="hotDrink")
    const breakfast=data.foods.filter(item => item.group ==="breakfast")
    const deessert=data.foods.filter(item => item.group ==="deessert")
   console.log(starter)
    return (
        <div className={styles.container} >
          <p id="starter"  className={styles.list}>Starter</p>
          { starter.map((food)=>(
             <Grid item xs={12} sm={6} md={4} key={food.id} > 
               <Card foodData={food}/>
            </Grid>
                 ))}
          <p id="soup" className={styles.list}>Soup</p>
          { soup.map((food)=>(
             <Grid item xs={12} sm={6} md={4} key={food.id} >
            <Card foodData={food}/>
            </Grid>
                 ))}
          <p id="pasta" className={styles.list}>Pasta</p>
          { pasta.map((food)=>(
             <Grid item xs={12} sm={6} md={4} key={food.id} >
            <Card foodData={food}/>
            </Grid>
                 ))}
          <p id="pizza" className={styles.list}>Pizza</p>
          { pizza.map((food)=>(
             <Grid item xs={12} sm={6} md={4} key={food.id} >
            <Card foodData={food}/>
            </Grid>
                 ))}
          <p id="hamburger" className={styles.list}>Hamburger</p>
          { humburger.map((food)=>(
             <Grid item xs={12} sm={6} md={4} key={food.id} >
            <Card foodData={food}/>
            </Grid>
                 ))}  
          <p id="ramen" className={styles.list}>Ramen</p>
          { ramen.map((food)=>(
             <Grid item xs={12} sm={6} md={4} key={food.id} >
            <Card foodData={food}/>
            </Grid>
                 ))}      
          <p id="sushi" className={styles.list}>Sushi</p>
          { sushi.map((food)=>(
             <Grid item xs={12} sm={6} md={4} key={food.id} >
            <Card foodData={food}/>
            </Grid>
                 ))}    
          <p id="salad" className={styles.list}>Salad</p>
          { salad.map((food)=>(
             <Grid item xs={12} sm={6} md={4} key={food.id} >
            <Card foodData={food}/>
            </Grid>
                 ))}        
          <p id="coldDrink" className={styles.list}>Cold Drink</p>
          { coldDrink.map((food)=>(
             <Grid item xs={12} sm={6} md={4} key={food.id} >
            <Card foodData={food}/>
            </Grid>
                 ))} 
          <p id="hotDrink" className={styles.list}>Hot Drink</p>
          { hotDrink.map((food)=>(
             <Grid item xs={12} sm={6} md={4} key={food.id} >
            <Card foodData={food}/>
            </Grid>
                 ))}       
          <p id="breakfast" className={styles.list}>Breakfast</p>
          { breakfast.map((food)=>(
             <Grid item xs={12} sm={6} md={4} key={food.id} >
            <Card foodData={food}/>
            </Grid>
                 ))}    
          <p id="deessert" className={styles.list}>Deessert</p>
          { deessert.map((food)=>(
             <Grid item xs={12} sm={6} md={4} key={food.id} >
            <Card foodData={food}/>
            </Grid>
                 ))}                        
        </div>

    );
};

export default FoodAll;