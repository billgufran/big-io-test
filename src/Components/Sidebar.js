import React from "react";
import { Link } from "react-router-dom";
import '../Stylesheet/Sidebar.css';

function Sidebar() {
	return (
		<div id="Sidebar">
			<ul>
				<Link to="/">
					<li><span role="img" aria-label="Home button">🏠</span></li>
				</Link>
				<Link to="/soal-1">
					<li>1</li>
				</Link>
				<Link to="/soal-2">
					<li>2</li>
				</Link>
				<Link to="/soal-3">
					<li>3</li>
				</Link>
				<Link to="/soal-4">
					<li>4</li>
				</Link>
				<Link to="/soal-5">
					<li>5</li>
				</Link>
			</ul>
		</div>
	);
}

export default Sidebar;
