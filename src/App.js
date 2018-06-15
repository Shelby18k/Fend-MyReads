import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksCategory from './BooksCategory'

const categories = [
    {
      "title" : "Currently Reading",
      "id" : "currentlyReading"
    },
    {
      "title": "Want to Read",
      "id" : "wantToRead"
    },
    {
      "title":"Read",
      "id":"read"
    }
]


class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      console.log(books) //Dont Forget to remove before submitting
      this.setState({books})
    })
  }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1 tabIndex="0">My Reads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BooksCategory books={this.state.books} categories={categories}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BooksApp
