import classes from './RightSideBar.module.css';

const RightSideBar = () => {
    return (
        <div className={classes.rightsidebar}>
            <h3>Sponsored</h3>
            <h3>Group Converstations</h3>
            <a href="test" className={classes.item}>
                <img src="" alt="" />
                <span>Create New Group</span>
            </a>
        </div>
    )
}

export default RightSideBar
