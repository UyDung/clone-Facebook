import "./App.css";
import Account from "./components/Header/Account";
import Header from "./components/Header/Header";
import Menu from "./components/Header/Menu";
import Messenger from "./components/Header/Messenger";
import Notification from "./components/Header/Notification";


import Modal from "./components/UI/Modal";
import LeftSideBar from "./components/LeftSideBar/LeftSideBar";
import RightSideBar from "./components/RightSideBar/RightSideBar";
import Main from "./components/Main/Main";


function App() {
    return (
        <>
            <Header />

            <LeftSideBar />
            <RightSideBar />
            <Main />
        </>
    );
}

export default App;
