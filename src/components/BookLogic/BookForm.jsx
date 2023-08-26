import { useState } from 'react';

const BookForm = () => {
  const [state, setState] = useState({
    bname: "",
    aname: "",
  });

  const handleChange = (e) => {
    setState((state) => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  };

  return (
    <form >
      <h1>
        Book Creation Form
      </h1>
      <label>
        Book name:
        <input name="bname" type="text" value={state.bname} onChange={handleChange}/>
      </label>
      <label>
        Author name:
        <input name="aname" type="text" value={state.aname} onChange={handleChange}/>
      </label>
    </form >
  );
}

export default BookForm;