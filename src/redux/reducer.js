/**
 * Стейт с данными чатов и сообщенй и с состоянием их загрузки
 * @type {{openChat: boolean, chatLoading: boolean, adding: boolean, chats: [], messages: [], loading: boolean, items: []}}
 */
const initialState = {
  loading: true,
  items: [],
  chats: [],
  messages: [],
  openChat: false,
  chatLoading: true,
  adding: false,
}

/**
 * Основной редюсер с кейсами данных и их загрузки
 * @param state
 * @param action
 * @returns {{openChat: boolean, chatLoading: boolean, adding: boolean, chats: *[], messages: *[], loading: boolean, items: *}|{openChat: boolean, chatLoading: boolean, adding: boolean, chats: *[], messages: *[], loading: boolean, items: *[]}|{openChat: boolean, chatLoading: boolean, adding: boolean, chats: *, messages: *, loading: boolean, items: *[]}}
 */
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        loading: true
      }
    case 'loading_success':
      return {
        ...state,
        items: action.payload,
        loading: false
      }
    case 'loading_messages':
      return {
        ...state,
        chatLoading: true,
        openChat: true
      }
    case 'loading_mess_success':
      return {
        ...state,
        chats: action.payload,
        messages: action.payload.chatlog,
        chatLoading: false,
      }
    case 'hide_chat':
      return {
        ...state,
        openChat: false
      }
    case 'adding':
      return {
        ...state,
        adding: true,
      }
    case 'adding_success':
      return {
        ...state,
        messages: [...state.messages, action.payload],
        adding: false,
      }
    default:
      return state;
  }
}
