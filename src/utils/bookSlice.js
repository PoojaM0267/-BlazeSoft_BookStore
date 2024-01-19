
import {createSlice} from '@reduxjs/toolkit';
import bookList from './mockBooksData';


const bookSlice = createSlice({

    name: "book",
    initialState: {
        books : bookList
    },
    reducers: {
        addBook: (state, action) => {
            state.books = [action.payload, ...state.books]
        },
        deleteBook : (state, action) => {
            let newBooks = state.books.filter(b => b.id !== action.payload);
            state.books.length = 0;            
            state.books = [...newBooks];

        }, 
        editBook : (state, action) => {   
            let bookCopy = state.books.filter(b => b.id !== action.payload.id);
            bookCopy.push(action.payload);

            state.books.length = 0;
            state.books = [...bookCopy];
        }
    }
    
});

export const {addBook, deleteBook, editBook}  = bookSlice.actions; 

export default bookSlice.reducer;

