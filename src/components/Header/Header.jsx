import { useEffect, useReducer, useRef } from "react";

import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";
import logoSrc from "../../assets/logo192.png";

import HomeIcon from "../UI/HomeIcon";
import FriendsIcon from "../UI/FriendsIcon";
import WatchIcon from "../UI/WatchIcon";
import MarketIcon from "../UI/MarketIcon";
import GroupsIcon from "../UI/GroupsIcon";
import MenuIcon from "../UI/MenuIcon";
import MessageIcon from "../UI/MessageIcon";
import NotificationIcon from "../UI/NotificationIcon";
import AccountIcon from "../UI/AccountIcon";
import HeaderSearchButton from "./HeaderSearchButton";

import Menu from "./Menu";
import Messenger from "./Messenger";
import Notification from "./Notification";
import Account from "./Account";

const initialDropDown = {
    modal: false,
    menu: false,
    messenger: false,
    notification: false,
    account: false,
};

const dropDownReducer = (state, action) => {
    switch (action.type) {
        case "MENU":
            return { ...initialDropDown, menu: !state.menu, modal: true };

        case "MSG":
            return { ...initialDropDown, messenger: !state.messenger, modal: true };

        case "NOTI":
            return { ...initialDropDown, notification: !state.notification, modal: true };

        case "ACC":
            return { ...initialDropDown, account: !state.account, modal: true };

        default:
            return initialDropDown;
    }
};

function useOutsideAlerter(ref) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                console.log("click out side");
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

const Header = (props) => {
    const [dropdownState, dispatchDropdown] = useReducer(dropDownReducer, initialDropDown);
    const { modal, menu, messenger, notification, account } = dropdownState;

    // Click outside to close dropdown menu => chưa thành công
    const menuRef = useRef();
    useOutsideAlerter(menuRef);

    const menuToggleHandler = () => {
        dispatchDropdown({ type: "MENU" });
    };
    const messengerToggleHandler = () => {
        dispatchDropdown({ type: "MSG" });
    };
    const notificationToggleHandler = () => {
        dispatchDropdown({ type: "NOTI" });
    };
    const accountToggleHandler = () => {
        dispatchDropdown({ type: "ACC" });
    };

    const closedAllHandler = () => {
        dispatchDropdown({ type: "STOP" });
    };

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <div className={classes["header-left"]}>
                    <NavLink to="/">
                        <div className={classes["header-logo"]}>
                            <img src={logoSrc} alt="logo" />
                        </div>
                    </NavLink>
                    <HeaderSearchButton />
                </div>

                <div className={classes["header-center"]}>
                    <div className={`${classes.active} ${classes.icon}`} tooltip="Home">
                        <HomeIcon />
                    </div>
                    <div className="friends" tooltip="Friends">
                        <FriendsIcon />
                    </div>
                    <div className="watch" tooltip="Watch">
                        <WatchIcon />
                    </div>
                    <div className="market" tooltip="Marketplace">
                        <MarketIcon />
                    </div>
                    <div className="groups" tooltip="Groups">
                        <GroupsIcon />
                    </div>
                </div>

                <div className={classes["header-right"]}>
                    <span className="username">Uy Dũng </span>
                    <div className="menu" tooltip="Menu">
                        <span onClick={menuToggleHandler}>
                            <MenuIcon />
                        </span>
                        {menu && <Menu ref={menuRef} />}
                    </div>
                    <div className="messenger" tooltip="Messenger">
                        <span onClick={messengerToggleHandler}>
                            <MessageIcon />
                        </span>
                        {messenger && <Messenger />}
                    </div>
                    <div className="notitication" tooltip="Notification">
                        <span onClick={notificationToggleHandler}>
                            <NotificationIcon />
                        </span>
                        {notification && <Notification />}
                    </div>
                    <div className="account" tooltip="Account">
                        <span onClick={accountToggleHandler}>
                            <AccountIcon />
                        </span>
                        {account && <Account />}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
