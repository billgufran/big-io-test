import React, { useContext, useEffect, useState } from "react";
import "../Stylesheet/SurveyorForm.css";
import { DataContext } from "./DataContext";

const baseValue = {
   date: "",
   commodity: "",
   price: 0,
   isVerified: 'false',
}

export default function SurveyorForm() {
	const [datum, setDatum] = useState(baseValue);
	const {data, setData} = useContext(DataContext);

	const handleChange = event => {
		setDatum({...datum, [event.target.name]: event.target.value});
	};

	const handleSubmit = event => {
      event.preventDefault();
      setData([...data, datum])
      setDatum(baseValue)
   };

   useEffect(() => {
      console.log(data)
   }, [data])

	return (
		<div id="SurveyorForm">
			<form onSubmit={handleSubmit}>
				<div className="SurveyorForm-row">
					<label htmlFor="form-date">Date:</label>
					<input
						id="form-date"
						type="date"
						required
						name="date"
						value={datum.date}
						onChange={handleChange}
					/>
				</div>
				<div className="SurveyorForm-row">
					<label htmlFor="form-commodity">Commodity:</label>
					<input
						id="form-commodity"
						type="text"
						required
						name="commodity"
						value={datum.commodity}
						onChange={handleChange}
					/>
				</div>
            <div className="SurveyorForm-row">
					<label htmlFor="form-price">Price:</label>
					<input
						id="form-price"
						type="number"
						required
						name="price"
						value={datum.price}
						onChange={handleChange}
					/>
				</div>
				<div id="SurveyorForm--submit-button" className="align-right">
					<button className="button" type="submit">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}
