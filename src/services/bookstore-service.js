export default class BookstoreService {
    data = [
        {
            id: 1,
            title: 'book 1',
            author: 'author 1',
            price: 100,
            bookImg: 'https://cdn0.iconfinder.com/data/icons/Android-R2-png/128/Books-Android-R.png',
        },
        {
            id: 2,
            title: 'book 2',
            author: 'author 2',
            price: 200,
            bookImg: 'https://cdn0.iconfinder.com/data/icons/Android-R2-png/128/Books-Android-R.png',
        },
    ];

    getBooks() {
        return new Promise((res, rej)=>{
            setTimeout(()=> {
                if(Math.random() > .9){
                 rej(new Error('ERRRRR'));
                }
                 res(this.data);
            }, 500)
        });
    }
}