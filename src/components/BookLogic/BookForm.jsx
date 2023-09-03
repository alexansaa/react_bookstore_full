import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postNewBook } from '../../redux/books/bookSlice';

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
    <form>
      <h1>
        Book Creation Form
      </h1>
      <label htmlFor="bname">
        Book name:
        <input name="bname" type="text" value={myTitle} onChange={handleInputChange} />
      </label>
      <label htmlFor="aname">
        Author name:
        <input name="aname" type="text" value={myAuthor} onChange={handleInputChange} />
      </label>
      <label htmlFor="cname">
        Category name:
        <input name="cname" type="text" value={myCategory} onChange={handleInputChange} />
      </label>
      <button type="submit" onClick={doSubmit}>Submit</button>
    </form>
  );
};

export default BookForm;
