import React, { useState } from 'react'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'
import { set } from 'lodash'

const Layout = ({children}) => {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>{children}</main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout
