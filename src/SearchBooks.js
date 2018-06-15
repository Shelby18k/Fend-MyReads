import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component{
	state = {
		query: '',
		books: []
	}

	updateQuery = (query) =>{
		this.setState({query})
		if(query){
			BooksAPI.search(query).then((books)=>{
				if (books instanceof Array){
					this.setState({books})
				}else{
					this.setState(books:[])
				}
				console.log(this.state.books)
			})
		}
	}

	filterMainPageBooks=(b)=>{
		let arr = this.props.booksApp
		for(let i of arr){
			if(i.id === b.id){
				b.shelf = i.shelf
				this.setState((state)=>{
					books: state.books.filter(b => b.id !== i.id).concat([i])
				})
			}
		}
	}

	render(){
		return (
			<div>	
				<div className="search-books-bar">
					<Link className="close-search" to="/">Close</Link>
					<form>
						<div className="search-books-input-wrapper">
						<input type="text" placeholder="Search books by title or author" value={this.state.query} onChange={(e)=> this.updateQuery(e.target.value)} />
						</div>
					</form>
				</div>
				{(this.state.books.length === 0 && this.state.query.length !==0) && (
					<div className="search-results">
					{`No book found`}
					</div>
				)}
				{this.state.books.length!==0 && (
                <div className="search-books-results">
                    <div className="search-books">
                        <ol className="books-grid">
                            {this.state.books.map((book) => (  
                                <li key={book.id}>
                                {this.filterMainPageBooks(book)}
                                    <Book
                                        onChangeCategory={this.props.onChangeCategory}
                                        book = {book}
                                    />
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
				)}
			</div>
		)
	}
}

export default SearchBooks