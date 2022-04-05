import React from 'react'
import './index.css'
/*import state, {createMessage, subscribe, updateNewMessageText} from "./redux/state";*/
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
/*import {addPost, updateNewPostText} from "./redux/state"*/
import store from "./redux/redux-store";
import {Provider} from "react-redux";



    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App

                    /*  before context               state={state}
                                     dispatch={store.dispatch.bind(store)}
                                     store={store}*/


                    /*updateNewPostText={store.updateNewPostText.bind(store)}*/
                    /*createMessage={store.createMessage.bind(store)}
                    updateNewMessageText={store.updateNewMessageText.bind(store)}*//>

            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    )

