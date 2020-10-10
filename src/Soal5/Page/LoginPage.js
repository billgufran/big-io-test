import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../Components/AuthContext";
import "../Stylesheet/LoginPage.css";

function LoginPage() {
	const [input, setInput] = useState({
		username: "",
		password: "",
	});
	const {setUserType} = useContext(AuthContext);
	const history = useHistory();

	const handleChange = event => {
		setInput({...input, [event.target.name]: event.target.value});
	};

	const handleSubmit = event => {
		event.preventDefault();
		if (input.username === "admin" && input.password === "admin") {
			setUserType({visitor: false, surveyor: false, admin: true});
			history.push("/soal-5");
		} else if (
			input.username === "surveyor" &&
			input.password === "surveyor"
		) {
			setUserType({visitor: false, surveyor: true, admin: false});
			history.push("/soal-5");
		} else {
			alert("Username/password is invalid, please refer to the console log");
		}
	};

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
		);
	}, []);

	return (
		<div id="LoginPage">
			<h1>Login</h1>
			<form onSubmit={handleSubmit} className="flex-column">
				<div>
					<label htmlFor="username">Username</label>
					<input
						name="username"
						id="username"
						type="text"
						value={input.username}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input
						name="password"
						id="password"
						type="password"
						value={input.password}
						onChange={handleChange}
					/>
				</div>
				<button id="LoginPage--login-button" type="submit">
					Login
				</button>
			</form>
			<p>*login instruction is on the console</p>
		</div>
	);
}

export default LoginPage;
