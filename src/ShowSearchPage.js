import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class ShowSearchPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      matchBooks: []
    }
  }

  //BooksAPI.search()返回错误对象则不显示任何图书。
  searchQuery = (query) => {
    BooksAPI.search( query ).then((matchBooks) => {
     this.setState({ matchBooks })
    })
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

    //没有搜索结果时返回 {"error":"empty query","items":[]}
    if ('error' in matchBooks) {
      showingBooks = []
    } else {
      showingBooks = matchBooks
    }

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
          {JSON.stringify(showingBooks)}
          <ol className="books-grid">
            { showingBooks.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{width:128, height:193,
                        backgroundImage:`url(${book.imageLinks ? book.imageLinks.smallThumbnail : ''})`
                      }}
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
