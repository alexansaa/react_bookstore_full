import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/bookSlice';

const BookForm = () => {
  const dispatch = useDispatch();

  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

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
    console.log(`${author} ${title} ${category}`);
    dispatch(addBook({
      title,
      author,
      category,
    }));
  };

  return (
    <form>
      <h1>
        Book Creation Form
      </h1>
      <label htmlFor="bname">
        Book name:
        <input name="bname" type="text" value={title} onChange={handleInputChange} />
      </label>
      <label htmlFor="aname">
        Author name:
        <input name="aname" type="text" value={author} onChange={handleInputChange} />
      </label>
      <label htmlFor="cname">
        Category name:
        <input name="cname" type="text" value={category} onChange={handleInputChange} />
      </label>
      <button type="submit" onClick={doSubmit}>Submit</button>
    </form>
  );
};

export default BookForm;
