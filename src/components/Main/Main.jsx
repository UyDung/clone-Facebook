import { useState } from 'react';

import CreateStory from './CreateStory';
import classes from './Main.module.css';
import CreatePost from './NewPost/CreatePost';
import NewPost from './NewPost/NewPost';

const Main = () => {
    const [shownCreateForm, setShowCreateForm] = useState(false);

    const formOpenHandler = () => {
        setShowCreateForm(true);
    }

    const formCloseHandler = () => {
        setShowCreateForm(false);
    }

    return (
        <div className={classes.main}>
            <CreateStory />
            <NewPost onOpenForm={formOpenHandler} onCloseForm={formCloseHandler} />
            {shownCreateForm && <CreatePost onCloseForm={formCloseHandler}/>}
           
        </div>
    )
}

export default Main
