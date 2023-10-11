import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ComponentExample from '../components/ComponentExample'
import StateExample from '../components/StateExample'
import ParentComponent from '../components/parentChildExample/ParentComponent'
import UseEffectExample from '../components/UseEffectExample'
import MarketComponent from '../components/market/MarketComponent'
import Layout from '../layout/Layout'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route path="/" element={<ComponentExample />} />
            <Route path="/state" element={<StateExample />} />
            <Route path="/parentChild" element={<ParentComponent />} />
            <Route path="/useEffect" element={<UseEffectExample />} />
            <Route path="/market" element={<MarketComponent />} />
        </Route>
    </Routes>
  )
}

export default Router