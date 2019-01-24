import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
import PropTypes from 'prop-types';

class  ListBooks extends React.Component {
  render(){

    let shelfs = [
      {
        name: `currentlyReading`,
        title: `Currently Reading`
      },
      {
        name: `wantToRead`,
        title: `Want to Read`
      },
      {
        name: `read`,
        title: `Read`
      },
    ]
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>My Reads</h1>
        </div>
        <div className="list-books-content">
          <div>
            { shelfs.map((shelf, index)=> (
              <Shelf
                title={shelf.title}
                key={index}
                books={this.props.books.filter((book) => book.shelf === shelf.name)}
                onChangeShelf={(id, shelf) => {
                  this.props.onChangeShelf(id, shelf)
                }}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'><button>Add a book</button></Link>
        </div>
      </div>
    )
  }
}

ListBooks.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
  title: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired,
  imageLinks: PropTypes.object.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string.isRequired),
  id: PropTypes.string.isRequired,
  })),
  onChangeShelf: PropTypes.func.isRequired
}

export default ListBooks
