import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postNewBook } from '../../redux/books/bookSlice';
import styles from '../../styles/BoookForm.module.css';

const BookForm = () => {
  const dispatch = useDispatch();

  const [myAuthor, setAuthor] = useState('');
  const [myTitle, setTitle] = useState('');
  const [myCategory, setCategory] = useState('');

  const handleInputChange = (e) => {
    switch (e.target.name) {
      case 'bname':
        setTitle(e.target.value);
        break;
      case 'aname':
        setAuthor(e.target.value);
        break;
      case 'cname':
        setCategory(e.target.value);
        break;
      default:
    }
  };

  const doSubmit = (e) => {
    e.preventDefault();
    dispatch(postNewBook({
      myTitle,
      myAuthor,
      myCategory,
    }));
  };

  return (
    <form className={styles.bookForm}>
      <h1>
        Add New Book
      </h1>
      <div className={styles.inputData}>
        <input name="bname" type="text" value={myTitle} onChange={handleInputChange} placeholder="Book name" className={`${styles.border} ${styles.inputPadding}`} />
        <input name="aname" id="aname" type="text" value={myAuthor} onChange={handleInputChange} placeholder="Author name" className={`${styles.border} ${styles.inputPadding}`} />
        <select name="cname" id="cDropdown" className={`${styles.border} ${styles.inputPadding}`}>
          <option value="" disabled selected>Category</option>
          <option value="Universal">Universal</option>
          <option value="Historical">Historical</option>
          <option value="Literature">Literature</option>
          <option value="Cientific">Cientific</option>
          <option value="Modern">Modern</option>
          <option value="Art">Art</option>
          <option value="Music">Music</option>
          <option value="New Age">New Age</option>
          <option value="Dark Age">Dark Age</option>
        </select>
        <button type="submit" onClick={doSubmit} className={styles.submitBtn}>Add Book</button>
      </div>
    </form>
  );
};

export default BookForm;
