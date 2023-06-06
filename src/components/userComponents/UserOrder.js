import React, { useEffect } from 'react';
import Trash from '../trash-bin.png'
import { doc, deleteDoc, addDoc, collection } from "firebase/firestore";
import { db } from '../../firebase';


const UserOrder = ({fetchPost, setGoFunc, ...props}) => {

    const removeDoc = async () =>{
        await deleteDoc(doc(db, 'UsersList', 'Users', props.uid, "orders", "ordersList", props.id));
        await fetchPost(props.uid)
    }

        
        
        //    addDoc(collection(db, props.uid, 'UserHistory', 'OrdersHistory'), {
        //     title: props.title,
        //     price: props.price,
        //     img: props.img
        //   });

        //    deleteDoc(doc(db, props.uid, "orders", "ordersList", props.id));
        //    fetchPost(props.uid)
        //   setDocId(false)
        // }
    
      
      
    
    return (
        <div className='userItem'>
            <div className='userOrderHead'>
                <img src={props.img} alt="Изображение не найдено" />
                <p>{props.title}</p>
                <hr/>
            </div>
            <div className='userOrderPrice'>
                <p>Цена: {props.price}₽</p>
                <img onClick={removeDoc} src={Trash} alt="" />
            </div>
        </div>
    );
};

export default UserOrder;