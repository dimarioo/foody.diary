import './App.css';
import Entry from './Components/entry';
import Header from './Components/header';
import {Route, Routes} from "react-router-dom"


function App() {
  return (
    <Routes>
      <Route index element ={
        <main>
          <Header/>
          <Entry />
          <Entry />
          <Entry />
        </main>
    } />
    <Route path={'/login'} element={
      <div>login</div>
    } />
     <Route path={'/signup'} element={
      <div>Sign Up</div>
    } />
    </Routes>
  
  );
}

export default App;
