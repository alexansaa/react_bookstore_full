import PropTypes from 'prop-types';

const BookItem = ({ itemProp, handleDelete }) => (
  <li>
    <div>
      <span>Title:</span>
      <p>{itemProp.bname}</p>
      <span>Author:</span>
      <p>{itemProp.aname}</p>
      <button type="button" onClick={() => handleDelete(itemProp.id)}>Delete</button>
    </div>
  </li>
);

BookItem.propTypes = {
  itemProp: PropTypes.node.isRequired,
  handleDelete: PropTypes.node.isRequired,
};

export default BookItem;
