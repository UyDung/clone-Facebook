import classes from './NewPost.module.css';
import tagFriendSrc from '../../../assets/tagFriends.png';
import photoSrc from '../../../assets/photo.png';
import feelingSrc from '../../../assets/feeling.png';


const NewPost = () => {
    return (
        <div className={classes.newpost}>
            <div className={classes['form-control']}>
                <img src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/213699121_105851438434297_574925381133174775_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=qLHJ3UxCoNkAX8loEiq&_nc_ht=scontent.fhan2-3.fna&oh=e640491b0711b456d6dafeca3fcc667a&oe=619461EB" alt="" />
                <span>What's on your mind, Uy Dũng ?</span>
            </div>

            <div className={classes['form-cta']}>
                <a href="#">
                     <img src={photoSrc} alt="" />
                    <span>Photo/Video</span>
                    </a>
                <a href="#">
                    <img src={tagFriendSrc} alt="" />
                    <span>Tag Friends</span>
                </a>
                <a href="#">
                    <img src={feelingSrc} alt="" />
                    <span>Feeling/Activity</span>
                </a>
            </div>
        </div>
    )
};

export default NewPost;