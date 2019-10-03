import React from 'react';
import './book-list-item.css';

const BookListItem = ({ book }) => {
    const { title, author, price, bookImg } = book;
    return (
        <div className="bookListItem">
            <div className="bookImg">
                <img src={bookImg}></img>
            </div>
            <div className="bookDetails">
                <a href="#">{title}</a>
                <div>{author}</div>
                <div>{price}</div>
            </div>
        </div>
    )
};

export default BookListItem;