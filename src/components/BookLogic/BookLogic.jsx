import { useSelector } from 'react-redux';
import BookList from './BookList';
import BookForm from './BookForm';

const BookLogic = () => {
  const { bookItems } = useSelector((store) => store.book);

  return (
    <div>
      <BookForm />
      <BookList
        booksProps={bookItems}
      />
    </div>
  );
};

export default BookLogic;
