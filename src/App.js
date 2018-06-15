import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksCategory from './BooksCategory'
import SearchBooks from './SearchBooks'
import {Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
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

  changeCategory = (book,shelf) => {
    if(this.state.books){
      BooksAPI.update(book,shelf).then(()=>{
        book.shelf = shelf;
        this.setState((state)=>({
          books: state.books.filter(b => b.id !== book.id).concat([book])
        }))
      })
    }
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
          <Route exact path="/" render = {()=>(
            <div>
            <div className="list-books-title">
            <h1 tabIndex="0">My Reads</h1>
            </div>
            <div className="list-books-content">
            <div>
              <BooksCategory books={this.state.books} categories={categories} onChangeCategory = {this.changeCategory}/>
            </div>
          </div>
          </div>
          )}/>

          <Route exact path="/search" render={()=>(
            <div> 
              <SearchBooks booksApp={this.state.books} onChangeCategory = {this.changeCategory} />
            </div>
          )}/>
        </div>

        <div className="open-search">
          <Link to="/search" className="search">Add a Book</Link>
        </div>
      </div>
    )
  }
}

export default BooksApp
