import React from 'react'
import { Routes, Route } from "react-router-dom"
import Error from './pages/Error'
import Home from './pages/home'

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </>
  )
}
