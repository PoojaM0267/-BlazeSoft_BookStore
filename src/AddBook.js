import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, editBook } from './utils/bookSlice';


const AddBook = (props) => {
    const dispatch = useDispatch();

    const  [bookToEditId, setBookToEditId] =  useState(0);
    const  [bookName, setBookName] =  useState('');
    const  [bookPrice, setBookPrice] =  useState(0);
    const  [bookCategory, setBookCategory] =  useState('');
    const  [bookDescription, setBookDescription] =  useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const {toggleAddBook, isAddBook, bookToEdit} = props;    

    const booksList = useSelector((store) => store.book?.books);


    useEffect(() => {
      if(!isAddBook)
      {
        // pre populate the book with values
        setBookToEditId(bookToEdit.id);
        setBookName(bookToEdit.name);
        setBookCategory(bookToEdit.category);
        setBookDescription(bookToEdit.description);
        setBookPrice(bookToEdit.price);
      }
  }, []);

    const handleSubmit = (e) => {
      e.preventDefault();

      let book = {
        name : bookName,
        price: bookPrice,
        category: bookCategory,
        description: bookDescription
    }

      // validate form
      const message = validateForm();
      setErrorMessage(message);
      if(message) return;

      if(isAddBook)
      {
        handleAddBook(book);
      }
      else{
        handleEditBook(book);
      }

      toggleAddBook();
    }

    const handleAddBook = (book) => {

        book.id = getId();

        // dispatch add action
        dispatch(addBook(book));

       // console.log('Book Added');
    }

    const handleEditBook = (book) => {

      book.id = bookToEditId;

      dispatch(editBook(book));

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

    const validateForm = () => {

      if(bookName === "" || bookCategory === "" || bookDescription === "" || bookPrice === "")
      {
        return "All fields are mandatory.";
      }

      return null;

    }


  return (
    <div>
        
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-2/3 my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-black text-3xl font=semibold">{isAddBook ? "Add New Book" : "Edit Book"}</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={handleCloseForm}
                  >
                    <span className="text-black opacity-7 h-7 w-7 text-xl block bg-gray-400 py-0 rounded-full" title='Close'>
                      x
                    </span>
                  </button>
                </div>

                <div className="relative p-6 flex w-full">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">

                    <label className="block text-black text-sm font-bold mb-1 pt-2"> Name </label>
                    <input type='text' className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm" 
                    placeholder='Book Name'
                    value={bookName} onChange={(e) => { setBookName(e.target.value) }} 
                    />

                    <label className="block text-black text-sm font-bold mb-1 pt-2"> Category </label>
                    <input type='text' className="shadow appearance-none border rounded w-full py-2 px-1 text-black  text-sm"
                    placeholder='Book Category'
                    value={bookCategory}  onChange={(e) => {setBookCategory(e.target.value )}}
                    />

                    <label className="block text-black text-sm font-bold mb-1 pt-2"> Price  ($)</label>
                    <input  type='number' min={0} className="shadow appearance-none border rounded w-full py-2 px-1 text-black  text-sm"
                    placeholder='Book Price'
                    value={bookPrice} onChange={(e) => {setBookPrice(e.target.value)}} />

                    <label className="block text-black text-sm font-bold mb-1 pt-2"> Description </label>
                    <input type='text' className="shadow appearance-none border rounded w-full py-2 px-1 text-black  text-sm"
                    placeholder='Book Description'
                     value={bookDescription} onChange={(e) => setBookDescription(e.target.value)}
                     />
                  </form>
                </div>

                <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <div>
                    <p className='text-red-700 p-2 text-sm'>{errorMessage}</p>
                  </div>
               
                  <div className='flex flex-row justify-between '>
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
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        
    </div>
  )
}

export default AddBook;