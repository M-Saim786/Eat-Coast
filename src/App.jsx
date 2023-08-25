import React from 'react'
import Transaction from './Components/Transaction/Transaction'
import Sidebar from './Components/Layout/Layout'
// import { BarChart } from './Components/Transaction/Chart'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AllTransactions from './Components/Transaction/AllTransactions'
import AllWithdraw from './Components/WithDrawHistory/AllWithdraw'
import Emloyee from './Components/Emloyee/Emloyee'
import { Login3 } from './Components/Login3'
import Settings from './Components/Settings/Settings'
import Profile from './Components/Settings/Profile'
import EditProfile from './Components/Settings/EditProfile'
import ResSettings from './Components/RestaurantSettings/ResSettings'
import EditResSettings from './Components/RestaurantSettings/EditResSettings'
import EditResAddress from './Components/RestaurantSettings/EditResAddress'
import Notification from './Components/RestaurantSettings/Notification'
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy'
// import EnterPin from './Components/Transaction/EnterPin'
// import AddMealPlane from './Components/AddMealPlane'

function App() {
  return (
    <div className='App'>
      {/* <BarChart /> */}
      <Sidebar />
      <Routes>
        <Route path='/allTranactions' element={<AllTransactions />} />
        <Route path='/Transactions' element={<Transaction />} />
        <Route path='/AllWithdraws' element={<AllWithdraw />} />
        <Route path='/emloyees' element={<Emloyee />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/editprofile' element={<EditProfile />} />
        <Route path='/restaurantSettings' element={<ResSettings />} />
        <Route path='/editResSettings' element={<EditResSettings />} />
        <Route path='/editResAddress' element={<EditResAddress />} />
        <Route path='/notification' element={<Notification />} />
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
      </Routes>
      {/* <Login3 /> */}
      {/* <div className="item1"> */}
      {/* <AddMealPlane /> */}
      {/* </div> */}
      {/* // <div className="item2"> */}

      {/* </div> */}
    </div>
  )
}

export default App
