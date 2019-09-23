const initialState = {
    books: [
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
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            };
        default:
            return state;
    }
};

export default reducer;