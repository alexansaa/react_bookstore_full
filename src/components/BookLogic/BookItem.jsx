import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/bookSlice';

const BookItem = ({
  itemId, title, author, category,
}) => {
  const dispatch = useDispatch();
  return (
    <li>
      <div>
        <span>Item Id:</span>
        <p>{itemId}</p>
        <span>Category:</span>
        <p>{category}</p>
        <span>Title:</span>
        <p>{title}</p>
        <span>Author:</span>
        <p>{author}</p>
        <button type="button" onClick={() => dispatch(removeBook({ itemId }))}>Delete</button>
      </div>
    </li>
  );
};

BookItem.propTypes = {
  itemId: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  author: PropTypes.node.isRequired,
  category: PropTypes.node.isRequired,
};

export default BookItem;
