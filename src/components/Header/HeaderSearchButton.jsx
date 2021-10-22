import searchSrc from "../../assets/search.png";

import classes from './HeaderSearchButton.module.css';

const HeaderSearchButton = () => {
    return (
        <div className={classes.search}>
            <img src={searchSrc} alt="Search form" />
            <input type="text" />
        </div>
    );
};

export default HeaderSearchButton;
