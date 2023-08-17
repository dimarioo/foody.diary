
export default function Post({title, summary , cover, content, createdAt}){
    return(
    <main>
      <div className='entry'>
        <div className='image'>
          <img src='https://www.rudysislandgrill.com/cdn/shop/products/Screenshot_20220323-212717.jpg?v=1648096143' alt=''/>
        </div>
        <div className='info'>
        <h2>{title}</h2>
        <p className='userinfo'>
          <a className='author'>Dimario Oliver</a>
          <time>{createdAt}</time>
        </p>
        <p className='summary'>{summary}</p>
        </div>
      </div>

    </main>
    )
}     

