import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookList from './BookList';
import BookForm from './BookForm';
import { getResultItems } from '../../redux/books/bookSlice';
import style from '../../styles/BookLogic.module.css';

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
    <div className={style.white}>
      <ul className={style.itemsCnt}>
        <BookList booksProps={books} />
      </ul>
      <hr className={style.separator} />
      <div className={style.bookForm}>
        <BookForm />
      </div>
    </div>
  );
};

export default BookLogic;
