const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            };
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            };
        case 'BOOK_ADDED_TO_CART':
            const bookId = action.payload;
            const book = state.books.find((book) => book.id === bookId);
            const itemIdx = state.cartItems.findIndex(({id}) => id === bookId);
            const item = state.cartItems[itemIdx];

            let newItem;
            
            if(item){
                newItem = {
                    ...item,
                    count: item.count + 1,
                    total: item.total + book.price
                };
            } else {
                newItem = {
                    id: book.id,
                    title: book.title,
                    count: 1,
                    total: book.price
                };
            }
            if(itemIdx < 0) {
                return {
                    ...state,
                    cartItems: [
                        ...state.cartItems,
                        newItem
                    ],
                    orderTotal: state.orderTotal + book.price
                };
            }else {
                return {
                    ...state,
                    cartItems: [
                        ...state.cartItems.slice(0, itemIdx),
                        newItem,
                        ...state.cartItems.slice(itemIdx + 1)
                    ],
                    orderTotal: state.orderTotal + book.price
                }
            }
        default:
            return state;
    }
};

export default reducer;