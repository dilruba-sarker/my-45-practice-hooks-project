import React, { useState } from 'react';

const StateFullForm = () => {
    const [name,setName]=useState([])
    const [email,setEmail]=useState([])
    const[error,setError]= useState('')
    const [password,setPassword]=useState([])
    const handleNameChange=e=>{
        setName(e.target.value)
    }
    const handlePassChange=e=>{
        setPassword(e.target.value) 
        if(password.length<6){
            setError("less than 6")
        }else{
            setError('')
        }
    }
    const handleEmailChange=e=>{
        setEmail(e.target.value)
    }
    const hadleSubmit=e=>{
        e.preventDefault();
        console.log(name,email,password,error);

    }
    return (
        <div>
<form onSubmit={hadleSubmit}>
        <input onChange={handleNameChange} className=" m-2 text-black" type="text" name="name" /> <br />
        <input onChange={handleEmailChange} className="text-black" type="email" name="email" id="" /> <br />
<input onChange={handlePassChange} className=" m-2 text-black" type="password" name="" id="" />
        <input
          className=" bg-orange-500 p-1 m-1 w-20"
          type="submit"
          value="submit"
        />
        {error && <p>{error}</p>}
      </form>
        </div>
    );
};

export default StateFullForm;