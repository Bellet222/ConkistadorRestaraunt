import React from "react";

const HistoryOrders = (props) => {
  return (
    <div className='userItem2'>
            <div className='userOrderHead'>
                <img src={props.img} alt="Изображение не найдено" />
                <p>{props.title}</p>
                <hr/>
            </div>
                <p>Цена: {props.price}</p>
        </div>
  );
};

export default HistoryOrders;
