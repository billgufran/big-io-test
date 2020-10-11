import React, { createContext, useState } from "react";

//Custom hooks to set localStorage
function useLocalStorage(key, initialValue) {
	const [storedValue, setStoredValue] = useState(() => {
		 try {
			  const item = window.localStorage.getItem(key);
			  return item ? JSON.parse(item) : initialValue;
		 } catch (error) {
			  console.log(error);
			  return initialValue;
		 }
	});

	const setValue = value => {
		 try {
			  const valueToStore =
					value instanceof Function ? value(storedValue) : value;
			  setStoredValue(valueToStore);
			  window.localStorage.setItem(key, JSON.stringify(valueToStore));
		 } catch (error) {
			  console.log(error);
		 }
	};
	return [storedValue, setValue];
}

export const DataContext = createContext();

export default function DataProvider(props) {
   const [data, setData] = useLocalStorage("pricesData", []);

	const value = {data, setData};

	return (
		<DataContext.Provider value={value}>
			{props.children}
		</DataContext.Provider>
	);
}