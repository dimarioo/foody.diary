import './App.css';
import Post from './Components/Post';
//import Header from './Components/Header';
import {Route, Routes} from "react-router-dom"
import Static from './Components/Static';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import { UserContextProvider } from './UserContext';
import CreatePost from './Pages/CreatePost';
import PostPage from './Pages/PostPage';
import EditPost from './Pages/EditPost';


function App() {
  return (
  <UserContextProvider>
    <Routes>
      <Route path='/' element={<Static />}>
        <Route index element={<HomePage /> }/>
        <Route path={'/login'} element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/create' element={<CreatePost />} />
        <Route path='/post/:id' element={<PostPage />} />
        <Route path='/edit/:id' element={<EditPost />} />
      </Route>
    </Routes>
  </UserContextProvider>
  
  );
}

export default App;
