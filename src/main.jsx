import React from 'react'
import './index.css'
import state, {createMessage, subscribe, updateNewMessageText} from "./redux/state";
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {addPost, updateNewPostText} from "./redux/state"



export function renderEntireTree() {

    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} createMessage={createMessage} updateNewMessageText={updateNewMessageText}/>
        </React.StrictMode>,
        document.getElementById('root')
    )
}

renderEntireTree(state);

subscribe(renderEntireTree);