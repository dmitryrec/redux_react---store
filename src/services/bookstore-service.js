export default class BookstoreService {
    data = [
        {
            id: 1,
            title: 'book 1',
            author: 'author 1',
            price: '100$',
            bookImg: 'https://cdn2.iconfinder.com/data/icons/picol-vector/32/book_text-128.png',
        },
        {
            id: 2,
            title: 'book 2',
            author: 'author 2',
            price: '200$',
            bookImg: 'https://cdn2.iconfinder.com/data/icons/picol-vector/32/book_text-128.png',
        },
    ];

    getBooks() {
        return new Promise((res, rej)=>{
            setTimeout(()=> {
                if(Math.random() > .8){
                 rej(new Error('ERRRRR'));
                }
                 res(this.data);
            }, 500)
        });
    }
}