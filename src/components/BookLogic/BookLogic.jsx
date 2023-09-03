import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookList from './BookList';
import BookForm from './BookForm';
import { getResultItems } from '../../redux/books/bookSlice';

const BookLogic = () => {
  const dispatch = useDispatch();
  const { books, isLoading, error } = useSelector((store) => store.book);

  useEffect(() => {
    dispatch(getResultItems());
  }, []);

  if (isLoading) {
    return <div>Content Is Loading..!</div>;
  }

  if (error) {
    return <div>Content Error! Something went wrong!</div>;
  }

  return (
    <div>
      <BookForm />
      <BookList booksProps={books} />
    </div>
  );
};

export default BookLogic;
