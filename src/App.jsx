import React from 'react'
import {useState} from 'react'
import './App.css'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {
    BrowserRouter,
    Route,
    Router,
    Routes,
    Link
} from "react-router-dom";


function App(props) {
        return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <Navbar/>
                <div className="App-wrapper-content">
                    <Routes>
                        <Route path="/dialogs/*" element={<Dialogs
                            localState={props.state.dialogsPage}
                            updateNewMessageText={props.updateNewMessageText}
                            createMessage={props.createMessage} />}/>
                        <Route path="/profile" element={<Profile
                            profilePage={props.state.profilePage}
                            updateNewPostText={props.updateNewPostText}
                            addPost={props.addPost}/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        </Routes>
                </div>
            </div>
            </BrowserRouter>
    )
}

export default App
