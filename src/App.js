import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Logout from './components/Logout/Logout';
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
