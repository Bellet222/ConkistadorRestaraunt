import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';



import gallery1 from "../images/gallery-1.jpg"
import gallery2 from "../images/gallery-2.jpg"
import gallery3 from "../images/gallery-3.jpg"
import gallery4 from "../images/gallery-4.jpg"

const Events = () => {
  const [eventTitle, setEventTitle] = useState();
  const [eventImg, setEventImg] = useState();

  const [eventTitle2, setEventTitle2] = useState();
  const [eventImg2, setEventImg2] = useState();

  const getEvent = async () => {
    const docRef = doc(db, 'Events', 'Event1');
    const docSnap = await getDoc(docRef);
    const inpData = docSnap.data();
    setEventTitle(inpData.title);
    setEventImg(inpData.img);
  };

  const getEvent2 = async () => {
    const docRef = doc(db, 'Events', 'Event2');
    const docSnap = await getDoc(docRef);
    const inpData = docSnap.data();
    setEventTitle2(inpData.title);
    setEventImg2(inpData.img);
  };

  useEffect( () => {
    getEvent()
    getEvent2()
}, [])


    return (
        <div>
            <section className="events" id="events">
      <div className="container">
        <h3 className="section__suptitle">Наши мероприятия</h3>
        <div className="events__inner">
          <div
            className="events__photo events__photo--left section__photo section__photo--left"
            style={{content: 'Свадьбы'}}
          >
            <p>{eventTitle}</p>
            <img src={eventImg} alt="/" loading="lazy" />
          </div>
          <div
            className="events__photo events__photo--right section__photo section__photo--right"
            
          >
              <p>{eventTitle2}</p>
            <img src={eventImg2} alt="/" loading="lazy" />
          </div>
        </div>
        <p className="events__info">
          Для заказа частных мероприятий, пожалуйста, звоните:{" "}
          <span>+380950123243</span> или используйте контактную форму.
        </p>
      </div>
    </section>
    <section className="gallery" id="gallery">
      <a className="gallery__link" href="images/gallery-1.jpg">
        <img
          className="gallery__img"
          src={gallery1}
          alt="/"
          loading="lazy"
        />
      </a>
      <a className="gallery__link" href="images/gallery-2.jpg">
        <img
          className="gallery__img"
          src={gallery2}
          alt="/"
          loading="lazy"
        />
      </a>
      <a className="gallery__link" href="images/gallery-3.jpg">
        <img
          className="gallery__img"
          src={gallery3}
          alt="/"
          loading="lazy"
        />
      </a>
      <a className="gallery__link" href="images/gallery-4.jpg">
        <img
          className="gallery__img"
          src={gallery4}
          alt="/"
          loading="lazy"
        />
      </a>
    </section>
        </div>
    );
};

export default Events;