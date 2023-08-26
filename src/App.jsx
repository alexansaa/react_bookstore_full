import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import Layout from './components/Layout';
import BookLogic from './components/BookLogic/BookLogic';
import CategoriesLogic from './components/CategoriesLogic/CategoriesLogic';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="books" element={<BookLogic />} />
      <Route path="categories" element={<CategoriesLogic />} />
    </Route>
  </Routes>
);

export default App;
