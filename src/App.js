import React from 'react'
import { Route } from 'react-router-dom'
import AddBook from './components/AddBook'
import ListBooks from './components/ListBooks'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  //get all the books from the API
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  // change the book of shelf
  changeShelf = (id,shelf) => {
    BooksAPI.update({id},shelf).then(()=>{
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path={"/"} render={() => (
          <ListBooks
            books={this.state.books}
            onChangeShelf={(id, shelf) => {
              this.changeShelf(id, shelf)
            }} />
        )} />
        <Route exact path={"/search"} render={() => (
          <AddBook
            books={this.state.books}
            onChangeShelf={(id, shelf) => {
              this.changeShelf(id, shelf)
            }}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
