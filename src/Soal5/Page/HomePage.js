import React, { useContext } from "react";
import AdminTable from "../Components/AdminTable";
import { AuthContext } from "../Components/AuthContext";
import NavBar from "../Components/NavBar";
import SurveyorForm from "../Components/SurveyorForm";
import VisitorTable from "../Components/VisitorTable";

function HomePage() {
	const {userType} = useContext(AuthContext);

	return (
		<div>
				<NavBar />
				{userType.visitor && <VisitorTable />}
				{userType.admin && <AdminTable />}
				{userType.surveyor && <SurveyorForm />}
		</div>
	);
}

export default HomePage;
