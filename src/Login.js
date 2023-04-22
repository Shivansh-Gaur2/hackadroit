import React from 'react'
import "./css/login.css"

function Login() {
  return (
    <div className="loginscreen">
        <img src="https://avatars.githubusercontent.com/u/108508652?s=280&v=4"/>
         <form>
            <input type="text" placeholder="Full Name"/>
            <input type="text" placeholder="Profile Picture URL"/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>

            <input type="submit" value="Sign Up"/>

            <h4>Already a member ? <span>Login Here</span></h4>
         </form>
    </div>
  )
}

export default Login