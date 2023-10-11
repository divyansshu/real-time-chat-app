import axios from "axios"
import {useEffect, useState} from 'react'

export default function ChatPage() {
    const [chats, setChats] = useState([]);

    useEffect(() => {
         axios.get("http://localhost:1338/chats").then((response) => {
            setChats(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return (
      <>
        <div>
          {chats.map((chat) => (
            <div key={chat.id}>{chat.name}</div>
          ))}
        </div>
      </>
    );

}
