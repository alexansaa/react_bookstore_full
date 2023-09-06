import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';
import BookItem from './BookItem';
// import style from '../../styles/BookList.module.css';

const BookList = ({ booksProps }) => (
  <>
    {booksProps.map((book) => (
      <BookItem
        key={book.id}
        id={book.id}
        title={book.title}
        author={book.author}
        category={book.category}
      />
    ))}
  </>
);

BookList.propTypes = {
  booksProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookList;
