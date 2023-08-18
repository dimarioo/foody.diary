import {formatISO9075} from 'date-fns'
import { Link } from 'react-router-dom'

export default function Post({_id, title, summary , cover, content, createdAt, author}){
    return(
    <main>
      <div className='entry'>
        <div className='image'>
          <Link to={`/post/${_id}`}>
          <img src={'http://localhost:3001/' + cover} alt=''/>
          </Link>
          
        </div>
        <div className='info'>
           <Link to={`/post/${_id}`}>
           <h2>{title}</h2>
           </Link>
        
        <p className='userinfo'>
          <a className='author'>{author.username}</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className='summary'>{summary}</p>
        </div>
      </div>

    </main>
    )
}     

