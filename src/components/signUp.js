import react,{useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const SignUp=()=>{
 const[name,setName]=useState("");
 const[password,setPassword]=useState("");
 const[email,setEmail]=useState("");
const navigate=useNavigate();
 const collectDate= async ()=>
 {
    console.warn(name,email,password)

    let result= await fetch("http://localhost:5000/register",{
        method:'post',
        body:JSON.stringify({name,email,password}),
        headers:{
           'Content-Type':'application/json'
        },

    })

     result= await result.json()
    
   localStorage.setItem("user",JSON.stringify(result))

    // if(result)
    // {
    //    navigate('/')
    // }
 }

    return (
        <div className='register'>
            <h1>
                Register
            </h1>

            <input className='inputBox' type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'></input>
            <input className='inputBox' value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Email'></input>
            <input className='inputBox' value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter Password'></input>
            <button className='appButton' onClick={collectDate} type='button'>SignUp</button>
        </div>
    )
}

export default SignUp;