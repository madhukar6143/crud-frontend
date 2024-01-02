import AddUser from './component/AddUser';
import './App.css';
import UserList from './component/UserList';
import Login from './component/Login';
import Signup from './component/signup';
import {Route,Routes,Link} from 'react-router-dom'
import Navigation from './component/Navigation';
import Home from './component/Home';


export const URL = "https://mindfulproject.onrender.com"
//export const URL = "http://localhost:4000"

function App() {

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/home' exact element={<Home />} />
        <Route path='/login'  element={<Login/>}/>
        <Route path='/addItem' element={<AddUser/>}/>
        <Route path='/users' element={<UserList/>}/>
        <Route path="*" element={<Signup />} />
      </Routes>
    </div>
  );
}

  

export default App;



