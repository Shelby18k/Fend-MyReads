import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import CurrentlyReading from './CurrentlyReading'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({books:books})
    })
  }

  filterCurrentlyReadingBooks = () => {
    let currentlyReadingBooks = this.state.books.filter((book) =>{
      return book.shelf === "currentlyReading"
    })
    return currentlyReadingBooks
  }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>My Reads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <CurrentlyReading readingBooks = {this.filterCurrentlyReadingBooks}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BooksApp
