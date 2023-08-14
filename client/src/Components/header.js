import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
        <a href='' className='logo'>foody.diary</a>
        <nav>
          <Link to='/login' className='login'>Login</Link>
          <Link to='/signup' className='signup'>Sign Up</Link>
        </nav>
     </header>
    )
}