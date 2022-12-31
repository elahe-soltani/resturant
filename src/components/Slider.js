import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import canape from '../images/canape.png';
import pasta from '../images/pasta.png';
import pizza from '../images/pizza.png';
import hamburger from '../images/hamburger.png';
import ramen from '../images/ramen.png';
import sushi from '../images/sushi.png';
import salad from '../images/salad.png';
import juice from '../images/juice.png';
import coffe from '../images/coffee-cup.png';
import cupcake from '../images/cupcake.png';
import english from '../images/english-breakfast.png';
import soup from '../images/soup.png';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import styles from './Slider.module.css';

// import required modules
import {Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
       style={{
        "--swiper-navigation-color": 'rgb(204, 204, 204)',
        "--swiper-navigation-size": '30px',

      }}
        slidesPerView={6}
        slidesPerGroup={6}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[ Navigation]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.slide}><a href="#starter" className={styles.link}><img src={canape} /><p>Starter</p></a></SwiperSlide>
        <SwiperSlide className={styles.slide}><a href="#soup" className={styles.link}><img src={soup} /><p>Soup</p></a></SwiperSlide>
        <SwiperSlide className={styles.slide}><a href="#pasta" className={styles.link}><img src={pasta} /><p>Pasta</p></a></SwiperSlide>
        <SwiperSlide className={styles.slide}><a href="#pizza" className={styles.link}><img src={pizza} /><p>Pizza</p></a></SwiperSlide>
        <SwiperSlide className={styles.slide}><a href="#hamburger" className={styles.link}><img src={hamburger} /><p>Hamburger</p></a></SwiperSlide>
        <SwiperSlide className={styles.slide}><a href="#ramen" className={styles.link}><img src={ramen} /><p>Ramen</p></a></SwiperSlide>
        <SwiperSlide className={styles.slide}><a href="#sushi" className={styles.link}><img src={sushi} /><p>Sushi</p></a></SwiperSlide>
        <SwiperSlide className={styles.slide}><a href="#salad" className={styles.link}><img src={salad} /><p>Salad</p></a></SwiperSlide>
        <SwiperSlide className={styles.slide}><a href="#coldDrink" className={styles.link}><img src={juice} /><p>Cold Drink</p></a></SwiperSlide>
        <SwiperSlide className={styles.slide}><a href="#hotDrink" className={styles.link}><img src={coffe} /><p>Hot Drink</p></a></SwiperSlide>
        <SwiperSlide className={styles.slide}><a href="#breakfast" className={styles.link}><img src={english} /><p>Breakfast</p></a></SwiperSlide>
        <SwiperSlide className={styles.slide}><a href="#deessert" className={styles.link}><img src={cupcake} /><p>Deessert</p></a></SwiperSlide>
      </Swiper>
    </>
  );
}
