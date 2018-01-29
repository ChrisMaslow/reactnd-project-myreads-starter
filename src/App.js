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
    //更新目标图书的shelf
    book.shelf = newShelf
    //返回不包含目标图书的对象数组
    const updateBooks = this.state.books.filter(
        b => b.id !== book.id
      )
    //将更新后的目标图书push到对象数组
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
          <ShowSearchPage
            books={this.state.books}
            changeShelf={this.bookShelfChange}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp;
