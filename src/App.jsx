import React from 'react'
import Transaction from './Components/Transaction/Transaction'
import Sidebar from './Components/Layout/Layout'
// import { BarChart } from './Components/Transaction/Chart'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AllTransactions from './Components/Transaction/AllTransactions'
import AllWithdraw from './Components/WithDrawHistory/AllWithdraw'
import Emloyee from './Components/Emloyee/Emloyee'
import Settings from './Components/Settings/Settings'
import Profile from './Components/Settings/Profile'
import EditProfile from './Components/Settings/EditProfile'
import ResSettings from './Components/RestaurantSettings/ResSettings'
import EditResSettings from './Components/RestaurantSettings/EditResSettings'
import EditResAddress from './Components/RestaurantSettings/EditResAddress'
import Notification from './Components/RestaurantSettings/Notification'
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy'
import HelpCenter from './Components/HelpCenter/HelpCenter'
import Order from './Components/HelpCenter/Order'
import Upcoming from './Components/Upcoming/Upcoming'
import SelectDishes from './Components/Upcoming/SelectDishes'
import Chat from './Components/OnDelivery/Chat'
import Orders from './Components/Order/Orders'
// import Upcoming from './Components/Upcoming/Upcoming'
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
        <Route path='/helpcenter' element={<HelpCenter />} />
        <Route path='/OrderHelp' element={<Order />} />
        <Route path='/orders' element={<Orders />} />

        <Route path='/orders/' element={<Upcoming />} />


        {/* <Route path='/orders/chats' element={<Chat />} /> */}
        {/* <Route path='/upcoming/SelectDishes' element={<SelectDishes />} /> */}
      </Routes>

    </div>
  )
}

export default App
