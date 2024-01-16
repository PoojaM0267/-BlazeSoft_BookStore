
import {createSlice} from '@reduxjs/toolkit';
import bookList from './mockBooksData';


const bookSlice = createSlice({

    name: "book",
    initialState: {
        books : bookList
    },
    reducers: {
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
        deleteBook : (state, action) => {

            let newBooks = state.books.filter(b => b.id !== action.payload);
            console.log('book with id: ' + action.payload + ' deleted.');

            state.books.length = 0;

            newBooks.forEach(b => {
                state.books.push(b);
            });           

        }, 
        editBook : () => {

        }
    }
    
});



export const {addBook, deleteBook, editBook}  = bookSlice.actions; 

export default bookSlice.reducer;

