import React from 'react';
import './book-list-item.css';

const BookListItem = ({ book, onAddedToCart }) => {
    const { title, author, price, bookImg } = book;
    return (
        <div className="bookListItem">
            <div className="bookImg">
                <img src={bookImg} alt="book"></img>
            </div>
            <div className="bookDetails">
                <a href="#">{title}</a>
                <div>{author}</div>
                <div>{price}</div>
                <div 
                    onClick={onAddedToCart}
                    className="actions__item">
                    add
                </div>
            </div>
        </div>
    )
};

export default BookListItem;