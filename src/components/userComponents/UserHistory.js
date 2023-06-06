import React, { useEffect, useState } from 'react';
import UserHeader from './UserHeader';
import HistoryOrders from './HistoryOrders';
import HistoryBooking from './HistoryBooking';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from '../../firebase';
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";

const UserHistory = () => {
    const [uid, setUid] = useState();
    const [menuList, setMenuList] = useState([]);
    const [bookList, setBookList] = useState([]);




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


  const ordersPost = async (uid) => {
    await getDocs(collection(db, 'UsersList', 'Users', uid, "UserHistory", "OrdersHistory")).then(
      (querySnapshot) => {
        const newData = querySnapshot.docs.map((order) => ({
          ...order.data(),
          id: order.id,
        }));
        setMenuList(newData);
        console.log(menuList, newData);
      }
    );
  };

  useEffect(() => {
    if (uid) ordersPost(uid);
  }, [uid]);


  const historyPost = async (uid) => {
    await getDocs(collection(db, 'UsersList', 'Users', uid, 'UserHistory', 'BookHistory')).then(
      (querySnapshot) => {
        const newData = querySnapshot.docs.map((food) => ({
          ...food.data(),
          id: food.id,
        }));
        setBookList(newData);
        console.log(bookList, newData);
      }
    );
  };

  useEffect(() => {
    if (uid) historyPost(uid);
  }, [uid]);






    return (
        <div>
            <UserHeader/>

            <div className='historyMain'>

                <div className='historyOrdersWrap'>
                    <h1 style={{textAlign: 'center', width: '100%', color: 'grey'}}>История заказов</h1>
                    <div className='historyOrders'>
                        {menuList.map((item, index) =>
                            <HistoryOrders
                                key={index}
                                img = {item.img}
                                title = {item.title}
                                text = {item.text}
                                price = {item.price}
                            />
                        )}
                </div>
                </div>


                <div className='historyBooking'>
                    <div className='historyOrders'>
                        <h1 style={{textAlign: 'center', width: '100%', color: 'grey'}}>История броней</h1>
                    </div>
                    {bookList.map((book, index) => 
                        <HistoryBooking
                            key={index}
                            nameOf = {book.nameOf}
                            dateOf = {book.dateOf}
                            timeOf = {book.timeOf}
                            guests = {book.guests}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserHistory;