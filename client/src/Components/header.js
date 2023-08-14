import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
        <Link to ='/' className='logo'>foody.diary</Link>
        <nav>
          <Link to='/login' className='login'>Login</Link>
          <Link to='/signup' className='signup'>Sign Up</Link>
        </nav>
     </header>
    )
}