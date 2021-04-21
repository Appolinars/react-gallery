import React from "react";
import styles from "./Modal.module.scss";

const Modal = (props) => {

    return (

        <div
            className={props.active ? `${styles.modal} ${styles.active}` : styles.modal}
            onClick={props.toggleModal}
        >
            <div
                className={props.active ? `${styles.modal__content} ${styles.active}` : styles.modal__content}
                onClick={(e) => e.stopPropagation()}
            >
                {props.children }
                {props.isLoaded ? <button onClick={props.toggleModal} className={styles.modal__btn}>+</button> : null}
            </div>
        </div>
    );
};

export default Modal;
