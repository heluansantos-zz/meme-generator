import React, { useContext, useState } from 'react'
import Head from 'next/head'

import { Container, Title, Description } from '../styles/pages/Home'
import { Context } from '../context/Context'

const Home: React.FC = () => {
  const { darkTheme } = useContext(Context)
  const [name] = useState({
    title: 'Meme Generator',
    description: 'Meme Generator or editing.'
  })
  return (
    <Container>
      <Head>
        <title>Meme Generator</title>
      </Head>
      <Title>{name.title}</Title>
      <Description>{name.description}</Description>
    </Container>
  )
}

export default Home
