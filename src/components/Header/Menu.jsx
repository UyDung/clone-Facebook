import React, { useRef, useEffect, useState, forwardRef } from "react";
import { Link } from "react-router-dom";

import {
    socials,
    entertainments,
    shoppings,
    personals,
    professionals,
    communitys,
    mores,
    creates,
} from "./MenuData";

import Card from "../UI/Card";
import classes from "./Menu.module.css";

import * as FaIcons from "react-icons/fa";
import {BsHeartHalf} from "react-icons/bs";

const Menu = React.forwardRef((ref, props) => {
    const [isShown, setIsShown] = useState(true);

    return (
        <>
            {isShown && (
                <Card ref={ref}>
                    <div className={classes.menu}>
                        <div className={classes["main-menu"]}>
                            <input type="text" placeholder="Search Menu" />

                            <h4>Social</h4>
                            <ul>
                                {socials.map((item) => (
                                    <li>
                                        <Link to={item.path}>
                                            <div  className={classes.icon} >
                                                <img src={item.icon} alt={item.title} />
                                            </div>
                                            <div className="content">
                                                <p className={classes.title}> {item.title} </p>
                                                <p className={classes.description}> {item.description} </p>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <h4>Entertainment</h4>
                            <ul>
                                {entertainments.map((item) => (
                                    <li>
                                        <Link to={item.path}>
                                            <div  className={classes.icon} >
                                                <img src={item.icon} alt={item.title} />
                                            </div>
                                            <div className="content">
                                                <p className={classes.title}>{item.title}</p>
                                                <p className={classes.description}>{item.description}</p>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <h4>Shopping</h4>
                            <ul>
                                {shoppings.map((item) => (
                                    <li>
                                        <Link to={item.path}>
                                            <div  className={classes.icon} >
                                                <img src={item.icon} alt={item.title} />
                                            </div>
                                            <div className="content">
                                                <p className={classes.title}> {item.title}</p>
                                                <p className={classes.description}> {item.description}</p>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <h4>Personal</h4>
                            <ul>
                                {personals.map((item) => (
                                    <li>
                                        <Link to={item.path}>
                                            <div  className={classes.icon} >
                               
                               
                                                <img src={item.icon} alt={item.title} />
                                            </div>
                                            <div className="content">
                                                <p className={classes.title}> {item.title}</p>
                                                <p className={classes.description}> {item.description}</p>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <h4>Professional</h4>
                            <ul>
                                {professionals.map((item) => (
                                    <li>
                                        <Link to={item.path}>
                                            <div  className={classes.icon} >
                                                <img src={item.icon} alt={item.title} />
                                            </div>
                                            <div className="content">
                                                <p className={classes.title}> {item.title}</p>
                                                <p className={classes.description}> {item.description}</p>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <h4>Commnunity Resources</h4>
                            <ul>
                                {communitys.map((item) => (
                                    <li>
                                        <Link to={item.path}>
                                            <div  className={classes.icon} >
                                                <img src={item.icon} alt={item.title} />
                                            </div>
                                            <div className="content">
                                                <p className={classes.title}> {item.title}</p>
                                                <p className={classes.description}> {item.description}</p>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <h4>More from Facebook</h4>
                            <ul>
                                {mores.map((item) => (
                                    <li>
                                        <Link to={item.path}>
                                            <div  className={classes.icon} >
                                                <img src={item.icon} alt={item.title} />
                                            </div>
                                            <div className="content">
                                                <p className={classes.title}> {item.title}</p>
                                                <p className={classes.description}> {item.description}</p>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={classes.sidebar}>
                            <h2>Create</h2>
                            <ul>
                                {creates.map((item) => (
                                    <li>
                                        <Link to={item.path}>
                                            <div  className={classes.icon} >
                                                <BsHeartHalf color="red" />
                                            </div>
                                            <p className={classes.title}> { item.title}</p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Card>
            )}
        </>
    );
});

export default Menu;
