import React, {useState} from 'react'   
function LoginForm({Login, error}){
    const[details, setDetails]=useState({name:"", email:"", password:""})

    const submitHandler = e =>{
        e.preventDefault();

        Login(details);
    }

    return(
       <form onSubmit = {submitHandler}>
        <div className='form-inner'>
            <h2>Sign in</h2>
            {(error != "") ? (<div className='error'>{error}</div>):""}
            <div className='form-group'>
                <label htmlFor='name'>Name:</label>
                <input type="text" name = "name" id = "name" placeholder='Enter your name' onChange={e=>setDetails({...details, name:e.target.value})} value={details.name}/>
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input type="email" name = "email" id = "email" placeholder='Enter your email' onChange={e=>setDetails({...details, email:e.target.value})} value={details.email}/>
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <input type="password" name = "password" id = "password" placeholder='Enter your password' onChange={e=>setDetails({...details, password:e.target.value})} value={details.passowrd}/>
            </div>
            <input type="submit" value = "Login"/>
        </div>
    
       </form>
    )
}

export default LoginForm;