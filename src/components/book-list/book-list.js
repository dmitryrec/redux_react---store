import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import ErrorIndicator from '../error-indicator';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc'
import { fetchBooks } from '../../actions';
import { compose } from '../../utils';
import './book-list.css';

const BookList = ({books}) => {
    return (
        <ul className="bookList">
            {
                books.map((book) => {
                    return (<li key={book.id}>
                        <BookListItem book={book} />
                    </li>)
                })
            }
        </ul>
    )
};

class BookListСontainer extends Component {

    componentDidMount() {
        this.props.fetchBooks()
    }

    render() {
        const { books, loading, error } = this.props;

        if (loading) {
            return <span className="loading">loading...</span>
        };

        if (error) {
            return <ErrorIndicator />
        };

        return <BookList books={books} />
    } 
};



const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error };
};

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch)
    }
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListСontainer);

