import React, { useContext, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Head from 'next/head'

import {
  Container,
  Title,
  Description,
  Input,
  Label,
  DivInput,
  Canvas
} from '../styles/pages/Home'
import { Context } from '../context/Context'

const Home: React.FC = () => {
  const {
    canvasRef,
    lowerText,
    setLowerText,
    setUpperText,
    upperText,
    onDrop,
    images
  } = useContext(Context)
  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: ['image/*'] })
  const [name] = useState({
    title: 'Meme Generator',
    description: 'Meme Generator or editing.'
  })
  return (
    <Container>
      <Head>
        <title>Meme Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>{name.title}</Title>
      <Description>{name.description}</Description>

      <main>
        <div
          {...getRootProps()}
          style={{ background: '#666', borderRadius: 10 }}
        >
          <Canvas ref={canvasRef}> </Canvas>
          <input {...getInputProps()} />

        </div>
        {/* <img src={images[0]} alt="" /> */}
        <form>
          <DivInput>
            <Label htmlFor="upperText">Title</Label>
            <Input
              value={upperText}
              onChange={(e) => setUpperText(e.target.value)}
            />
          </DivInput>
          <DivInput>
            <Label htmlFor="lowerText">Description</Label>
            <Input
              value={lowerText}
              onChange={(e) => setLowerText(e.target.value)}
            />
          </DivInput>
        </form>
      </main>

    </Container>
  )
}

export default Home
