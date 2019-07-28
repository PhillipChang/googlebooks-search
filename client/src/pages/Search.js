import React, { Component } from 'react';
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import SearchInput from "../components/SearchInput";
import API from "../components/utils/API";


class Search extends Component {
    state = {
        books: [],
        googleBooks: [],
        title: "",
        author: "",
        synopsis: ""
      };

      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
      API.getGoogleBooks(this.state.title)
        .then(res => {
          this.setState({ googleBooks: res.data.items})
            console.log("State Google Books", this.state.googleBooks)
          }
        );
    }
  };

        // API.saveBook({
      //   title: this.state.title,
      //   author: this.state.author,
      //   synopsis: this.state.synopsis
      // })
      //   .then(res => this.loadBooks())
      //   .catch(err => console.log(err));


render () {
    return (
        <div>
            <Navbar/>
            </div> 
    )
}