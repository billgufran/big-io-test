import React, { useContext } from "react";
import "../Stylesheet/Table.css";
import { DataContext } from "./DataContext";

export default function AdminTable() {
	const {data, setData} = useContext(DataContext);

	return (
		<div>
			<h1>Commodity prices status</h1>
			<table id="AdminTable" className="table">
				<thead>
					<tr>
						<th>Date</th>
						<th>Commodity</th>
						<th>Price</th>
						<th>Status</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{data.map((datum, index) => {
						return (
							<tr key={index}>
								<td>{datum.date}</td>
								<td>{datum.commodity}</td>
								<td>IDR {datum.price}</td>
								<td>{datum.isVerified ? `confirmed` : `unconfirmed`}</td>
								<td>
									<button
										id="AdminTable--accept-button"
										onClick={() => {
											datum.isVerified = true;
											setData([...data]);
										}}
									>
										✔
									</button>
									<button
										id="AdminTable--reject-button"
										onClick={() => {
											datum.isVerified = false;
											setData([
												...data.filter(
													el => data.indexOf(el) !== index
												),
											]);
										}}
									>
										✖
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
