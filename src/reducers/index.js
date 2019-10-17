const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [
        {
            id:1,
            name:'fdfdf',
            count: 5,
            total: 170
        },
        {
            id:2,
            name:'ttrtr',
            count: 3,
            total: 150
        },
        {
            id:3,
            name:'eee',
            count: 7,
            total: 50
        }
    ],
    orderTotal: 444
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
        default:
            return state;
    }
};

export default reducer;