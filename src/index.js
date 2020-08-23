import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'fontsource-roboto';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reducer from "./redux/reducer";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger/src";

/**
 * Настройка логгера
 * @type {function(...[*]=)}
 */
const logger = createLogger({
  collapsed: true,
  diff: true
});

/**
 * Создание настройка стора
 * @type {*}
 */
const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
