import React from 'react';
import { addDoc, collection, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';



const Bookin = ({fetchPost, alertActive, ...props}) => {

    const goHistory = async (e) =>{
        e.preventDefault()
          await addDoc(collection(db, 'UsersList', 'Users', props.uid, 'UserHistory', 'BookHistory'), {
            nameOf: props.nameOf,
            dateOf: props.dateOf,
            timeOf: props.timeOf,
            guests: props.guests
          });

          await deleteDoc(doc(db, 'UsersList', 'Users', props.uid,'BookTable', 'BookList',  props.id));
          await fetchPost(props.uid)
          await alertActive()
      }

 





    return (
        <div className='wrapperUserBook'>
            <div className="userBook" >
                <h2>Стол на имя {props.nameOf} запланирован на: <b>{props.dateOf} в {props.timeOf}</b> Количество гостей: {props.guests}</h2>
                <div className='userBookBody'>
                <button onClick={goHistory}>Уже сходил</button>
                <button onClick={goHistory}>Отменить</button>
                </div>
            </div>
        </div>
    );
};

export default Bookin;