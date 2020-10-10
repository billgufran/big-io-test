import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function LoginButton() {
	return (
		<Link to="/soal-5/login">
			<button className="NavBar--button">Login</button>
		</Link>
	);
}

function LogoutButton() {
   const {setUserType} = useContext(AuthContext);

   const handleClick = () => {
      setUserType({visitor: true, surveyor: false, admin: false})
   }

	return <button className="NavBar--button" onClick={handleClick}>Logout</button>;
}

function NavBar() {
   const {userType} = useContext(AuthContext);

	return (
		<div id="NavBar">
			<div id="NavBar--left">
				{userType.admin && "Admin"}
				{userType.surveyor && "Surveyor"}
			</div>
			<div id="NavBar--right">
				{userType.visitor ? <LoginButton/> : <LogoutButton/>}
			</div>
		</div>
	);
}

export default NavBar;
