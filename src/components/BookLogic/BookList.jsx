
import BookItem from './BookItem';
import PropTypes from 'prop-types';

const BookList = ({ booksProps, handleDelete }) => {
  return (
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
};

BookList.propTypes = {
  booksProps: PropTypes.node.isRequired,
  handleDelete: PropTypes.node.isRequired,
}

export default BookList;
