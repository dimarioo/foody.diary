import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Editor from '../Components/Editor'


export default function EditPost(){
    const {id} = useParams();
    const [title, setTitle] = useState('')
    const [summary,setSummary] = useState('')
    const [content,setContent] = useState('')
    const [files , setFiles] = useState('')
    const [redirect, setRedirect] = useState(false)


    useEffect(() => {
        fetch('http://localhost:3001/post/' + id)
        .then(response => {
            response.json().then(postInfo => {
                setTitle(postInfo.title)
                setContent(postInfo.content)
                setSummary(postInfo.summary)
            })
        })
    }, [])

    function updatePost(e){
        e.preventDefault()
        const data = new FormData()
        data.set('title', title)
        data.set('summart', summary)
        data.set('content', content)
        if (files?.[0]){
            data.set('file', files?.[0])
        }
        fetch('http://localhost:3001/post', {
            method: 'PUT',
            body: data,
        })
         setRedirect(true)

    }

     if (redirect){
            return <Navigate to={'/post/'+id} />
        }

 
        
        return(
        <form onSubmit={updatePost}>
            <input type="title" placeholder={'Title'}
               value={title}
               onChange={e => setTitle(e.target.value)} />
            <input type="summary" placeholder={'Summary'} 
              value={summary} 
              onChange={e => setSummary(e.target.value)}/>
            <input type="file"
            onChange={e => setFiles(e.target.files)}/>
            <Editor onChange={setContent} value={content} />
              <button style={{marginTop:'5px'}}>Update Post</button>
         </form>
        )
    
}