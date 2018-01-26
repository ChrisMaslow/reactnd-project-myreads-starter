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
    //this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({});
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  setCurrently = (id) => {
    console.log('setCurrently')
    //this.setState((id) => ({
      //bookshelf: 'currentlyReading'

    //}))
    //BooksAPI.update(id, 'currentlyReading')
  }

  setWantTo = (book) => {
    this.setState(
      book.shelf: 'wantToRead'
    )
    BooksAPI.update(book.id, 'wantToRead')
  }

  setRead = (book) => {
    this.setState((book) => ({
      bookshelf: 'read'
    }))
    BooksAPI.update(book.id, 'read')
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ShowMainPage
            books={this.state.books}
            onCurrently={this.setCurrently}
            onWantTo={this.setWantTo}
            onRead={this.setRead}
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
