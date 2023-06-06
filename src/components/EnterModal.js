import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const EnterModal = ({ enterModal, setEnterModal, setRegModal, ...props }) => {
  const [email, setEmail] = useState();
  const [passw, setPassw] = useState();
  const [error, setError] = useState(false);


  const register = () => {
    setRegModal(true);
    setEnterModal(false);
  };

  const enter = async (e) => {
    e.preventDefault()
    try {
      const regUser = await signInWithEmailAndPassword(auth, email, passw);
      setEnterModal(false);
      console.log(regUser);

    } catch (error) {

      console.log(error.message);
      setError(true)

    }
  };

  return (
    <div>
      <CSSTransition in={enterModal} classNames='alert' timeout={200} unmountOnExit>
        <div
          className="modal-bg"
          onClick={() => setEnterModal(false)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-forms">
              <h1>
                Войдите в свой <br />
                аккаунт
              </h1>


              <form onSubmit={enter}> 


              <div>
                <label>E-mail</label>
                <input
                  type="email"
                  placeholder="E-mail"
                  required
                  onChange={(e) => {setEmail(e.target.value); setError(false)}}
                />
              </div>

              <div>
                <label>Пароль</label>
                <input
                  type="password"
                  placeholder="Пароль"
                  required
                  onChange={(e) => {setPassw(e.target.value); setError(false)}}
                />
              </div>

              <button className="modal-enter-btn" type="submit">
                Войти
              </button>


              </form>

              

              <h2 className={error ? '' : 'disable'} style={{color: 'red', fontWeight: 'normal'}}>Неверный логин или пароль</h2>


              <p>
                Нет аккаунта? <i onClick={register}>Регистарция</i>
              </p>
            </div>
            <div className="modal-img">
              <img
                src="https://img.freepik.com/free-photo/minimalist-salad-in-a-round-shape-and-salt_23-2148748877.jpg?w=360&t=st=1683968596~exp=1683969196~hmac=6f4e6407fd0835b37407767c06a5c411084dd22e91cb7532f8fc386ffed1eeb6"
                alt=""
              />
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default EnterModal;
