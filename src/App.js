import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Soal5 from "./Soal5/Soal5";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<div className="App-navigation">
					<Sidebar />
				</div>
				<div className="App-content">
					<Switch>
						<Route path="/soal-5" component={Soal5} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
