import React, { Component } from 'react';
import {CardSaved} from "../components/Card";
import Navbar from "../components/Navbar";
import API from "../utils/API";
import {JumbotronSave} from "../components/Jumbotron";


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
      this.setState({ savedBooks: res.data })
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
                <JumbotronSave/>
                {(this.state.savedBooks.length) ?
                <ul>
                {this.state.savedBooks.map((book,i) => (
                <CardSaved 
                key={book._id}
                id={book._id}
                index={i}
                title={book.title} 
                thumbnail={book.thumbnail}
                author={book.author}
                synopsis={book.synopsis}
                link={book.link}
                deleteBook={this.deleteBook}
                />
                ))}
                </ul>
                : <h2> You have no books saved!</h2>}
            </div>
        );
    }
}

export default Saved;
