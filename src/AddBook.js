import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from './utils/bookSlice';


const AddBook = (props) => {
    const dispatch = useDispatch();

    const  [bookName, setBookName] =  useState('');
    const  [bookPrice, setBookPrice] =  useState('');
    const  [bookCategory, setBookCategory] =  useState('');
    const  [bookDescription, setBookDescription] =  useState('');

    const {toggleAddBook} = props;

    const booksList = useSelector((store) => store.book?.books);


    const handleAddBook = (e) => {
        // add Book
        e.preventDefault();

        let book = {
            id : getId(),
            name : bookName,
            price: bookPrice,
            category: bookCategory,
            description: bookDescription
        }

        // dispatch add action
        dispatch(addBook(book));

        console.log('Book Added');

        toggleAddBook();

    }

    const getId = () => {
       return "100" + (booksList.length +1);
    }


    const handleCloseForm = () => {       
        clearForm();
        toggleAddBook();
    }

    const clearForm = () => {
        setBookName('');
        setBookCategory('');
        setBookDescription('');
        setBookPrice('');
    }


  return (
    <div>
        
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-black text-3xl font=semibold">Add New Book</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={handleCloseForm}
                  >
                    <span className="text-black opacity-7 h-7 w-7 text-xl block bg-gray-400 py-0 rounded-full" title='Close'>
                      x
                    </span>
                  </button>
                </div>

                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">

                    <label className="block text-black text-sm font-bold mb-1"> Name </label>
                    <input type='text' className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                    value={bookName} onChange={(e) => { setBookName(e.target.value) }} 
                    />

                    <label className="block text-black text-sm font-bold mb-1"> Category </label>
                    <input type='text' className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    value={bookCategory}  onChange={(e) => {setBookCategory(e.target.value )}}
                    />

                    <label className="block text-black text-sm font-bold mb-1"> Price </label>
                    <input  type='text' className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    value={bookPrice} onChange={(e) => {setBookPrice(e.target.value)}} />

                    <label className="block text-black text-sm font-bold mb-1"> Description </label>
                    <input type='text' className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                     value={bookDescription} onChange={(e) => setBookDescription(e.target.value)}
                     />

                  </form>
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={handleCloseForm}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={handleAddBook}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>

        
    </div>
  )
}

export default AddBook;