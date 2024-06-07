import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import AddEditUser from './Pages/AddEditUser/AddEditUser'

const App = () => {
  return (
   
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/add' element={<AddEditUser />} />
  <Route path='/update/:id' element={<AddEditUser />} />
</Routes>
</BrowserRouter>

  
  )
}

export default App