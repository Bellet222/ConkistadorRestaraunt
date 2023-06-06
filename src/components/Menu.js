import React, { useEffect, useState } from 'react';
import MenuList from "../components/MenuList"
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from "../firebase";



const Menu = ({setOrderModal, iAuth, setRegModal, setText, setTitle, setPrice, setImage}) => {

    const [menu, setMenu] = useState([]);
    const [category, setCategory] = useState(false);
  const fetchPost = (menuTitle, menuText) => {

   getDocs(collection(db, 'Menu', menuTitle, menuText))
       .then((querySnapshot)=>{               
           const newData = querySnapshot.docs
               .map((item) => ({...item.data(), id:item.id }));
               setMenu(newData);
       })
  }

  useEffect( () => {
    fetchPost("Eat", "Pizza")
}, [])



    return (
        <div>
            <section className="menu" id="menu">
      <div className="container">
        <div className="menu__inner">
          <h2 className="content__title">Меню</h2>
          <p className="content__subtitle">
            Разумеется все желающие могут ознакомиться с нашим полным меню.
          </p>
          <div className="menu__tab">
            <button className="menu__links" onClick={() => setCategory(true)}>
              Еда
            </button>
            <button className="menu__links" onClick={() => setCategory(false)}>
              Напитки
            </button>
          </div>

          <div className="menu__tab">
            <button className="menu__links" onClick={() => category ? fetchPost("Eat", "Pizza") : fetchPost("Drinks","noAlco")}>
              {category ? 'Пицца' : 'Безалкогольные'}
            
            </button>
            <button className="menu__links" onClick={() => category ? fetchPost("Eat","Pasta") : fetchPost("Drinks","Alco") }>
            {category ? 'Паста' : 'Алкогольные'}
            </button>
          </div>


          {/* <div className="menu__tab">
            <button className="menu__links" onClick={() => fetchPost("Pizza")}>
              Пицца
            </button>
            <button className="menu__links" onClick={() => fetchPost("Pasta")}>
              Паста
            </button>
            
            <button className="menu__links" onClick={() => fetchPost("Alco") }>
              Алкоголь
            </button>

            <button className="menu__links" onClick={() => fetchPost("Drinks")}>
              Напитки
            </button>
          </div> */}

            <div className="menu-first-main">
              <div className="menu-main">
                {menu.map((item, index) =>
                <MenuList
                buyEat = {() =>{
                  setText(item.text)
                  setTitle(item.title)
                  setPrice(item.price)
                  setImage(item.img)
                }}
                title = {item.title}
                text = {item.text}
                price = {item.price}
                img = {item.img}
                key = {index}
                setOrderModal = {setOrderModal}
                iAuth = {iAuth}
                setRegModal = {setRegModal}
                />
                )}
              
              
            </div>
            </div>

          
        </div>
      </div>
    </section>
        </div>
    );
};

export default Menu;