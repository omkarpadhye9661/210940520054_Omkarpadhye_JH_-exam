//import logo from './logo.svg';
import "./App.css";

import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  return (
    <div>
      <div>
        <MyComponenet />
      </div>
    </div>
  );
}

function MyComponenet() {
  const parent = "container-fluid";
  const header = "row bg-secondary text-light";
  const chatBox = "row mt-2";
  const chatList1 = "mt-2 alert alert-secondary border-secondary";
  const chatList2 = "text-end alert alert-secondary border-secondary";

  const name = useState("omkar padhye");
  const id = useState("210940520054");

  const [chat, setChat] = useState([""]);
  const [chatList, setChatList] = useState([""]);

  const typeChat = (e) => {
    setChat(e.target.value);
  };

  const postChat = () => {
    if (chat !== "") {
      const newChat = [chat, ...chatList];
      setChatList(newChat);
      setChat("");
    }
  };

  return (
    <div>
      <div className={parent}>
        <div className={header}>
          <div>
            <h1>MyChatApp</h1>
            <h6>
              By{name}
              {id}
            </h6>
          </div>
        </div>
        <input
          className="w-75 p-2 mt-2"
          style={{ "border-radius": "10px" }}
          type="text"
          placeholder="Lets Chat Here.."
          value={chat}
          onChange={typeChat}
        />
        <input
          className=" ms-2 p-2 mt-2"
          style={{ "border-radius": "10px", width: "170px" }}
          type="button"
          value="SEND"
          onClick={postChat}
        />

        {chatList.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <div key={index} className={chatList1}>
                {item}
              </div>
            );
          } else {
            return (
              <div key={index} className={chatList2}>
                {item}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
