import React from 'react'
import Book from './Book'

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
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
