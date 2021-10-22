import CreateStory from './CreateStory';
import classes from './Main.module.css';
import CreatePost from './NewPost/CreatePost';
import NewPost from './NewPost/NewPost';

const Main = () => {
    return (
        <div className={classes.main}>
            <CreateStory />
            <NewPost />

            <CreatePost />
        </div>
    )
}

export default Main
