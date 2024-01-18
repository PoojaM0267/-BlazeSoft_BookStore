import React, {useState} from 'react';
import {useSelector } from 'react-redux';
import BookCard from './BookCard';
import AddBook from './AddBook';

const BookList = () => {

    const [showAddBookModal, setShowAddBookModal] = useState(false);
    const [isAddBook, setIsAddBook] = useState(false);
    const [bookToEdit, setBookToEdit] = useState(null);

    const booksList = useSelector((store) => store.book?.books);

    console.log(booksList);


    const handleBookClick = (id) => {
        // open edit modal
        console.log(id);

        console.log('Edit Book');
        setIsAddBook(false);
        setShowAddBookModal(!showAddBookModal);


        // filter active or clicked book data and pas it to the modal and the flag
        let bookToEdit = booksList.filter(x => x.id == id)[0];
        console.log(bookToEdit);
        setBookToEdit(bookToEdit);

    }

    const toggleAddBookModal = () => {
        setIsAddBook(true);
        setShowAddBookModal(!showAddBookModal)
    }


  return (
    
    <div className='m-4 p-4'>        
        <h1>BookList</h1>

        <div className='text-left m-4 p-2 '>
            <button className='text-sm rounded-md border border-white p-4 hover:border-red-700' onClick={toggleAddBookModal}>Add New Book</button>

            { showAddBookModal && 
                <>
                    <AddBook toggleAddBook = {toggleAddBookModal} isAddBook={isAddBook} bookToEdit={bookToEdit}/>
                </>
            }
        </div>

        <>
        {           
           booksList?.map(book => <BookCard key={book.id} 
                                    bookData = {book}  
                                    //onClick={() => toggleAddBookModal()}
                                    onBookClick={handleBookClick} // 
                                    />)
        }
        </>
        
    </div>
  )
}

export default BookList