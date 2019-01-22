import React from 'react'
import { Route } from 'react-router-dom'
import AddBook from './AddBook'
import ListBooks from './ListBooks'
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

  render() {
    return (
      <div className="app">
        <Route exact path={"/"} render={() => (
          <ListBooks books={this.state.books}/>
        )} />
        <Route exact path={"/search"} render={() => (
          <AddBook />
        )} />
      </div>
    )
  }
}

export default BooksApp
