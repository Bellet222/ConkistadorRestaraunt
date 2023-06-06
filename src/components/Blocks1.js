import React from 'react';
import Slider from "react-slick"



import about from '../images/about-photo.jpg'
import team1 from '../images/team-1.jpg'
import team2 from '../images/team-2.jpg'
import team3 from '../images/team-3.jpg'
import team4 from '../images/team-4.jpg'

const Blocks1 = () => {

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
            <section className="about" id="about">
      <div className="container">
        <div className="about__inner inner">
          <div className="about__content content content--black">
            <h2 className="content__title">О нас</h2>
            <p className="content__subtitle">
              "Конкистадор" – популярный ресторан в Уфе с безупречной
              репутацией.
            </p>
            <p className="content__text">
              У нас всегда радушный прием, вкуснейшая кухня от талантливого
              шеф-повара, увлекательные шоу-программы и обслуживание высочайшего
              уровня. Мы каждый день открыты для желающих отдохнуть, провести
              время в хорошей компании и насладиться авторскими блюдами.
              Приходите к нам на поздний завтрак, сытный ланч или же завершите
              насыщенный день вкусным ужином. Уютный интерьер, красивый и
              стильный декор, приятная музыка, доступные цены – всё это
              располагает к прекрасному отдыху в любимом городе!
            </p>
          </div>
          <div
            className="about__photo section__photo section__photo--right section__photo--shadow"
            
          >
            <img src={about} alt="/" />
          </div>
        </div>
      </div>
    </section>
    <section className="team" id="team">
      <div className="container">
        <h3 className="section__suptitle">Наша команда</h3>
        <div className="team__inner slider">
          <Slider {...settings}>
          <div className="slider__item">
            <div className="team__item">
              <div
                className="team__photo section__photo section__photo--left"
                
              >
                <img src={team1} alt="/" />
              </div>
              <div className="team__content content content--white">
                <h2 className="content__title">Шеф-повар</h2>
                <p className="content__subtitle">Антонио Маргарети</p>
                <p className="content__text">
                  О регалиях Антонио можно говорить долго! Это и победы в
                  международных кулинарных конкурсах и участие в жюри кулинарных
                  проектов и статус шеф-повара из ТОП-10 лучший шефов Украины.
                  Словом, можно долго рассказывать о философии его кухни, но все
                  же лучше просто пожаловать к нам и ощутить всю прелесть его
                  таланта на собственном желудке!
                </p>
              </div>
            </div>
          </div>
          <div className="slider_item">
            <div className="team__item">
              <div className="team__photo section__photo section__photo--left">
                <img src={team2} alt="/" />
              </div>
              <div className="team__content content content--white">
                <h2 className="content__title">Помощник шефа</h2>
                <p className="content__subtitle">Бенисио Фильточо</p>
                <p className="content__text">
                  Приехав к нам прямиком из Италии Бенисио с огромной радостью
                  делится своим опытом со своими коллегами и каждый день радует
                  наших гостей вкуснейшими блюдами.
                </p>
              </div>
            </div>
          </div>
          <div className="slider_item">
            <div className="team__item">
              <div className="team__photo section__photo section__photo--left">
                <img src={team3} alt="/" />
              </div>
              <div className="team__content content content--white">
                <h2 className="content__title">Повар</h2>
                <p className="content__subtitle">Константин Новарский</p>
                <p className="content__text">
                  Не смотря на то, что Константин с нами относительно недавно,
                  сложно не признать его талант. На его изысканную работу можно
                  смотреть часами, не переставая восхищаться его умению
                  полностью отдать себя своей деятельности.
                </p>
              </div>
            </div>
          </div>
          <div className="slider_item">
            <div className="team__item">
              <div className="team__photo section__photo section__photo--left">
                <img src={team4} alt="/" />
              </div>
              <div className="team__content content content--white">
                <h2 className="content__title">Повар, мастер-сушист</h2>
                <p className="content__subtitle">Виктор Начинский</p>
                <p className="content__text">
                  Так уж сложилось, что особым спросом у нас пользуются суши и
                  за них у нас успешно отвечает Виктор. Мастера лучших японских
                  ресторанов позавидуют его таланту. Приходите и узнаете почему!
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

export default Blocks1;