import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {hiddenChat} from "../redux/action";

library.add(faPlus);

function Header() {
  /** Данные о количестве чатов и аватарки пользователя **/
  const items = useSelector(state => state.items);

  /** Состояние загрузки данных пользователя **/
  const loading = useSelector(state => state.loading);

  /** Хук редакса **/
  const dispatch = useDispatch();

  /** Состояние видимости окна чата **/
  const openChat = useSelector(state => state.openChat);

  /** Данные собеседника **/
  const chats = useSelector(state => state.chats);

  /** Состояние загрузки чата **/
  const chatLoading = useSelector(state => state.chatLoading);

  /** Смена классов иконки кнопки выхода относительно состояния видимости чата **/
  const switchClassIcon = () => {
    if (openChat === true) {
      return 'icon_translate click'
    }
    return 'icon click'
  }

  /** Функция смены аватара относительно состояния видимости чата **/
  const switchAvatar = () => {
    if (openChat === true) {
      return chats.picture;
    }
    return items.picture
  }

  /** Функция выхода из чата **/
  const hideChat = () => {
    dispatch(hiddenChat());
  }

  return (
    <div className="header">
      <div className="main">
        <div className="header_info">
          {/** Смена аватара **/}
          <div className="avatar" style={{backgroundImage: "url(" + switchAvatar() + ")"}}/>
          <div className="text_block">
            <div className="text">
              {/** Вывод данных относительно состояния видимости и загрузки чата **/}
              {
                openChat ? (
                  <>
                    {chatLoading ? 'name' : chats.name}
                    <div className={chats.online ? 'online' : 'offline'}/>
                  </>
                ) : (<>Чаты ({loading ? '00' : items.friends.length}) </>)
              }
            </div>
          </div>
          {/** Смена стилей иконки выхода из чата **/}
          <div className={switchClassIcon()} onClick={hideChat}>
            <FontAwesomeIcon icon="plus"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
