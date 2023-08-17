import { useEffect, useState } from "react";
import Post from "../Components/Post";

export default function HomePage(){
    const [posts, setPosts] = useState([])
    useEffect(() =>{
       fetch('http://localhost:3001/post').then(response =>{
        response.json().then(posts =>{
        setPosts(posts)
        })
       })
    },[])
    return(
    <>
       {Post.length > 0 && posts.map(post =>(
        <Post {...post} />
       ))}
    </>  
    )
}