import React from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase';
import { CSSTransition } from 'react-transition-group';



const OrderModal = ({orderModal, setOrderModal, alertActive, alertModal, ...props}) => {

    const goDoc = () =>{
        addDoc(collection(db, 'UsersList', 'Users', props.uid, "orders", "ordersList"), {
            title: props.title,
            text: props.text,
            price: props.price,
            img: props.img
        })
        setOrderModal(false)
        alertActive()
    }
    

    return (
        <div>
            <CSSTransition in={orderModal} classNames='alert' timeout={200} unmountOnExit>

            <div className='order-modal-bg' onClick={() => setOrderModal(false)}>
                <div onClick={e => e.stopPropagation()} className='order-modal'>
                    <div className='order-modal-item'>
                        <img src={props.img} alt="" />
                        <h2>{props.title}</h2>
                        <p>
                        {props.text}
                        </p>
                    </div>
            <hr color='#858585'/>
          <div className='order-modal-footer'>
            <p>Цена: {props.price}</p>
            <button onClick={goDoc}>В корзину</button>
          </div>
                </div>
            </div>

            </CSSTransition>
            
        </div>
    );
};

export default OrderModal;