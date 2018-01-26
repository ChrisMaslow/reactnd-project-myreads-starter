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
    console.log('Change bookshelf!')
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
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.books.map((book) => ( book.shelf === 'wantToRead' && (
                        <li key={book.id}>
                          <div className="book">
                            <div className="book-top">
                              <div
                                className="book-cover"
                                style={{width:128, height:193, backgroundImage:`url(${book.imageLinks.smallThumbnail})`}}
                              ></div>
                              <div className="book-shelf-changer">
                                <select defaultValue={book.shelf} onChange={this.handleChange}>
                                  <option value="none" disabled>Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div>
                          </div>
                        </li>
                      )))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.books.map((book) => ( book.shelf === 'read' && (
                        <li key={book.id}>
                          <div className="book">
                            <div className="book-top">
                              <div
                                className="book-cover"
                                style={{width:128, height:193, backgroundImage:`url(${book.imageLinks.smallThumbnail})`}}
                              ></div>
                              <div className="book-shelf-changer">
                                <select defaultValue={book.shelf} onChange={this.handleChange}>
                                  <option value="none" disabled>Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div>
                          </div>
                        </li>
                      )))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link
                to="/search"
              >Add a book</Link>
            </div>
          </div>






                        <ShowMainPage
            books={this.state.books}
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
