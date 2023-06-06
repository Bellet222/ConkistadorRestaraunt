import React, { useEffect, useState } from "react";
import UserHeader from "./UserHeader";
import UserOrder from "./UserOrder";
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { CSSTransition } from "react-transition-group";

const UserOrders = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [adress, setAdress] = useState('');
  const [phone, setPhone] = useState('');
  const [uid, setUid] = useState();
  const [menuList, setMenuList] = useState([]);
  const [delivery, setDelivery] = useState('Доставка');  
  const [alertModal, setAlertModal] = useState(false);


  const authi = getAuth();
  useEffect(() => {
    onAuthStateChanged(authi, (user) => {
      if (user) {
        setUid(user.uid);
      } else {
        setUid("");
      }
    });
  }, []);

  const fetchPost = async (uid) => {
    await getDocs(collection(db, 'UsersList', 'Users', uid, "orders", "ordersList")).then(
      (querySnapshot) => {
        const newData = querySnapshot.docs.map((food) => ({
          ...food.data(),
          id: food.id,
        }));
        setMenuList(newData);
        console.log(menuList, newData);
      }
    );
  };

  useEffect(() => {
    if (uid) fetchPost(uid);
  }, [uid]);


  const alertActive = () => {
    setAlertModal(true);

    setTimeout(() => setAlertModal(false), 1500)
  }


  const goHistory = (e) => {
    e.preventDefault()
    menuList.forEach((food) =>
      addDoc(collection(db, 'UsersList', 'Users', uid, "UserHistory", "OrdersHistory"), {
        title: food.title,
        text: food.text,
        price: food.price,
        img: food.img,
        delivery: delivery,
        name: name,
        adress: adress
      }),

    
    );

    menuList.forEach((food) =>
        deleteDoc(doc(db, 'UsersList', 'Users', uid, "orders", "ordersList", food.id)) 
    );

    fetchPost(uid)
   
    setEmail('')
    setName('')
    setAdress('')
    setPhone('')
    alertActive()
    e.preventDefault()
  };

  console.log(menuList);

  return (
    <div>

<CSSTransition in={alertModal} classNames='alert' timeout={200} unmountOnExit>


<div className='alertModalWrap'>
      <div className='alertModal'>
          <p>Успешно выполнено!</p>
      </div>
  </div>

</CSSTransition>

      <UserHeader />
      <div className="orderWin">
        <div className="orderUserItemsWrapper">
          <h1>Ваш заказ:</h1>
          <div className="orderUserItems">
            <h1 className={menuList.length > 0 ? 'disable' : ''} style={{color: '#3e3e3eb0', marginLeft: '27%', marginTop: '10%', fontSize: '25px'}}>Заказов пока нет</h1>
            {menuList.map((food, index) => (
              <UserOrder
                title={food.title}
                text={food.text}
                price={food.price}
                img={food.img}
                key={index}
                id={food.id}
                uid={uid}
                fetchPost={fetchPost}
              />
            ))}
          </div>
        </div>

        <div className="orderForm">
          <h1 style={{ textAlign: "center" }}>Ваши данные</h1>
          
            
              
              <form onSubmit={goHistory}>

              

              <div className="orderFormInputs">
            <div className="OrderFormInputs1">


                <input
                required
              value={email}
                placeholder="E-mail"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
              required
              value={name}
                placeholder="Имя"
                type="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="OrderFormInputs2">
              <input
              required
                value={adress}
                placeholder="Адрес"
                type="adress"
                onChange={(e) => setAdress(e.target.value)}
              />
              <input
              required
              value={phone}
                placeholder="Номер телефона"
                type="phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="radio-inp">
              <select
                onChange={e => setDelivery(e.target.value)}
                className="orderOptions"
                name="select"
                data-placeholder=""
              >
                <option value="Доставка">Доставка</option>
                <option value="Самовывоз">Самовывоз</option>
              </select>
            </div>
          </div>

          <button disabled={menuList.length > 0 ? false : true}  className="formOrderBtn">
            Заказать
          </button>

          </form>

              

             
              
          
        </div>
      </div>
    </div>
  );
};

export default UserOrders;
