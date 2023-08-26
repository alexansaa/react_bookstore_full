import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = ({ booksProps, handleDelete }) => (
  <ul>
    {booksProps.map((book) => (
      <BookItem
        key={book.id}
        itemProp={book}
        handleDelete={handleDelete}
      />
    ))}
  </ul>
);

BookList.propTypes = {
  booksProps: PropTypes.node.isRequired,
  handleDelete: PropTypes.node.isRequired,
};

export default BookList;
