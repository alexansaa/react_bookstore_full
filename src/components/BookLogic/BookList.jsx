import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = ({ booksProps }) => (
  <ul>
    {booksProps.map((book) => (
      <BookItem
        key={book.item_id}
        itemId={book.item_id}
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
      item_id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookList;
