
import {createSlice} from '@reduxjs/toolkit';
import bookList from './mockBooksData';


const bookSlice = createSlice({

    name: "book",
    initialState: {
        books : bookList
    },
    reducers: {
        addBook: (state, action) => {
            //state.books.push(action.payload); // adds to the end of the list
            //state.books.unshift(action.payload);
            state.books = [action.payload, ...state.books]
        },
        deleteBook : (state, action) => {

            let newBooks = state.books.filter(b => b.id !== action.payload);
            console.log('book with id: ' + action.payload + ' deleted.');

            state.books.length = 0;

            newBooks.forEach(b => {
                state.books.push(b);
            });           

        }, 
        editBook : (state, action) => {
            console.log('Edit book action.payload');
            console.log(action.payload);

            let bookCopy = state.books.filter(b => b.id !== action.payload.id);
            bookCopy.push(action.payload);

            state.books.length = 0;
            // bookCopy.forEach(b => {
            //     state.books.push(b);
            // });

            state.books = [...bookCopy];

        }
    }
    
});



export const {addBook, deleteBook, editBook}  = bookSlice.actions; 

export default bookSlice.reducer;

