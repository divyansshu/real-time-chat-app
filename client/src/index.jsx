import React from 'react'
import ReactDOM from 'react-dom'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App'
import './index.css'
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import Home from "./components/Home"
import ChatPage from "./components/chatPage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/register",
        element: <LandingPage/>
    },
    {
        path: "/login",
        element: <LoginPage/>
    },
     {
        path: "/chats",
        element: <ChatPage/>
    },
])

ReactDOM.render(<RouterProvider router={router}/>, document.getElementById('root'))

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
	import.meta.hot.accept()
}
