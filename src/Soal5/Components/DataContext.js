import React, { createContext, useState } from "react";

export const DataContext = createContext();

export default function DataProvider(props) {
   const [data, setData] = useState([]);

	const value = {data, setData};

	return (
		<DataContext.Provider value={value}>
			{props.children}
		</DataContext.Provider>
	);
}