import React from 'react';
import { Link } from 'react-router-dom';

const UserHeader = () => {
    return (
        <div>
            <div className='account-header'>
                <div className='account-header-text'>
                    <Link className='backArrow' to={'/'}><p>←</p></Link>
                    <h2>Личный кабинет</h2>
                    <p style={{opacity: '0'}}>23</p>
                </div>
                    <hr color='#a11818'/>
                <div className='account-btns'>
                    <Link to={'/Account'}><button className='account-btn1'>Ваша корзина</button></Link>
                    <Link to={'/Booking'}><button className='account-btn2'>Брони столов</button></Link>
                    <Link to={'/UserHistory'}><button className='account-btn3'>История</button></Link>

                </div>
            </div> 

            <div className='account-items'>

            </div>
        </div>
    );
};

export default UserHeader;