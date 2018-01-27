import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ShowMainPage from './ShowMainPage'
import ShowSearchPage from './ShowSearchPage'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    books:[]
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  bookShelfChange = (book, newShelf) => {

    book.shelf = newShelf

    let updateBooks = this.state.books.filter(
        b => b.id !== book.id
      )

    updateBooks.push(book)

    this.setState((state) => ({
      books: updateBooks
    }))

    BooksAPI.update({id: book.id}, newShelf)
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ShowMainPage
            books={this.state.books}
            changeShelf={this.bookShelfChange}
          />
        )}/>
        <Route path="/search" render={({ history }) => (
          <ShowSearchPage/>
        )}/>
      </div>
    )
  }
}

export default BooksApp;
