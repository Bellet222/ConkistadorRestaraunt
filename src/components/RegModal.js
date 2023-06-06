import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from '../firebase';
import { CSSTransition } from 'react-transition-group';


const RegModal = ({regModal, setRegModal, setEnterModal}) => {

    const [emailReg, setEmailReg] = useState();
    const [passReg, setPassReg] = useState();

    const openEnterModal = () =>{
        setEnterModal(true)
        setRegModal(false)
    }

    const register = async (e) => {
        e.preventDefault()
        try{
                const regUser = await createUserWithEmailAndPassword(auth, emailReg, passReg);
                console.log(regUser)
                setRegModal(false)

            }
        catch (error) {
            console.log(error.message)
        }
    }







    return (
        <div>
            <div>
            <CSSTransition in={regModal} classNames='alert' timeout={200} unmountOnExit>


            <div className= "modal-bg-reg" onClick={() =>setRegModal(false)}>


<div className='modal' onClick={e => e.stopPropagation() }>
  <div className='modal-forms-reg'>

    <h1>Зарегистрируйтесь и просматривайте историю заказов</h1>

    <div className='reg-inputs'>
    {/* <div>
    <label>Имя и фамилия</label>
    <input type="text" placeholder='Иванов Иван' onChange={e => setNamesReg(e.target.value)} required/>
  </div> */}
    <form onSubmit={register}>


    <div>
        <label>Почта</label>
        <input type="email" placeholder='E-mail' required onChange={e => setEmailReg(e.target.value)}/>
    </div>

    <div>
        <label>Пароль</label>
        <input type="password" placeholder='Пароль' minlength="6" required onChange={e => setPassReg(e.target.value)}/>
    </div>


        <button className='modal-reg-main-btn' type='submit'>Зарегистрироваться</button>


    </form>

        <p>Уже есть аккаунт? <b onClick={openEnterModal}>Войти</b></p>
        </div> 
    </div>
    <div className='modal-img'>
        <img src='https://img.freepik.com/free-photo/tasty-boiled-spaghetti-pasta-with-basil-leaves-and-tomato-on-sack-with-bread-sticks-and-veg-salad_23-2148076247.jpg?w=360&t=st=1683972121~exp=1683972721~hmac=f64f4d283321b42813d1a44f5fe50c9bf2cbd75204a461771160a91fbd0d44cb' alt="" />
        
    </div>
</div>
</div>


            </CSSTransition>
            
            
        </div>
        </div>
    );
};

export default RegModal;