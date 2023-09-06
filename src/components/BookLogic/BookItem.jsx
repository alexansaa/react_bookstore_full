import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../redux/books/bookSlice';
import styles from '../../styles/BookItem.module.css';

const links = [
  { path: '/', text: 'Comments' },
  { path: '/', text: 'Remove' },
  { path: '/', text: 'Edit' },
];

const BookItem = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.bookElement}>
      <div>
        <div className={styles.book}>
          <h4 className={styles.fontMonserrat}>{category}</h4>
          <h3 className={styles.fontRobotoSlab}>{title}</h3>
          <p className={`${styles.fontRobotoSlab} ${styles.linkColor}`}>{author}</p>
        </div>
        <div className={styles.optionsInline}>
          {links.map((link, index) => (
            <React.Fragment key={link.text}>
              {link.text === 'Remove' ? (
                <NavLink
                  to={link.path}
                  onClick={() => dispatch(deleteBook({ id }))}
                  className={`${styles.styleLink} ${styles.linkColor} ${styles.fontRobotoSlab}`}
                >
                  {link.text}
                </NavLink>
              ) : (
                <NavLink to={link.path} className={`${styles.styleLink} ${styles.linkColor} ${styles.fontRobotoSlab}`}>{link.text}</NavLink>
              )}
              {index !== links.length - 1 && <span>  |  </span>}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className={styles.prog}>
        <div className={styles.progInfo}>
          <div className={styles.progCnt} />
          <div className={styles.progress} />
        </div>
        <div className={`${styles.progInfo} ${styles.fontMonserrat}`}>
          <h2>64%</h2>
          <span>Completed</span>
        </div>
      </div>
      <div className={styles.verticalLine} />
      <div className={styles.chaperInfo}>
        <h5>CURRENT CHAPTER</h5>
        <h6 className={styles.fontRobotoSlab}>Chapter 17</h6>
        <button type="button" className={styles.updateBtn}>UPDATE PROGRESS</button>
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
