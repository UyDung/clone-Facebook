import classes from "./Account.module.css";
import settingSrc from "../../assets/setting.svg";
import logoutSrc from "../../assets/logout.svg";
import helpSrc from "../../assets/help.svg";
import greaterSrc from "../../assets/greater.svg";

const Account = () => {
    return (
        <div className={classes.account}>
            <div className={classes.row}>
                <div className={classes.avatar}>
                    <img
                        src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-1/c8.0.100.100a/p100x100/213699121_105851438434297_574925381133174775_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=qLHJ3UxCoNkAX8loEiq&_nc_ht=scontent.fhan2-3.fna&oh=a0c1cf07bccfe99899396e634780478a&oe=619612CF"
                        alt=""
                    />
                </div>

                <div className={classes.info}>
                    <h3>Dustin Nguyen</h3>
                    <a href="index.html">See your profile</a>
                </div>
            </div>

            <div className={classes.row}>
                <img src={helpSrc} alt="" />
                <div className="text">
                    <strong>Give feedback</strong>
                    <p>Help us improve the new Facebook</p>
                </div>
            </div>

            <div className={classes.row}>
                <img src={settingSrc} alt="" />
                <div className="text">
                    <strong>Setting & Privary</strong>
                </div>
                <span className={classes["more"]}>
                    <img src={greaterSrc} alt="" />
                </span>
            </div>
            <div className={classes.row}>
                <img src={helpSrc} alt="" />
                <div className="text">
                    <strong>Help & Support</strong>
                </div>
                <span className={classes["more"]}>
                    
                    <img src={greaterSrc} alt="" />
                </span>
            </div>
            <div className={classes.row}>
                <img src={logoutSrc} alt="" />
                <div className="text">
                    <strong>Display & Accessibility</strong>
                </div>
                <span className={classes["more"]}>
                    <img src={greaterSrc} alt="" />
                </span>
            </div>
            <div className={classes.row}>
                <img src={logoutSrc} alt="" />
                <div className="text">
                    <strong>Log Out</strong>
                </div>
            </div>

            <div className={classes["summary"]}>
                <a href="index.html">Privacy</a> -
                <a href="index.html">Terms</a> -
                <a href="index.html"> Advertising</a> - 
                <a href="index.html"> Ad Choices</a> -
                <a href="index.html"> Cookies</a> -
                <a href="index.html"> More </a> -
                <span>Facebook &copy; 2021</span>
            </div>
        </div>
    );
};

export default Account;
