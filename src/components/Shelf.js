import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types';

class Shelf extends React.Component {
  render(){
    const books = this.props.books
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book, index)=>(
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

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array,
  onChangeShelf: PropTypes.func.isRequired
}

export default Shelf
