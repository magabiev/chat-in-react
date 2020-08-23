import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadContacts, loadMessages} from "../redux/action";

function Contacts() {
  /** Массив с данными контактами **/
  const items = useSelector(state => state.items);

  /** Состояние загрузки данных контактов **/
  const loading = useSelector(state => state.loading);

  /** Хук редакса **/
  const dispatch = useDispatch();

  /** Загрузка данных при загрузке компонента **/
  useEffect(() => {
    dispatch(loadContacts())
  }, [dispatch]);

  return (
    <div className="contacts_block">
      {/** Вывод данных относительно состояния загрузки **/}
      {
        loading ? <div className="loader"/> : (
          items.friends.map(item => {
            return (
              <div key={item.id} className="contact click" onClick={() => dispatch(loadMessages(item.id))}>
                <div>
                  <div className="avatar m-right" style={{backgroundImage: "url(" + item.picture + ")"}}/>
                </div>
                <div className="info_mess">
                  <div className="name">{item.name}</div>
                  <div className="message">{item.lastChat}</div>
                </div>
                <div className="date">
                  {item.latest_timestamp}
                </div>
              </div>
            )
          })
        )
      }
    </div>
  );
}

export default Contacts;
