import React, { useContext } from "react";
import { DataContext } from "./DataContext";

export default function AdminTable() {
   const {data, setData} = useContext(DataContext);

   const unverifiedData = data.filter(el => el.isVerified === false)

	return (
		<div>
			<h1>Daftar Harga Buah</h1>
			<table id="AdminTable">
				<thead>
					<tr>
						<th>Date</th>
						<th>Commodity</th>
						<th>Price</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{unverifiedData.map((datum, index) => {
						return (
							<tr key={index}>
								<td>{datum.date}</td>
								<td>{datum.commodity}</td>
								<td>IDR {datum.price}</td>
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
										onClick={() =>
											setData([
												...data.filter(
													el => data.indexOf(el) !== index
												),
											])
										}
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
