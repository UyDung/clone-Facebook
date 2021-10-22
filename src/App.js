import "./App.css";
import Header from "./components/Header/Header";
 


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
