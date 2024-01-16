import React from 'react'
import { deleteBook } from './utils/bookSlice';
import { useDispatch } from 'react-redux';


const BookCard = (props) => {

    const dispatch = useDispatch();
    const {bookData} = props;

    const { 
        id, 
        name,
        price,
        category,
        description,
      } = bookData;

      const handleDelete = (id) => {

        alert('clicked delete!')
        console.log(id);

        //dispatch delete book 
        dispatch(deleteBook(id));
      }

  return (
        <div className="border border-red-700 m-4 p-4 text-left  flex flex-row justify-between ">            
           
                <div className='cursor-pointer hover:opacity-50'>
                    <h2 className="font-bold py-2 text-lg">{name}</h2>
                    <p  className="text-sm pr-4 my-2">{category}</p>  
                    <p className="text-sm pr-4 my-2">{price}</p>
                         
                <div className="text-sm">
                    <span className="text-xs">
                    {description}
                    </span>
                </div>
             </div>        
               
              

            {bookData && <div className=''>
                <button onClick={() => handleDelete(id)} className='text-sm text-white rounded-md border border-white m-2 p-2 hover:border-yellow'>Delete</button>
            </div>}
            
          </div>
  )
}

export default BookCard;