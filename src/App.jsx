import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import BookLogic from './components/BookLogic/BookLogic';
import CategoriesLogic from './components/CategoriesLogic/CategoriesLogic';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<BookLogic />} />
      <Route path="categories" element={<CategoriesLogic />} />
    </Route>
  </Routes>
);

export default App;
