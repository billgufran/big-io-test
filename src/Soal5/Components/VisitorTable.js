import React, { useContext } from "react";
import "../Stylesheet/Table.css";
import { DataContext } from "./DataContext";

export default function VisitorTable() {
   const {data} = useContext(DataContext);

   const verifiedData = data.filter(el => el.isVerified === true)

	return (
		<div>
			<h1>Commodity Prices</h1>
			<table id="VisitorTable" className="table">
				<thead>
					<tr>
						<th>Date</th>
						<th>Commodity</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{verifiedData.map((datum, index) => {
						return (
							<tr key={index}>
								<td>{datum.date}</td>
								<td>{datum.commodity}</td>
								<td>IDR {datum.price}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
