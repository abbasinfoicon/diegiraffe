import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Boards from '../views/Boards'
import DataProtection from '../views/DataProtection'
import Imprint from '../views/Imprint'
import MoveableView from '../views/MoveableView'
import PageNotFound from '../views/PageNotFound'
import Planets from '../views/Planets'

const RoutLink = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MoveableView />} >
        <Route index path="/boards" element={<Boards />} />
        <Route path="/planets" element={<Planets />} />
      </Route>
      <Route path="/imprint" element={<Imprint />} />
      <Route path="/data-protection" element={<DataProtection />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default RoutLink