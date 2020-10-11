import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Home from "./Home";
import Soal1 from "./Soal1/Soal1";
import Soal2 from "./Soal2/Soal2";
import Soal3 from "./Soal3/Soal3";
import Soal4 from "./Soal4/Soal4";
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
						<Route exact path="/" component={Home} />
						<Route path="/soal-1" component={Soal1} />
						<Route path="/soal-2" component={Soal2} />
						<Route path="/soal-3" component={Soal3} />
						<Route path="/soal-4" component={Soal4} />
						<Route path="/soal-5" component={Soal5} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
