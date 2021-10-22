import classes from "./CreatePost.module.css";

import photoSrc from "../../../assets/photo.png";
import tagFriendSrc from "../../../assets/tagFriends.png";
import feellingSrc from "../../../assets/feeling.png";
import locationSrc from "../../../assets/location.png";
import threedotsSrc from "../../../assets/three-dots.svg";
import Modal from "../../UI/Modal";

const CreatePost = (props) => {
    

    return (
        <Modal onClick={props.onCloseForm}>
            <form  className={classes["create-post"]}>
                <div className={classes["title"]}>
                    <h3>Create post</h3>
                    <button type="button" onClick={props.onCloseForm} aria-label="Close">X</button>
                </div>

                <div className={classes["user-info"]}>
                    <div className="avatar">
                        <a href="index.html">
                            <img
                                src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/213699121_105851438434297_574925381133174775_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=qLHJ3UxCoNkAX8loEiq&_nc_ht=scontent.fhan2-3.fna&oh=e640491b0711b456d6dafeca3fcc667a&oe=619461EB"
                                alt="avatar"
                                className="avatar"
                            />
                        </a>
                    </div>
                    <div className={classes.content}>
                        <p className="username">Uy Dũng</p>
                        <select name="privacy" id="privacy">
                            <option value="Friends">Friends</option>
                            <option value="Friends">Public</option>
                            <option value="Friends">Only Me</option>
                        </select>
                    </div>
                </div>

                <div className={classes["form-control"]}>
                    <textarea
                        className={classes.input}                        
                        placeholder="What's on your mind, Uy Dũng?"
                    />
                    <button>Emoji</button>
                </div>

                <div className={classes.hold}></div>

                <div className={classes["form-cta"]}>
                    <span>Add to your post</span>
                    <div className={classes["form-cta-item"]}>
                        <img src={photoSrc} alt="" />
                        <img src={tagFriendSrc} alt="" />
                        <img src={feellingSrc} alt="" />
                        <img src={locationSrc} alt="" />
                        <img src={threedotsSrc} alt="" />
                    </div>
                </div>

                <button>Post</button>
                <span className={classes.error}>
                    This post appears to be blank. Please write something or attach a link or photo to post.
                </span>
            </form>
        </Modal>
    );
};

export default CreatePost;
