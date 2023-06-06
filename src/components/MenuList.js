import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const MenuList = ({setOrderModal, iAuth, setRegModal, buyEat, ...props}) => {

  const auth = getAuth();

  const hanleClick = () =>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setOrderModal(true)
        buyEat()
      }   else{
        setRegModal(true)
      }
  });
  }


  return (

    
    
        <>
          <div onClick={hanleClick} className="menu-list">
            <img src={props.img} alt="Изображение не найдено" />
            <h2>{props.title}</h2>
            <p>
              {props.text}
            </p>
            <p>Цена: {props.price}₽</p>
            
          </div>

          
        </>
  );
};

export default MenuList;
