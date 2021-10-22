import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClick}>

    </div>;
};

const ModalOverlay = (props) => {
    return <div className={classes.modal} onClick={props.onClick}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>;
};

const portalElement = document.getElementById('overlays');

export default function Modal (props) {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay onClick={props.onClick}>{props.children}</ModalOverlay>, portalElement)}
        </>
    )
}
