import React, { useState } from 'react'
import Layout from '../../layout/Layout.tsx'
import CardContainer from './CardContainer.tsx'

const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (value: any) => {
    setSearchValue(value);
  };
  return (
    <Layout setSearchValue={handleSearchChange}>
      <CardContainer searchValue={searchValue} />
    </Layout>
  )
}

export default HomePage