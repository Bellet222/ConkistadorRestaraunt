import React from 'react';
import AlertModal from './AlertModal';
import InputMask from 'react-input-mask'

const Footer = ({alertActive}) => {

  const alert = (e) =>{
    alertActive()
    e.preventDefault()
  }


    return (
      
        <div>
            <section className="contact" id="contact">
      <div className="container">
        <div className="contact__inner">
          <h2 className="content__title">Контакты</h2>
          <p className="content__subtitle">
            Для связи с нами используйте эту форму либо приведённые номер
            телефона и электронную почту.
          </p>
          <form action="/" className="contact__form" onSubmit={alert}>
            <input type="text" required placeholder="Имя" />
            <input type="email" required placeholder="Email" />
            <InputMask mask='+7(999)-999-99-99' required type='tel' placeholder="Мобильный телефон"></InputMask>
            <textarea name="/" required placeholder="Сообщение" defaultValue={""} />
            <div className="contact__form-footer">
              <div className="contact__form-info">
                <a
                  href="https://goo.gl/maps/XbmGf99RHkem7qi58"
                  className="contact__form-link contact__form-link--1"
                  target="_blank"
                >
                  Уфа, Пушкина 21
                </a>
                <a
                  href="tel:123495432"
                  className="contact__form-link contact__form-link--2"
                >
                  +7-234-65-43
                </a>
                <a
                  href="mailto:asdasd@gmail.com"
                  className="contact__form-link contact__form-link--3"
                >
                  office@mindblister.com
                </a>
              </div>
              <div className="contact__form-btn">
                
                <button 
                  className="form__btn"
                  defaultValue="Отправить сообщение"
                  onClick={e => e.preventDefault}
                >Отправить</button>

                .
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.219370892174!2d36.22549581571547!3d50.00724337941663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a12002b71ac5%3A0xa76340b792d8ace8!2z0JTQtdGA0LbQv9GA0L7QvA!5e0!3m2!1sru!2sua!4v1597865489267!5m2!1sru!2sua"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex={0}
      />
    </div>
   
        </div>
        
    );
};

export default Footer;