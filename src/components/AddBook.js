import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class  AddBook extends React.Component {

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  render(){
    let showingBooks
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingBooks = this.props.books.filter((book) => match.test(book.title))
    } else {
      showingBooks = this.props.books
    }

    showingBooks.sort(sortBy('title'))

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
            {showingBooks.map((book, index) => (
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
