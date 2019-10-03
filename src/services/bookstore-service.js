export default class BookstoreService {
    getBooks() {
        return [
            {
                id: 1,
                title: 'book 1',
                author: 'author 1',
                price: '100$',
                bookImg: 'https://cdn1.iconfinder.com/data/icons/hawcons/32/699301-icon-31-book-bookmark-128.png',
            },
            {
                id: 2,
                title: 'book 2',
                author: 'author 2',
                price: '200$',
                bookImg: 'https://cdn1.iconfinder.com/data/icons/hawcons/32/699301-icon-31-book-bookmark-128.png',
            },
        ];
    }
}