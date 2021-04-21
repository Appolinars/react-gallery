import React, { Component } from "react";
import Modal from "../Modal/Modal";
import Preloader from "../Preloader/Preloader";
import styles from "./ImagesList.module.scss";

class ImagesList extends Component {
    state = {
        currentImg: "",
        showModal: false,
        isLoaded: false,
    };

    toggleModal = (img) => {
        this.setState({
            showModal: !this.state.showModal,
            currentImg: img,
            isLoaded: false,
        });
    };

    render() {
        return (
            <div>
                <ul className={styles.gallery}>
                    {this.props.images.map((img) => (
                        <li
                            className={`${styles.gallery__item} ${styles.scaleAnimation}`}
                            key={img.id}
                            onClick={() => {
                                this.toggleModal(img.largeImageURL);
                            }}
                        >
                            <img src={img.webformatURL} alt={"img"} />
                        </li>
                    ))}
                </ul>
                <Modal
                    active={this.state.showModal}
                    toggleModal={this.toggleModal}
                    isLoaded={this.state.isLoaded}
                >
                    {!this.state.isLoaded ? <Preloader /> : null}
                    <img
                        src={this.state.currentImg}
                        alt={"img"}
                        onLoad={() => this.setState({ isLoaded: true })}
                    />
                </Modal>
            </div>
        );
    }
}

export default ImagesList;
