import React, { useState } from "react";
import "./Soal3.css";

export default function Soal3() {
	const [input, setInput] = useState(0);
	const [pattern, setPattern] = useState([]);

	const mirrorArray = arr => arr.slice(0, arr.length - 1).reverse();

	const createPattern = (int) => {
		let rows = [];
        let acc = '';
		for (let i = 1; i <= int; i++) {
			for (let j = 1; j <= i; j++) {
              	acc += j.toString()
			}
          acc = acc.padEnd(int, ' ')
          const mirror = mirrorArray(acc.split('')).join('')
          rows = [...rows, acc + mirror]
          acc = ''
		}
		return [...rows, ...mirrorArray(rows)]
	}

	const handleChange = event => {
		setInput(event.target.value);
	};

	const handleSubmit = event => {
		event.preventDefault();
		let shape = createPattern(input)
		setPattern(shape)
	};

	return (
		<div id="Soal3" className="container">
			<form onSubmit={handleSubmit} className="input-with-button">
				<label htmlFor="Soal3--character-input">Input character:</label>
				<input
					id="Soal3--character-input"
					type="number"
					value={input}
					onChange={handleChange}
				/>
				<button id="Soal3--add-button" type="submit">
					Generate
				</button>
			</form>
			<div className="flex-column" style={{alignItems: "center"}}>
				{input === 0
					? <h2 style={{color: "lightgray"}}>Pattern will appear here</h2>
					: pattern.map(el => <pre key={parseInt(el)*Math.random()}>{el}</pre>)
				}
			</div>
		</div>
	);
}
