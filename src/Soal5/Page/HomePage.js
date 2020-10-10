import React from 'react'
import AdminTable from '../Components/AdminTable'
import DataProvider from '../Components/DataContext'
import NavBar from '../Components/NavBar'
import SurveyorForm from '../Components/SurveyorForm'

function HomePage() {
   return (
      <div>
         <NavBar/>
         <DataProvider>
         <h1>Home Page</h1>
         <AdminTable/>
         <SurveyorForm/>
         </DataProvider>
      </div>
   )
}

export default HomePage
