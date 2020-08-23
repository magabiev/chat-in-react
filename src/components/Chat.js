import React, {useEffect, useRef} from 'react';
import {useSelector} from "react-redux";
import Form from "./Form";

function Chat() {
  /** Получение узла окна чата с помошью хука **/
  const chatWindow = useRef(null);

  /** Состояние загрузки чата **/
  const chatLoading = useSelector(state => state.chatLoading);

  /** Массив с сообщениями **/
  const messages = useSelector(state => state.messages);

  /** Состояние загрузки отправленного сообщения **/
  const adding = useSelector(state => state.adding);

  /** Скролл до конца окна чатов **/
  const scroll = () => {
    chatWindow.current.scrollTop = chatWindow.current.scrollHeight;
  }

  /** Смена классов относительно стороны сообщения **/
  const switchClass = (side) => {
    if (side === 'left') {
      return 'message_block'
    } else if (side === 'right') {
      return 'my_message_block'
    }
  }

  /** Вызов функции скролла при загрузке компонента **/
  useEffect(() => {
    adding === false && scroll();
  })

  return (
    <div className="chat_main" ref={chatWindow}>
      {
        chatLoading ? <div className="loader"/> : messages.length === 0 ? (
          <div className="message_block">
            Нет сообщений
          </div>
        ) : (
          messages.map(item => {
            return (
              <div key={item.message_id} className={switchClass(item.side)}>
                {item.text}
                <span className="date_mess">{item.timestamp}</span>
              </div>
            )
          })
        )
      }
      <Form/>
    </div>
  );
}

export default Chat;
