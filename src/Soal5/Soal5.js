import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthProvider from "./Components/AuthContext";
import DataProvider from "./Components/DataContext";
import HomePage from "./Page/HomePage";
import LoginPage from "./Page/LoginPage";

function Soal5() {
	return (
		<div>
			<AuthProvider>
				<DataProvider>
					<Switch>
						<Route exact path="/soal-5" component={HomePage} />
						<Route path="/soal-5/login" component={LoginPage} />
					</Switch>
				</DataProvider>
			</AuthProvider>
		</div>
	);
}

export default Soal5;
