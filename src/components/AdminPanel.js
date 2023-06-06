import React, { useEffect, useState } from "react";
import DropMenu from "./DropMenu";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const AdminPanel = () => {
  const [catValue, setCatValue] = useState();
  const [activeCat, setActiveCat] = useState(false);
  const [activeEat, setActiveEat] = useState(false);
  const [eatValue, setEatValue] = useState();
  const [fixer, setFixer] = useState(false);
  const [list, setList] = useState(false);
  const [listValue, setListValue] = useState();

  const [eventValue, setEventValue] = useState("Event1");
  const [eventTitle, setEventTitle] = useState();
  const [eventLink, setEventLink] = useState();
  const [activeEvent, setActiveEvent] = useState(false);
  const [eventActive, setEventActive] = useState(false);

  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [text, setText] = useState();
  const [imgs, setImgs] = useState();
  const [adddDoc, setAdddDoc] = useState(false);

  const [alertModal, setAlertModal] = useState(false);

  const alertActive = () => {
    setAlertModal(true);

    setTimeout(() => setAlertModal(false), 1500);
  };

  const [eatList, setEatList] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, 'Menu', listValue, catValue)).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((food) => ({
        ...food.data(),
        id: food.id,
      }));
      setEatList(newData);
      console.log(eatList, newData);
    });
  };

  const getEdit = async () => {
    const docRef = doc(db, 'Menu', listValue, catValue, eatValue);
    const docSnap = await getDoc(docRef);
    const inpData = docSnap.data();
    setTitle(inpData.title);
    setPrice(inpData.price);
    setText(inpData.text);
    setImgs(inpData.img);
  };

  const editData = async () => {
    await updateDoc(doc(db, 'Menu', listValue, catValue, eatValue), {
      title: title,
      text: text,
      price: price,
      img: imgs,
    });
    alertActive();
    setCatValue("");
    setEatValue("");
    setTitle("");
    setPrice("");
    setText("");
    setImgs("");
  };

  const addDocument = async () => {
    await setDoc(doc(db,'Menu', listValue, catValue, eatValue), {
      name: eatValue,
      title: title,
      text: text,
      price: price,
      img: imgs,
    });
    alertActive();
    setCatValue("");
    setEatValue("");
    setTitle("");
    setPrice("");
    setText("");
    setImgs("");
  };

  

  const DeleteDocument = async () => {
    await deleteDoc(doc(db, 'Menu', listValue, catValue, eatValue));
    setCatValue("");
    setEatValue("");
  };

  const getEvent = async () => {
    const docRef = doc(db, "Events", eventValue);
    const docSnap = await getDoc(docRef);
    const inpData = docSnap.data();
    setEventTitle(inpData.title);
    setEventLink(inpData.img);
    setEventActive(true);
  };

  const updateEvent = async () => {
    await updateDoc(doc(db, "Events", eventValue), {
      title: eventTitle,
      img: eventLink,
    });
    alertActive();
    setEventLink("");
    setEventTitle("");
    setEventValue("");
    setEventActive(false);
  };

  return (
    <div>
      <CSSTransition
        in={alertModal}
        classNames="alert"
        timeout={200}
        unmountOnExit
      >
        <div className="alertModalWrap">
          <div className="alertModal">
            <p>Успешно выполнено!</p>
          </div>
        </div>
      </CSSTransition>

      <div className="adminHeader">
        <Link to={"/"}>
          <button className="goBackAdmin">Назад</button>
        </Link>
        <h1>Панель админа</h1>
        <p>2</p>
      </div>
      <div
        className="adminPanelWrapper"
        onClick={() => {
          setActiveCat(false);
          setActiveEat(false);
          setList(false);
        }}
      >
        <div className="adminPanelMain">
          <div className="selectInput">
            <div onClick={() => setAdddDoc(!adddDoc)} className="changeState">
              Изменить режим
            </div>

            <h1>Редактирование меню</h1>
            <div>
              <label>Раздел</label>
              <input
                placeholder="Категория"
                type="text"
                value={listValue}
                onClick={(e) => {
                  setList(true);
                  e.stopPropagation();
                }}
                onChange={(e) =>
                  adddDoc ? setListValue(e.target.value) : setList(false)
                }
              />

              <div className={list ? "selectus" : "disable"}>
                <p
                  onClick={() => {
                    setListValue("Eat");
                    setList(false);
                    setFixer(true);
                  }}
                >
                  Еда
                </p>
                <p
                  onClick={() => {
                    setListValue("Drinks");
                    setList(false);
                    setFixer(false);
                  }}
                >
                  Напитки
                </p>
              </div>

              <label>Категория</label>
              <input
                placeholder="Категория"
                type="text"
                value={catValue}
                onClick={(e) => {
                  setActiveCat(true);
                  e.stopPropagation();
                }}
                onChange={(e) =>
                  adddDoc ? setCatValue(e.target.value) : setActiveCat(false)
                }
              />

              <div className={activeCat ? "selectus" : "disable"}>
                <p
                  style={!fixer ? { display: "none" } : { display: "flex" }}
                  onClick={() => {
                    setCatValue("Pizza");
                    setActiveCat(false);
                  }}
                >
                  Пицца
                </p>
                <p
                  style={!fixer ? { display: "none" } : { display: "flex" }}
                  onClick={() => {
                    setCatValue("Pasta");
                    setActiveCat(false);
                  }}
                >
                  Паста
                </p>
                <p
                style={fixer ? { display: "none" } : { display: "flex" }}
                  onClick={() => {
                    setCatValue("noAlco");
                    setActiveCat(false);
                  }}
                >
                  Напитки
                </p>
                <p
                style={fixer ? { display: "none" } : { display: "flex" }}
                  onClick={() => {
                    setCatValue("Alco");
                    setActiveCat(false);
                  }}
                >
                  Алкоголь
                </p>
              </div>
            </div>

            <div className="eatInput">
              <label>Блюдо</label>
              <input
                placeholder="Блюдо (Без пробелов)"
                type="text"
                disabled={!catValue}
                value={eatValue}
                onClick={(e) => {
                  setActiveEat(true);
                  e.stopPropagation();
                  fetchPost();
                }}
                onChange={(e) => {
                  setActiveEat(false);
                  setEatValue(e.target.value);
                }}
              />

              <div className={activeEat ? "selectus" : "disable"}>
                {eatList.map((food, index) => (
                  <DropMenu
                    key={index}
                    title={food.title}
                    name={food.name}
                    setEatValue={setEatValue}
                    setActiveEat={setActiveEat}
                  />
                ))}
              </div>
            </div>

            <p className={!adddDoc ? "editBtn" : "disable"} onClick={getEdit}>
              Редактирование
            </p>
            <button className={adddDoc ? "" : "disable"}>Добавление</button>
            <button onClick={DeleteDocument}>Удалить Блюдо</button>
          </div>

          <div className="adminEdit">
            <h1 style={{ background: adddDoc ? "#c92424" : "#0d729a" }}>
              {adddDoc ? "Добавление" : "Редактирование"}
            </h1>
            <div className="EditInputs">
              <div className="editInputs1">
                <div>
                  <label>Название</label>
                  <input
                    disabled={!eatValue}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Название"
                    type="text"
                  />
                </div>

                <div>
                  <label>Цена</label>
                  <input
                    disabled={!eatValue}
                    value={price}
                    placeholder="Цена"
                    onChange={(e) => setPrice(e.target.value)}
                    type="text"
                  />
                </div>

                <div className="imageEdit">
                  <label>Изображение</label>
                  <input
                    disabled={!eatValue}
                    value={imgs}
                    onChange={(e) => setImgs(e.target.value)}
                    placeholder="Ссылка"
                    type="text"
                  />
                </div>
              </div>

              <textarea
                disabled={!eatValue}
                value={text}
                placeholder="Описание"
                onChange={(e) => setText(e.target.value)}
                cols="30"
                rows="10"
              ></textarea>
            </div>

            <div className="editImg">
              <h2>Предпросмотр Изображения</h2>
              <img src={imgs} alt="" />
            </div>

            <button
              style={{ background: adddDoc ? "#c92424" : "#0d729a" }}
              className={!adddDoc ? "" : "disable"}
              onClick={editData}
            >
              Изменить
            </button>
            <button
              style={{ background: adddDoc ? "#c92424" : "#0d729a" }}
              className={adddDoc ? "" : "disable"}
              onClick={addDocument}
            >
              Добавить
            </button>
          </div>
        </div>
      </div>

      {/* 
      const [eventValue, setEventValue] = useState();
  const [eventTitle, setEventTitle] = useState();
  const [eventLink, setEventLink] = useState(); 
    const [activeEvent, setActiveEvent] = useState();
*/}

      <div
        className="deleteEventsWrap"
        onClick={() => {
          setActiveEvent(false);
        }}
      >
        <div className="deleteEvents">
          <div className="deleteEventsInputs">
            <label>Выбор мероприятия</label>
            <input
              value={eventValue}
              onClick={(e) => {
                setActiveEvent(true);
                e.stopPropagation();
              }}
              placeholder="Выбор мероприятия"
              type="text"
            />
            <div className={activeEvent ? "selectus2" : "disable"}>
              <p
                onClick={() => {
                  setEventValue("Event1");
                  setActiveEvent(false);
                }}
              >
                Event1
              </p>
              <p
                onClick={() => {
                  setEventValue("Event2");
                  setActiveEvent(false);
                }}
              >
                Event2
              </p>
            </div>
            <label>Описание</label>
            <input
              onChange={(e) => setEventTitle(e.target.value)}
              value={eventTitle}
              placeholder="Описание"
              type="text"
            />
            <label>Ссылка на изображение</label>
            <input
              onChange={(e) => setEventLink(e.target.value)}
              value={eventLink}
              placeholder="Ссылка на изображение"
              type="text"
            />
            <button onClick={updateEvent} disabled={!eventActive}>
              Применить
            </button>
            <button onClick={getEvent}>Загрузить</button>
          </div>

          <div className="deleteEventsImg">
            <p>Предпросмотр изображения</p>
            <img src={eventLink} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
