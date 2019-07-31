import React, { Component } from 'react';
import {CardSaved} from "../components/Card";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import API from "../utils/API";


class Saved extends Component {
    state = {
        savedBooks: [],
      };

componentDidMount(){
    this.loadBooks(); 
    };

  loadBooks = () => {
    API.getBooks()
      .then(res => {
        console.log("this is res", res);
      this.setState({ savedBooks: res.data })
      console.log("this is saved", this.state.savedBooks)
      })
      .catch(err => console.log(err));
}; 


    deleteBook = (id) => {
        API.deleteBook(id)
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
      };

    render() {
        return (
            <div>
                <Navbar />
                <Container>
                {this.state.savedBooks.map(book => (
                <CardSaved 
                key={book._id}
                id={book._id}
                title={book.title} 
                thumbnail={book.thumbnail}
                author={book.author}
                synopsis={book.synopsis}
                link={book.link}
                deleteBook={this.deleteBook}
                />
                ))}
                </Container>
            </div>
        );
    }
}

export default Saved;
