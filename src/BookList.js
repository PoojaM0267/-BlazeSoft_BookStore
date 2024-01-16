import React, {useState} from 'react';
import {useSelector } from 'react-redux';
import BookCard from './BookCard';
import AddBook from './AddBook';

const BookList = () => {

    const [showAddBookModal, setShowAddBookModal] = useState(false);

    const booksList = useSelector((store) => store.book?.books);

    console.log(booksList);


    const handleBookClick = () => {

    }

    const toggleAddBookModal = () => {
        setShowAddBookModal(!showAddBookModal)
    }


  return (
    
    <div>        
        <h1>BookList</h1>

        <div className='text-left m-4 p-2 '>
            <button className='text-sm rounded-md border border-white p-4' onClick={toggleAddBookModal}>Add New Book</button>

            { showAddBookModal && 
                <>
                    <AddBook toggleAddBook = {toggleAddBookModal}/>
                </>
            }
        </div>

        <>
        {
           
           booksList?.map(book => <BookCard key={book.id} bookData = {book}  onClick={handleBookClick} />)
        }
        </>
        
    </div>
  )
}

export default BookList