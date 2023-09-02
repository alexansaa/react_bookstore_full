import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import BookItem from './BookItem';

const BookList = ({ booksProps }) => (
  <ul>
    {booksProps.map((book, index) => (
      <BookItem
        key={uuidv4()}
        id={index + 1}
        title={book.title}
        author={book.author}
        category={book.category}
      />
    ))}
  </ul>
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
