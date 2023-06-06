import React from 'react';

const HistoryBooking = (props) => {
    return (
        <div className='HistoryBookingWrap'>
            <div className='wrapperUserBook'>
            <div className="userBook" >
                <h2>Стол на имя {props.nameOf} был забронирован на: <b>{props.dateOf} в {props.timeOf}</b> Количество гостей: {props.guests}</h2>
            </div>
        </div>
        </div>
    );
};

export default HistoryBooking;