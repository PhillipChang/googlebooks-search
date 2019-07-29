import React, { Component } from 'react';
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { SearchInput, SubBtn } from "../components/SearchInput";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";


class Search extends Component {
    state = {
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

  handleFormSubmit = (title) => {
    console.log("we got here")
    console.log()
    if (this.state.title) {
      API.getGoogleBooks(this.state.title)
        .then(res => {
          this.setState({ googleBooks: res.data.items})
            console.log("State Google Books", this.state.googleBooks)
          }
        );
    }
  };

  saveBook = (bookData) => {
        API.saveBook({
        id:this.state.id,
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis,
        thumbnail:this.state.thumbnail,
        link:this.state.link
        })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    };

    deleteBook = id => {
        API.deleteBook(id)
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
      };

render () {
    return (
        <div>
            <Navbar/>
            <Jumbotron />
            <Container>
                <h3> Book Search </h3>
                <hr/>
                <SearchInput
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Title (required)"
                    /> <br/>
                    <SubBtn
                      onClick={this.handleFormSubmit}
                    /><br/>
                    <p/>
                </Container>
            <Container>
                {this.state.googleBooks.map(book => (
                    <Card
                    key={book.id}
                    id={book.id}
                    title={book.volumeInfo.title}
                    thumbnail={book.volumeInfo.imageLinks.thumbnail} 
                    author={book.volumeInfo.authors}
                    synopsis={book.volumeInfo.description}
                    link={book.volumeInfo.infoLink}
                    deleteBook={this.deleteBook}
                    saveBook={this.saveBook}
                    />
                ))}
                </Container>
            </div> 
    );
}
}

export default Search;