import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
    return <div  onClick={props.onClick}  className={classes.backdrop} ></div>;
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
             {props.children} 
        </div>
    );
};

const portalElement = document.getElementById("overlays");

export default function Modal(props) {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    );
}
