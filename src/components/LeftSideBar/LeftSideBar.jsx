import { Link } from "react-router-dom";
import { navLinks, shortCutItems } from "./LeftSideBarData";
import * as FaIcon from "react-icons/fa";

import { useState } from "react";

import classes from "./LeftSideBar.module.css";
import downSrc from "../../assets/down.svg";

const LeftSideBar = () => {
    const [showLink, setShowLink] = useState(false);

    const toggleLinksHandler = () => {
        setShowLink((prevState) => !prevState);
    };

    let navLinkData = showLink ? navLinks.slice(0, navLinks.length) : navLinks.slice(0, 5);

    return (
        <div className={classes.leftsidebar}>
            <div className={classes["container"]}>
                <a className={classes["user"]}>
                    <img
                        src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/213699121_105851438434297_574925381133174775_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=qLHJ3UxCoNkAX8loEiq&_nc_ht=scontent.fhan2-3.fna&oh=e640491b0711b456d6dafeca3fcc667a&oe=619461EB"
                        alt=""
                    />
                    <p className="username">Uy Dũng</p>
                </a>
                <ul className={`${classes["nav-links"]} ${showLink && classes.active}   `}>
                    {navLinkData.map((item) => {
                        return (
                            <li key={item.id}>
                                <Link to={item.path}>
                                    <img src={item.icon} alt={item.title} />
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <span onClick={toggleLinksHandler} className={classes["see-more"]}>
                    {showLink ? (
                        <div className={classes.img}>
                            <FaIcon.FaChevronUp />
                        </div>
                    ) : (
                        <div className={classes.img}>
                            <FaIcon.FaChevronDown />
                        </div>
                    )}
                    See {showLink ? "Less" : "More"}
                </span>
            </div>

            <div className={classes.container}>
                <div className={classes.title}>
                    <h3>Your Shorcuts</h3>
                    <a href="index.html">Edit</a>
                    
                </div>
                <ul className={classes["shorcut-items"]}>
                    <li>
                        <a className={classes["shorcut-item"]}>
                            <img src="" alt="   " />
                            <span>Tuyển dụng IT - Công nghệ thông tin</span>
                        </a>
                    </li>
                </ul>
                <span onClick={toggleLinksHandler} className={classes["see-more"]}>
                    {showLink ? (
                        <div className={classes.img}>
                            <FaIcon.FaChevronUp />
                        </div>
                    ) : (
                        <div className={classes.img}>
                            <FaIcon.FaChevronDown />
                        </div>
                    )}
                    See {showLink ? "Less" : "More"}
                </span>
            </div>
        </div>
    );
};

export default LeftSideBar;
