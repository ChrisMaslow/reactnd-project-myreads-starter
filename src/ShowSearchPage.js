import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'


class ShowSearchPage extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    matchBooks:[]
  }

  searchTerms = [
    'Android', 'Art', 'Artificial Intelligence', 'Astronomy',
    'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography',
    'Brief', 'Business', 'Camus', 'Cervantes', 'Christie',
    'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling',
    'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama',
    'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy',
    'Film', 'Finance', 'First', 'Fitness', 'Football',
    'Future', 'Games', 'Gandhi', 'Homer', 'Horror',
    'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King',
    'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make',
    'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate',
    'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production',
    'Programming', 'React', 'Redux', 'River', 'Robotics',
    'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh',
    'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy',
    'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
  ]

  searchQuery = (query) => {
    let matchTerms = this.searchTerms.some(
      (element, index, array) => { return element.includes(this.state.query) }
    )
    if (matchTerms && query) {
      BooksAPI.search(query).then((matchBooks) => {
        this.setState({ matchBooks })
      })
    } else {
      this.setState({ matchBooks: [] })
    }

  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    this.searchQuery( this.state.query )
  }

  render() {
    const { changeShelf } = this.props
    const { matchBooks } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
          >Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"

              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {JSON.stringify(this.state.matchBooks.length)}
          <ol className="books-grid">
            {matchBooks.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{width:128, height:193, backgroundImage:`url(${book.imageLinks.smallThumbnail})`}}
                    ></div>
                    <div className="book-shelf-changer">
                      <select defaultValue={book.shelf} onChange={(event) => changeShelf(book, event.target.value)}>
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
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default ShowSearchPage
