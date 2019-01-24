import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

class  ListBooks extends React.Component {
  render(){

    //let currentlyReadingBooks = this.props.books.filter((book) => book.shelf === 'currentlyReading');
    //let wantToReadBooks = this.props.books.filter((book) => book.shelf === 'wantToRead');
    //let readBooks = this.props.books.filter((book) => book.shelf === 'read');
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

export default ListBooks
