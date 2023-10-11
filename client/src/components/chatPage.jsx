import axios from "axios"
import {useEffect} from 'react'

export default function ChatPage() {

    const fetchData = async () => {
        const data = await axios.get("http://localhost:1338/chats").then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return(
        <>
        
        </>
    );

}
