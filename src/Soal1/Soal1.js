import React, { useState } from "react";
import "./Soal1.css";

export default function Soal1() {
	const [input, setInput] = useState("");
	const [output, setOutput] = useState([]);
	const [palindrome, setPalindrome] = useState("");

	const handleChange = event => {
		setInput(event.target.value);
	};

	const handleSubmit = event => {
		event.preventDefault();
		setOutput([...output, input]);
		setInput("");
	};

	return (
		<div id="Soal1" className="container">
			<h1>Palindrome Generator</h1>
			<form onSubmit={handleSubmit} className="input-with-button">
				<label htmlFor="Soal1--character-input">Input character:</label>
				<input
					id="Soal1--character-input"
					type="text"
					maxLength="1"
					value={input}
					onChange={handleChange}
				/>
				<button id="Soal1--add-button" type="submit">+</button>
			</form>
			<div className="flex-column" style={{alignItems: 'center'}}>
				{palindrome === "" ? (
					<h2 style={{color: "lightgray"}}>
						{output.length === 0 ? "Output will appear here" : output}
					</h2>
				) : (
					<h2>{palindrome}</h2>
				)}
				<button
					id="Soal1--generate-button"
					onClick={() =>
						setPalindrome(
							output.join("") +
								output
									.slice(0, output.length - 1)
									.reverse()
									.join("")
						)
					}
				>
					Generate
				</button>
			</div>
		</div>
	);
}
