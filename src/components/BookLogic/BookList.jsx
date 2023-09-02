import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = ({ booksProps }) => (
  <ul>
    {booksProps.map((book, index) => (
      <BookItem
        key={index}
        itemId={index}
        title={book[0].title}
        author={book[0].author}
        category={book[0].category}
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
