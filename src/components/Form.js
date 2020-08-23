import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import {addingMessage} from "../redux/action";
import {useDispatch, useSelector} from "react-redux";

library.add(faPaperPlane);

function Form() {
  /** Хук редакса **/
  const dispatch = useDispatch();

  /** Стейт для значения поля ввода **/
  const [message, setMessage] = useState('');

  /** Обработчик для поля ввода **/
  const handleMessage = (e) => {
    setMessage(e.target.value);
  }

  /** Функция отправки сообщения **/
  const sendMessage = () => {
    dispatch(addingMessage(message));
    setMessage('');
  }
  /** Состояние отправки сообщения **/
  const adding = useSelector(state => state.adding);

  return (
    <div className="form_main">
      <div className="message_form">
        <input placeholder={adding ? 'loading...' : 'Enter your message...'} onChange={handleMessage} value={message}/>
      </div>
      <button
        /** Применение разных стилей и деактивация относительно содержимого поля ввода **/
        className={message.length === 0 ? 'btn_send_dis' : 'btn_send click'}
        disabled={message.length === 0}
        onClick={sendMessage}
      >
        <FontAwesomeIcon icon="paper-plane"/>
      </button>
    </div>
  );
}

export default Form;
