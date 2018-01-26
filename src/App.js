import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ShowMainPage from './ShowMainPage'
import ShowSearchPage from './ShowSearchPage'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books:[]
    };
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeShelf = (id, newShelf) => {
    this.setState()

    BooksAPI.update({id}, newShelf)
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
          <ShowSearchPage/>
        )}/>
      </div>
    )
  }
}

export default BooksApp;
