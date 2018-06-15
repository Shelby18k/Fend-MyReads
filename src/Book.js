import React, {Component} from 'react'

class Book extends Component{
	render(){
		const {book} = this.props

		return (

			<div>
	            <div className="book">
	                <div className="book-top">
	                <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
	                <div className="book-shelf-changer">
	                    <select tabIndex="0" ref={book.shelf} aria-label="Choose category for book" className="select-shelf" value={book.shelf}>       
	                        <option value="test">Move to...</option>
	                        <option value="currentlyReading">Currently Reading</option>
	                        <option value="wantToRead">Want to Read</option>
	                        <option value="read">Read</option>
	                        <option value="none">None</option>
	                    </select>
	                </div>
	            </div>
	          	{book.title && <div className="book-title" tabIndex="0">{book.title}</div>}
	          	{book.authors && <div className="book-authors" tabIndex="0">{book.authors}</div>}
          </div>
          </div>
		)
	}
}

export default Book