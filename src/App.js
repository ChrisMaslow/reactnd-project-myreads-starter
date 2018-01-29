import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ShowMainPage from './ShowMainPage'
import ShowSearchPage from './ShowSearchPage'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {

  state = {
    books: [],
    matchBooks: [],
    query: ''
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeShelf = (book, newShelf) => {
    //更新目标图书的shelf
    book.shelf = newShelf
    //返回不包含目标图书的实例
    const updateBooks = this.state.books.filter(
        b => b.id !== book.id
      )
    //将更新后的目标图书push到对象数组
    updateBooks.push(book)

    this.setState({books: updateBooks})

    BooksAPI.update({id: book.id}, newShelf)
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    if (this.state.query) {
      BooksAPI.search(this.state.query).then((matchBooks) => {
        this.setState({ matchBooks })
      })
    } else {
      this.setState({ matchBooks: [] })
    }
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ShowMainPage
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
        )}/>
        <Route path="/search" render={({ history }) => (
          <ShowSearchPage
            books={this.state.books}
            matchBooks={this.state.matchBooks}
            query={this.state.query}
            changeShelf={this.changeShelf}
            updateQuery={this.updateQuery}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp;
