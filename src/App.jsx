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
