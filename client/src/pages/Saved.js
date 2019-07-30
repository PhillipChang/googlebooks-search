import React, { Component } from 'react';
import {CardSaved} from "../components/Card";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import API from "../utils/API";


class Saved extends Component {
    state = {
        savedBooks: [],
        title: "",
        author: "",
        synopsis: ""
      };

// componentDidMount(){
//         API.getBooks = () => {
//             .then(res => {
//             this.setState({savedBooks: res.data})
//             })   
//         }   
//     };

loadBooks = () => {
    API.getBooks = (res) => {
        this.setState({savedBooks: res.data});
    }
}; 
    deleteBook = id => {
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
                key={book.id}
                id={book.id}
                title={book.volumeInfo.title} 
                thumbnail={book.volumeInfo.imageLinks.thumbnail}
                author={book.volumeInfo.authors}
                synopsis={book.volumeInfo.description}
                link={book.volumeInfo.infoLink}
                deleteBook={this.deleteBook}
                />
                ))}
                </Container>
            </div>
        );
    }
}

export default Saved;
