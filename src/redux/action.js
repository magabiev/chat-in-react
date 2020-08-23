/**
 * Загрузка чатов
 * @returns {function(...[*]=)}
 */
export function loadContacts() {
  return (dispatch) => {
    dispatch({type: 'loading'});
    fetch('http://intocode.ru/chat.php')
      .then(response => response.json())
      .then(json => dispatch({
        type: 'loading_success',
        payload: json
      }));
  }
}

/**
 * Получение ID и загрузка чата относительно этого ID
 * @param id
 * @returns {function(...[*]=)}
 */
export function loadMessages(id) {
  return (dispatch) => {
    dispatch({type: 'loading_messages'});
    fetch(`http://intocode.ru/chat.php?action=friends&id=${id}`)
      .then(response => response.json())
      .then(json => dispatch({
        type: 'loading_mess_success',
        payload: json
      }));
  }
}

/**
 * Добавление нового сообщения
 * @param message
 * @returns {function(...[*]=)}
 */
export function addingMessage(message) {
  return (dispatch) => {
    dispatch({type: 'adding'});
    fetch('http://intocode.ru/chat.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({message: message})
    })
      .then(response => response.json())
      .then(json => dispatch({
        type: 'adding_success',
        payload: json
      }));
  }
}

/**
 * Выход из чата
 * @returns {{type: string}}
 */
export function hiddenChat() {
  return {type: 'hide_chat'}
}
