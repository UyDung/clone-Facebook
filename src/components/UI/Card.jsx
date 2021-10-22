import classes from './Card.module.css';

const Card = (props) => {
    return (
        <div className={classes.card}>
             <h1>Menu</h1>
              {props.children}
        </div>
    )
}

export default Card
