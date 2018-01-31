import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class ShowSearchPage extends Component {

  state = {
    query: '',
    matchBooks: []
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

  //当query不是空字符串且匹配 Search Terms 才执行 BooksAPI.search()
  searchQuery = (query) => {
    const matchTerms = this.searchTerms.some(
      (element, index, array) => {
        return element.toLowerCase().includes(query.toLowerCase())
      }
    )
    if (matchTerms && query) {
      BooksAPI.search( query ).then((matchBooks) => {
       this.setState({ matchBooks })
      })
    } else {
      this.setState({ matchBooks: [] })
    }
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    this.searchQuery( query.trim() )
  }

  render() {
    const { books, changeShelf, backMain } = this.props
    const { query, matchBooks } = this.state

    //通过比对图书的id查找所在的shelf
    let showingBooks, i, j;

    showingBooks = matchBooks;

    for (i = 0; i < showingBooks.length; i++) {
      showingBooks[i].shelf = 'none'
      for (j = 0; j < books.length; j++) {
        if ( showingBooks[i].id === books[j].id ) {
          showingBooks[i].shelf = books[j].shelf
        }
      }
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a
            onClick={(event) => backMain(event.target.value)}
            className="close-search"
          >Close</a>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            { showingBooks.map((book) => (
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
