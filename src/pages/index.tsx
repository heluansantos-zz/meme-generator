import React, { useContext } from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import { Context } from '../context/Context'

const Home: React.FC = () => {
  const { darkTheme } = useContext(Context)
  return (
    <Container>
      <Head>
        <title>Meme Generator</title>
      </Head>
      <h1>Meme Generator</h1>
      <p>Meme Generator or editing.</p>
    </Container>
  )
}

export default Home
