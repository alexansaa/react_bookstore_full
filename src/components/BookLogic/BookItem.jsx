import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/bookSlice';

const BookItem = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();
  return (
    <li>
      <div>
        <span>Item Id:</span>
        <p>{id}</p>
        <span>Category:</span>
        <p>{category}</p>
        <span>Title:</span>
        <p>{title}</p>
        <span>Author:</span>
        <p>{author}</p>
        <button type="button" onClick={() => dispatch(removeBook({ id }))}>Delete</button>
      </div>
    </li>
  );
};

BookItem.defaultProps = {
  id: uuidv4(),
};

BookItem.propTypes = {
  id: PropTypes.node,
  title: PropTypes.node.isRequired,
  author: PropTypes.node.isRequired,
  category: PropTypes.node.isRequired,
};

export default BookItem;
