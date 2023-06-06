import React, { useState } from 'react';
import bookPhoto from '../images/book-photo.jpg'
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebase';
import ReactInputMask from 'react-input-mask';
import InputMask from 'react-input-mask'


const BookTable = ({ alertActive ,...props}) => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [guests, setGuests] = useState();
  const [dateOf, setDateOf] = useState();
  const [timeOf, setTimeOf] = useState();

  
  const bookTable = async (e) =>{
    e.preventDefault()
    if (props.iAuth){
      await addDoc(collection(db, 'UsersList', 'Users', props.uid, 'BookTable', 'BookList'), {
        nameOf: name,
        email: email,
        phone: phone,
        guests: guests,
        dateOf: dateOf,
        timeOf: timeOf
      });

    setName('')
    setEmail('')
    setPhone('')
    setGuests('')
    setDateOf('')
    setTimeOf('')
    e.preventDefault()

    alertActive()
    }
      

    else {
      props.setRegModal(true)
    }
    
  }


    return (
        <div>
            <section className="book" id="book">
      <div className="container">
        <div className="book__inner inner">
          <div className="book__content content content--black">
            <h2 className="content__title">Забронировать стол</h2>
            <form className="book__form" onSubmit={bookTable}>
              <div className="form__column">
              <label>Имя</label>
                <input onChange={e => setName(e.target.value)} value={name} required type="text" placeholder="Имя" />
                <label>Телефон</label>
                <InputMask mask='+7(999)-999-99-99'  onChange={e => setPhone(e.target.value)} value={phone} required type="tel" placeholder="Мобильный телефон">
                
                </InputMask>
                
                
                
                
                <label>Дата брони</label>
                <input
                  value={dateOf}
                  onChange={e => setDateOf(e.target.value)}
                  required
                  type="date"
                  className="datepicker-here"
                  data-position="bottom left"
                  placeholder="Дата"
                />
              </div>
              <div className="form__column">
                <label for = 'email'>E-mail</label>
                <input value={email} id = 'email' onChange={e => setEmail(e.target.value)} required type="email" placeholder="Email" />
                <label>Количество гостей</label>
                <select value={guests} onChange={e => setGuests(e.target.value)} required name="select" data-placeholder="Количество гостей">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
                <label>Время брони</label>
                <select value={timeOf} onChange={e => setTimeOf(e.target.value)} name="select" required data-placeholder="Выберите время">
            <option value="08:00 - 10:00">08:00 - 10:00</option>
            <option value="10:00 - 12:00">10:00 - 12:00</option>
            <option value="12:00 - 14:00">12:00 - 14:00</option>
            <option value="14:00 - 16:00">14:00 - 16:00</option>
            <option value="16:00 - 18:00">16:00 - 18:00</option>
            <option value="18:00 - 20:00">18:00 - 20:00</option>
            <option value="20:00 - 22:00">20:00 - 22:00</option>
                </select>
              </div>
              <button
                className="form__btn"
                type="submit"
                defaultValue="Забронировать"
              >Забронировать</button>
            </form>
          </div>
          <div
            className="book__photo section__photo section__photo--right section__photo--shadow"
            
          >

            <img src={bookPhoto} alt="/" />
          </div>
        </div>
        <p className="book__info">
          Пн - Пт: <span>8:00 - 23:00.</span> Сб - Вс:{" "}
          <span>8:00 - 01:00.</span> Номер для ваших звонков:
          <span>+380950123243</span>
        </p>
      </div>
    </section>
        </div>
    );
};

export default BookTable;