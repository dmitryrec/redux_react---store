import React from 'react';
import BookList from '../book-list'

const Home = () => {

    const books = [
        {
            id: 1,
            title: 'crash',
            author: 'jo'
        },
        {
            id: 2,
            title: 'crash2',
            author: 'jo2'
        },
    ];
    return (
        <BookList books={books}/>
    )
}

export default Home;