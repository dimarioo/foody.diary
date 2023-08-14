import './App.css';
import Entry from './Components/Entry';
//import Header from './Components/Header';
import {Route, Routes} from "react-router-dom"
import Static from './Components/Static';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Static />}>
        <Route index element={<HomePage /> }/>
        <Route path={'/login'} element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Route>
    </Routes>
  
  );
}

export default App;
