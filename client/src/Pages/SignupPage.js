import { useState } from "react"

export default function SignupPage(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    async function signup(e){
        e.preventDefault();

       const response =  await fetch('http://localhost:3001/signup', {
            method: 'POST',
            body: JSON.stringify({username,password}),
            headers: {'Content-Type':'application/json'}   
        })
        if (response.status === 200){
            alert('Registration Successful')
        }else{
            alert('Registration Failed')
        }
    }


    return(
        <form className="signup" onSubmit={signup}>
        <h1>Sign Up</h1>
        <input type="text"
             placeholder="Username"
             value={username}
             onChange={e => setUsername(e.target.value)}/>
        <input type="password" 
             placeholder="Password"
             value={password}
             onChange={e => setPassword(e.target.value)}/>
        <button>Sign Up</button>
    </form>
)       

}