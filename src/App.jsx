import { Routes, Route } from "react-router-dom";

import Home from './routes/Home';
import Layout from './components/Layout';
import BookLogic from './components/BookLogic/BookLogic';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="categories" element={<BookLogic />}/>
      </Route>
    </Routes>
  )
}

export default App
