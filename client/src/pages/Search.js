import React, { Component } from 'react';
import {Card} from "../components/Card";
import Navbar from "../components/Navbar";
import { SearchInput, SubBtn } from "../components/SearchInput";
import Container from "../components/Container";
import {Jumbotron} from "../components/Jumbotron";
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

loadBooks = (booksData) => {
  this.setState({googleBooks: this.state.googleBooks.filter(book => book.volumeInfo.infoLink != booksData.link)})
  .catch(err => console.log(err));
};

  saveBook = (bookData) => {
    console.log(bookData)
    let booksData = {
      title: bookData.title,
      author: bookData.author,
      synopsis:bookData.synopsis,
      link:bookData.link,
      thumbnail:bookData.thumbnail,
    }
    console.log("booksdata", booksData);
        API.saveBook(booksData)
        .then(res => this.loadBooks(booksData))
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
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    synopsis={book.volumeInfo.description}
                    link={book.volumeInfo.infoLink}
                    thumbnail={book.volumeInfo.imageLinks.thumbnail} 
                    saveBook={this.saveBook}
                    />
                ))}
                </Container>
            </div> 
    );
}
}

export default Search;