import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead'
import Read from './Read'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      console.log(books) //Dont Forget to remove before submitting
      this.setState({books:books})
    })
  }

  filterCurrentlyReadingBooks = () => {
    let currentlyReadingBooks = this.state.books.filter((book) =>{
      return book.shelf === "currentlyReading"
    })
    return currentlyReadingBooks
  }

  filterWantToReadBooks = () => {
    let wantToReadBooks = this.state.books.filter((book) =>{
      return book.shelf === "wantToRead"
    })
    return wantToReadBooks
  }

  filterReadBooks = () => {
    let readBooks = this.state.books.filter((book) =>{
      return book.shelf === "read"
    })
    return readBooks
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
              <WantToRead wantToRead= {this.filterWantToReadBooks}/>
              <Read read={this.filterReadBooks}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BooksApp
