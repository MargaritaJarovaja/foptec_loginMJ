import React, {useState} from 'react';
//import './App.css';
import LoginForm from './Components/LoginForm';
import MainPage from './Pages/MainPage';

function App() {

  const adminUser = {
    email:"nord.ferro@gmail.com",
    password:"Margo123"
  }

  const [user, setUser] = useState({name:"", email:""});
  const [error, setError] = useState("");

  const Login = details =>{
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password){
    console.log("Logged in"); 
    setUser({
      name:details.name,
      email:details.email
    })   
    }
      else
     console.log("Invalid password or email!");
     setError("Invalid password or email");
    }

  const Logout = () =>{
    setUser({name:"", email:""});
  }

  return (
    <div className="App">
     {(user.email !="")?(// Vmesto div vstavit novuju stranicu//
       <div className='welcome'>
         <h2>Welcome, <span>{user.name}</span></h2>
         <button onClick={Logout}>Logout</button>
       </div>
     ):(
       <LoginForm Login = {Login} error = {error}/>
     )}
    </div>
  );
}

export default App;
