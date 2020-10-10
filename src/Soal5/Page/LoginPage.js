import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../Components/AuthContext';

function LoginPage() {
   const [input, setInput] = useState({
		username: "",
		password: "",
	});
   const { setUserType } = useContext(AuthContext);
   const history = useHistory();


   const handleChange = event => {
      setInput({...input, [event.target.name]: event.target.value})
   }

   const handleSubmit = event => {
      event.preventDefault();
      if (input.username === "admin" && input.password === "admin") {
         setUserType({visitor: false, surveyor: false, admin: true})
         history.push('/soal-5')
      } else if (input.username === "surveyor" && input.password === "surveyor") {
         setUserType({visitor: false, surveyor: true, admin: false})
         history.push('/soal-5')
      } else {
         alert("Username/password is invalid, please refer to the console log")
      }
   }

   useEffect(() => {
      console.log(
         `
         ================================

                Login instruction

         ================================
         Login as Admin

         Username: admin
         Password: admin


         Login as Surveyor

         Username: surveyor
         Password: surveyor
         `
      )
   }, [])

   return (
      <div>
         <h1>Login</h1>
         <p>login instruction is on the console</p>
         <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label><br/>
            <input name="username" id="username" type="text" value={input.username} onChange={handleChange}/>
            <label htmlFor="password">Password</label><br/>
            <input name="password" id="password" type="password" value={input.password} onChange={handleChange}/>
            <button type="submit">Login</button>
         </form>
      </div>
   )
}

export default LoginPage
