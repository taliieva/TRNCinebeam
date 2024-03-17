import React, { useState } from 'react'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'

const Layout = ({children}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (query: string) => {
    setSearchTerm(query);
  };
  return (
    <div>
      <header>
        <Header onSearch={handleSearch}/>
      </header>
      <main>{children}</main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout
