import PropTypes from 'prop-types';

const BookItem = ({ itemProp, handleDelete }) => (
  <li>
    <div>
      <span>{itemProp.bname}</span>
      <span>{itemProp.aname}</span>
      <button type="button" onClick={() => handleDelete(itemProp.id)}>Delete</button>
    </div>
  </li>
);

BookItem.propTypes = {
  itemProp: PropTypes.node.isRequired,
  handleDelete: PropTypes.node.isRequired,
};

export default BookItem;
