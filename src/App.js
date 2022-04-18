import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound';
import Login from './components/NotFound/Login/Login';
import SignUp from './components/SignUp/SignUp';
import CheckOut from './components/CheckOut/CheckOut';
function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/checkout' element={<CheckOut />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
