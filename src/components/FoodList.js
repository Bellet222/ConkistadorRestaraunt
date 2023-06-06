import React from 'react';
import Slider from "react-slick"


import food1 from '../images/food-1.jpg'
import food2 from '../images/food-2.jpg'
import food3 from '../images/food-3.jpg'
import food4 from '../images/food-4.jpg'

const FoodList = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      
      };

    
    return (
        <div>
            <section className="food">
      <div className="container">
        <h3 className="section__suptitle">Наши блюда</h3>
        <div className="food__inner slider">
          <Slider {...settings}>
          <div className="slider__item">
            <div className="food__item">
              <div
                className="food__photo section__photo section__photo--left"
              >
                <img src={food1} alt="/" />
              </div>
              <div className="food__content content content--white">
                <h2 className="content__title">Тюдорский шашлык</h2>
                <p className="content__subtitle">
                  Поверьте, такой шашлык вы ещё не пробовали. Оно того стоит!
                </p>
              </div>
            </div>
          </div>
          <div className="slider_item">
            <div className="food__item">
              <div className="food__photo section__photo section__photo--left">
                <img src={food2} alt="/" />
              </div>
              <div className="food__content content content--white">
                <h2 className="content__title">Ля-Турье</h2>
                <p className="content__subtitle">
                  Для настоящих ценителей изысканного
                </p>
              </div>
            </div>
          </div>
          <div className="slider_item">
            <div className="food__item">
              <div className="food__photo section__photo section__photo--left">
                <img src={food3} alt="/" />
              </div>
              <div className="food__content content content--white">
                <h2 className="content__title">Печенный урдул</h2>
                <p className="content__subtitle">
                  Данная рыба редкий гость в меню ресторанов. Любители морской
                  кухни будут довольны
                </p>
              </div>
            </div>
          </div>
          <div className="slider_item">
            <div className="food__item">
              <div className="food__photo section__photo section__photo--left">
                <img src={food4} alt="/" />
              </div>
              <div className="food__content content content--white">
                <h2 className="content__title">Французская свежесть</h2>
                <p className="content__subtitle">
                  Не мясом едины! Широкий выбор салатов не оставит никого
                  равнодушным.
                </p>
              </div>
            </div>
          </div>
          </Slider>
        </div>
      </div>
    </section>
        </div>
    );
};

export default FoodList;