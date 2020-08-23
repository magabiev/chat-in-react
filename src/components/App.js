import React from 'react';
import '../App.css';
import Header from "./Header";
import Chat from "./Chat";
import {useSelector} from "react-redux";
import Contacts from "./Contacts";

function App() {
  /** Состояние видимости окна чата **/
  const openChat = useSelector(state => state.openChat);

  return (
    <div className="App">
      <div className="main_block">
        <Header/>
        {/** Вывот компонентов чата и контактов относительно состояния openChat **/}
        {openChat ? <Chat/> : <Contacts/>}
      </div>
    </div>
  );
}

export default App;
