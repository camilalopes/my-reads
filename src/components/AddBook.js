import React from 'react'
import Book from './Book'
import * as BooksAPI from './../utils/BooksAPI'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
//import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class  AddBook extends React.Component {

  state = {
    books: this.props.books,
    query: ''

  }

  updateQuery = (query) => {
    query = query.trim()
    this.setState({ query })
    this.searchBooks(query)
  }

  searchBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((books) => {
        if(books.length > 0){
          const myBooks = this.props.books
          books.map((book) => {
            const booksFound = myBooks.find(myBook => myBook.id === book.id)
            book.shelf = booksFound ? booksFound.shelf : 'none'
          })
          this.setState({ books })
        }
        else{
          this.setState({ books: [] })
        }
      })
    } else{
      this.setState({ books: this.props.books })
    }

    //books appear in alphabetical order
    this.state.books.sort(sortBy('title'))
  }

  render(){

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search' to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book, index) => (
              <Book
                imageLinks={book.imageLinks}
                title={book.title}
                author={book.authors}
                key={``.concat(book.id, index)}
                shelf={book.shelf}
                onChangeShelf={(shelf) => {
                  this.props.onChangeShelf(book.id, shelf)
                }}
              />
            ))}

          </ol>
        </div>
      </div>
    )
  }
}

AddBook.propTypes = {
  books: PropTypes.array,
  onChangeShelf: PropTypes.func.isRequired
}

export default AddBook
