import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider(props) {
	const [userType, setUserType] = useState({visitor: true, surveyor: false, admin: false});

	const value = {userType, setUserType};

	return (
		<AuthContext.Provider value={value}>
			{props.children}
		</AuthContext.Provider>
	);
}