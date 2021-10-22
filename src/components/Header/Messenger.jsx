import classes from "./Messenger.module.css";
import optionSrc from "../../assets/optionIcon.png";
import fullscreenSrc from "../../assets/fullscreen-svgrepo-com.svg";
import createZoom from "../../assets/cinema-svgrepo-com.svg";
import newPost from "../../assets/new-message-svgrepo-com.svg";
import searchIcon from '../../assets/search.png';

const Messenger = () => {
    return (
        <div className={classes.messenger}>
            <div className={classes.title}>
                <h2>Messenger</h2>
                <div className={classes.links}>
                    <a  href="index.html" tooltip="Options">
                        <img src={optionSrc} alt="Option" />
                    </a>
                    <a href="index.html" tooltip="See All in Messenger">
                        <img src={fullscreenSrc} alt="see all in messenger" />
                    </a>
                    <a href="index.html" tooltip="Create new room">
                        <img src={createZoom} alt="create new room" />
                    </a>
                    <a href="index.html" tooltip="New message">
                        <img src={newPost} alt="new post" />
                    </a>
                </div>
            </div>

            <div className={classes.search}>
                <img src={searchIcon} alt="search" />
                <input type="text" placeholder="Search Messenger" />
            </div>

            <ul className={classes.listMsg}>
                <li className={classes["msg-item"]}>
                    <div className={classes["msg-avatar"]}>
                        <img src="https://scontent.fhan2-2.fna.fbcdn.net/v/t1.6435-1/p100x100/184366428_1269992753394705_1552638147761945553_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=wbIDB7LOhXYAX-iftJL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fhan2-2.fna&oh=0a349fe2574e5485dee7703d429d6831&oe=61954341" alt="" />
                    </div>

                    <div className={classes["msg-content"]}>
                        <div className={classes["msg-username"]}>Phan Trương Dự</div>

                        <div className={classes["msg-text"]}>
                            <span>Chào bạn, cám ơn bạn đã gửi cv...</span>
                            <span className={classes["msg-date"]}>- 4d</span>
                        </div>
                    </div>
                </li>

                <li className={classes["msg-item"]}>
                    <div className={classes["msg-avatar"]}>
                        <img src="https://scontent.fhan2-2.fna.fbcdn.net/v/t1.6435-1/p100x100/184366428_1269992753394705_1552638147761945553_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=wbIDB7LOhXYAX-iftJL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fhan2-2.fna&oh=0a349fe2574e5485dee7703d429d6831&oe=61954341" alt="" />
                    </div>

                    <div className={classes["msg-content"]}>
                        <div className={classes["msg-username"]}>Ninh HR</div>

                        <div className={classes["msg-text"]}>
                            <span>Oki bạn</span>
                            <span className={classes["msg-date"]}>- 2w</span>
                        </div>
                    </div>
                </li>

                <li className={classes["msg-item"]}>
                    <div className={classes["msg-avatar"]}>
                        <img src="https://scontent.fhan2-2.fna.fbcdn.net/v/t1.6435-1/p100x100/184366428_1269992753394705_1552638147761945553_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=wbIDB7LOhXYAX-iftJL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fhan2-2.fna&oh=0a349fe2574e5485dee7703d429d6831&oe=61954341" alt="" />
                    </div>

                    <div className={classes["msg-content"]}>
                        <div className={classes["msg-username"]}>Đinh Ngọc Lan</div>

                        <div className={classes["msg-text"]}>
                            <span>You are now connected on Messe...</span>
                            <span className={classes["msg-date"]}>- 6w</span>
                        </div>
                    </div>
                </li>

                <li className={classes["msg-item"]}>
                    <div className={classes["msg-avatar"]}>
                        <img src="https://scontent.fhan2-2.fna.fbcdn.net/v/t1.6435-1/p100x100/184366428_1269992753394705_1552638147761945553_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=wbIDB7LOhXYAX-iftJL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fhan2-2.fna&oh=0a349fe2574e5485dee7703d429d6831&oe=61954341" alt="" />
                    </div>

                    <div className={classes["msg-content"]}>
                        <div className={classes["msg-username"]}>Uy Dũng</div>

                        <div className={classes["msg-text"]}>
                            <span>You: Thế này nhé...</span>
                            <span className={classes["msg-date"]}>- 12w</span>
                        </div>
                    </div>
                </li>
            </ul>

            <a href="index.html">See All in Messenger</a>
        </div>
    );
};

export default Messenger;
