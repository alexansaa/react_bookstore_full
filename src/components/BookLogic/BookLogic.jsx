import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import BookList from './BookList.jsx';
import BookForm from './BookForm';

const BookLogic = () => {
  const [books, setBooks] = useState([
    {
      id: uuidv4(),
      bname: 'book1',
      aname: 'auth1',
    },
    {
      id: uuidv4(),
      bname: 'book2',
      aname: 'auth2',
    },
  ]);

  const handleAdd = (bookName, authorName) => {
    const newBook = {
      id: uuidv4(),
      bname: bookName,
      aname: authorName,
    };
    setBooks([...books, newBook]);
  };

  const handleDelete = (id) => {
    setBooks([
      ...books.filter((book) => {
        return book.id !== id;
      }),
    ]);
  };

  return (
    <div>
      <BookForm handleAdd={handleAdd}/>
      <BookList
        booksProps={books}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default BookLogic;