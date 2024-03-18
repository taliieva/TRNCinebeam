import React, { useState } from 'react'
import Layout from '../../layout/Layout.tsx'
import { Box, Card, CardBody, CardHeader, Text,Image } from '@chakra-ui/react'
import CardContainer from './CardContainer.tsx'

const HomePage = () => {
  return (
    <Layout>
      <CardContainer />
    </Layout>
  )
}

export default HomePage