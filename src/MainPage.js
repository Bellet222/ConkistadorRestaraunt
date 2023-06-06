import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import "./css/style.css"
import "./css/normalize.css"
import "./css/slick.css"
import "./css/datepicker.min.css"
import "./css/jquery.formstyler.css"
import "./css/magnific-popup.css"

import { getAuth, onAuthStateChanged } from "firebase/auth";
import OrderModal from "./components/OrderModal";
import Header from "./components/Header";
import Blocks1 from "./components/Blocks1";
import Menu from "./components/Menu"
import FoodList from "./components/FoodList"
import BookTable from "./components/BookTable"
import Events from "./components/Events"
import Footer from "./components/Footer"
import EnterModal from "./components/EnterModal"
import RegModal from "./components/RegModal"

const MainPage = () => {
    
  const [alertModal, setAlertModal] = useState(false);

  const alertActive = () => {
    setAlertModal(true);

    setTimeout(() => setAlertModal(false), 1500)
  }

    const [regModal, setRegModal] = useState(false);
    const [enterModal, setEnterModal] = useState(false);
    const [iAuth, setIAuth] = useState();
    const [orderModal, setOrderModal] = useState(false);
    const [title, setTitle] = useState();
    const [text, setText] = useState();
    const [price, setPrice] = useState();
    const [uid, setUid] = useState();
    const [image, setImage] = useState();
    const auth = getAuth();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUid(user.uid)
            } 
        });
      }, [])

    return (
        <div>
          
          <CSSTransition in={alertModal} classNames='alert' timeout={200} unmountOnExit>


      <div className='alertModalWrap'>
            <div className='alertModal'>
                <p>Успешно выполнено!</p>
            </div>
        </div>

      </CSSTransition>


            <main>
  <EnterModal
    enterModal = {enterModal}
    setEnterModal = {setEnterModal}
    setRegModal = {setRegModal}
    />
    <RegModal
    regModal = {regModal}
    setRegModal = {setRegModal}
    setEnterModal = {setEnterModal}
    />
    <OrderModal
        setOrderModal = {setOrderModal}
        orderModal = {orderModal}
        title = {title}
        text = {text}
        uid = {uid}
        price = {price}
        img = {image}
        setRegModal = {setRegModal}
        alertActive = {alertActive}
    />
    <Header
    setEnterModal = {setEnterModal}
    setRegModal = {setRegModal}
    iAuth = {iAuth}
    setIAuth = {setIAuth}
    />
    <Blocks1/>
    <BookTable
      iAuth = {iAuth}
      uid = {uid}
      setRegModal = {setRegModal}
      alertActive = {alertActive}
      alertModal = {alertModal}
      
    />
    <FoodList/>
    <Menu
    setOrderModal = {setOrderModal}
    iAuth = {iAuth}
    setRegModal = {setRegModal}
    setTitle = {setTitle}
    setText = {setText}
    setPrice = {setPrice}
    setImage = {setImage}
    />
    <Events/>
    <Footer
    alertActive = {alertActive}
    />
    
    
    
  </main>
  
  {/* <div id="modal__book" className="modal">
    <div className="modal__dialog modal__dialog--sm">
      <button className="modal__close" type="button" data-close="">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 511.76 511.76"
          style={{ enableBackground: "new 0 0 511.76 511.76" }}
          xmlSpace="preserve"
        >
          <path
            d="M436.896,74.869c-99.84-99.819-262.208-99.819-362.048,0c-99.797,99.819-99.797,262.229,0,362.048
			c49.92,49.899,115.477,74.837,181.035,74.837s131.093-24.939,181.013-74.837C536.715,337.099,536.715,174.688,436.896,74.869z
			 M361.461,331.317c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251
			l-75.413-75.435l-75.392,75.413c-4.181,4.16-9.643,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251
			c-8.341-8.341-8.341-21.845,0-30.165l75.392-75.413l-75.413-75.413c-8.341-8.341-8.341-21.845,0-30.165
			c8.32-8.341,21.824-8.341,30.165,0l75.413,75.413l75.413-75.413c8.341-8.341,21.824-8.341,30.165,0
			c8.341,8.32,8.341,21.824,0,30.165l-75.413,75.413L361.461,331.317z"
          />
        </svg>
      </button>
      <h2 className="content__title">Забронировать стол</h2>
      <form className="book__form" action="/">
        <div className="form__column">
          <input type="text" placeholder="Имя" />
          <input type="tel" placeholder="Мобильный телефон" />
          <input
            type="date"
            placeholder="Дата"
            id="date"
            defaultValue="2020-08-22"
          />
        </div>
        <div className="form__column">
          <input type="email" placeholder="Email" />
          <select className="book-select" name="select" data-placeholder="Количество гостей">
            <option value="/" selected="">Кол-во гостей</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
          <select className="book-select" name="select" data-placeholder="Выберите время">
            <option value="/" selected="">Выберите время</option>
            <option value="08:00 - 10:00">08:00 - 10:00</option>
            <option value="10:00 - 12:00">10:00 - 12:00</option>
            <option value="12:00 - 14:00">12:00 - 14:00</option>
            <option value="14:00 - 16:00">14:00 - 16:00</option>
            <option value="16:00 - 18:00">16:00 - 18:00</option>
            <option value="18:00 - 20:00">18:00 - 20:00</option>
            <option value="20:00 - 22:00">20:00 - 22:00</option>
          </select>
        </div>
        <input
          className="form__btn"
          type="submit"
          defaultValue="Забронировать"
        />
      </form>
    </div>
  </div> */}


        </div>
    );
};

export default MainPage;