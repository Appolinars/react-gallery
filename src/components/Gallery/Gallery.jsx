import React, { Component } from "react";
import ImagesList from "../ImagesList/ImagesList";
import SearchForm from "../SearchForm/SearchForm";

class Gallery extends Component {
    state = {
        searchText: "",
        amount: 20,
        images: [],
        isInputFilled: null,
        isLoading: null,
    };

    setSearchText = (e) => {
        this.setState({
            searchText: e.target.value,
            isInputFilled: true,
        });
    };

    changeAmount = (e) => {
        this.setState({
            amount: e.target.value,
        });
    };

    fetchPhotos = () => {
        const apiUrl = "https://pixabay.com/api";
        const apiKey = "20337367-84f33b57b5bce019db284e4a0";
        this.setState({
            isLoading: true,
        });

        fetch(
            `${apiUrl}/?key=${apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}`
        )
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    images: data.hits,
                });
            })
            .catch((error) => console.log(error));
    };

    searchImg = (e) => {
        e.preventDefault();

        if (this.state.searchText === "") {
            this.setState({ isInputFilled: false });
            return false;
        }

        this.fetchPhotos();
    };

    render() {
        return (
            <div>
                <SearchForm
                    searchImg={this.searchImg}
                    isInputFilled={this.state.isInputFilled}
                    setSearchText={this.setSearchText}
                    changeAmount={this.changeAmount}
                />
                {this.state.images.length > 0 ? (
                    <ImagesList images={this.state.images} isLoading={this.state.isLoading} />
                ) : (
                    <p>So far, there's nothing here</p>
                )}
            </div>
        );
    }
}

export default Gallery;
