import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Bookin from './Bookin';
import UserHeader from './UserHeader';
import { CSSTransition } from 'react-transition-group';


const UserBook = () => {


    const [uid, setUid] = useState();
    const [bookedList, setBookedList] = useState([]);
    const [alertModal, setAlertModal] = useState(false);


    const authUse = getAuth();
    useEffect(() => {
        onAuthStateChanged(authUse, (user) => {
            if (user) {
                setUid(user.uid)
            } 
        });
      }, [])

      const alertActive = () => {
        setAlertModal(true);
    
        setTimeout(() => setAlertModal(false), 1500)
      }
      


      const fetchPost = async (uid) => {
      
        await getDocs(collection(db, 'UsersList', 'Users', uid, 'BookTable', 'BookList'))
             .then((querySnapshot)=>{               
                 const newData = querySnapshot.docs
                     .map((table) => ({...table.data(), id:table.id }));
                     setBookedList(newData) 
                 console.log(bookedList, newData);
             })

     }


     useEffect(() => {
             if (uid)
            fetchPost(uid)
      }, [uid]) 

      


    return (
        <div>

            
        <CSSTransition in={alertModal} classNames='alert' timeout={200} unmountOnExit>

            <div className='alertModalWrap'>
                <div className='alertModal'>
                    <p>Успешно выполнено!</p>
                </div>
            </div>

        </CSSTransition>


        <UserHeader/>



            <h1 style={{textAlign: 'center'}}>Ваши брони столов</h1>
            <hr/>
            
            <div className='userBookMain'>
            <h3 className={bookedList.length > 0 ? 'disable' : ''}>У вас нет броней</h3>
                {bookedList.map((table, index) =>
                    <Bookin
                        nameOf = {table.nameOf}
                        guests = {table.guests}
                        dateOf = {table.dateOf}
                        timeOf = {table.timeOf}
                        key={index}
                        uid = {uid}
                        id = {table.id}
                        fetchPost = {fetchPost}
                        alertActive = {alertActive}

                    />
                )}
            </div>
        </div>
    );
};

export default UserBook;