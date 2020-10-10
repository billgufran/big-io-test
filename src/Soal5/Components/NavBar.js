import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../Stylesheet/NavBar.css";
import { AuthContext } from "./AuthContext";


function LoginButton() {
	return (
		<Link to="/soal-5/login">
			<button className="button-outline">Login</button>
		</Link>
	);
}

function LogoutButton() {
   const {setUserType} = useContext(AuthContext);

   const handleClick = () => {
      setUserType({visitor: true, surveyor: false, admin: false})
   }

	return <button className="button-outline" onClick={handleClick}>Logout</button>;
}

function NavBar() {
   const {userType} = useContext(AuthContext);

	return (
		<div id="NavBar" className="flex-row">
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
