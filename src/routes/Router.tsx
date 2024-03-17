import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/homepage/page.tsx'
import FilmId from '../pages/homepage/FilmId.tsx'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/film/:filmName' element={<FilmId/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
