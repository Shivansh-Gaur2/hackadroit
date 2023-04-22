import React, { useEffect, useState} from 'react'
import "./css/login.css"

function Login() {
  const [signup, setSignUp] = useState(false);
  const [name, setName] = useState((""));
  const [photoURL, setPhotoURL] = useState((""));
  const [email, setEmail] = useState((""));
  const [password, setPassword] = useState((""));
  
  const register = (e)=>{
    e.preventDefault();

    if(!name){
      return alert("Name is required!")
    }
    if(!photoURL){
      return alert("PhotoURL is required!")
    }
    if(!email){
      return alert("Email is required!")
    }
    if(!password){
      return alert("Password is required!")
    }

    setName("");
    setPhotoURL("");
    setEmail("");
    setPassword("");

  }

  return (
    <>

    <div className="loginscreen">
        <img src="https://avatars.githubusercontent.com/u/108508652?s=280&v=4"/>

        {
            signup===true ? (<form onSubmit={register}> 
              <input type="text" placeholder="Full Name" value={name} onChange={e=>setName(e.target.value)}/>
              <input type="text" placeholder="Profile Picture URL" value={photoURL} onChange={e=>setPhotoURL(e.target.value)}n/>
              <input type="email" placeholder="Email"value={email} onChange={e=>setEmail(e.target.value)}/>
              <input type="password" placeholder="Password"value={password} onChange={e=>setPassword(e.target.value)}/>
  
              <input type="submit" value="Sign Up"/>
  
              <h4>Already a member ? <span onClick={e=>setSignUp(false)}>Login Here</span></h4>
           </form>)
            : 
            (<form>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>

            <input type="submit" value="Sign In"/>

            <h4>Not a member ? <span onClick={e=>setSignUp(true)}>Register Here</span></h4>
         </form>)
        }
    </div>
    </>
  )
}

export default Login