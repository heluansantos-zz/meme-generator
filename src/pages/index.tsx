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
  Canvas,
  DivCanvas,
  DragActive,
  DragActiveTitle,
  ButtonFont,
  ButtonColorRed,
  ButtonColorWhite,
  ButtonColorBlack,
  ButtonColorDiv,
  ButtonFontDiv
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
    images,
    seletcColor,
    seletcFont,
  } = useContext(Context)
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: ['image/*'] })
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
        <DivCanvas
          {...getRootProps()}
        >
          {isDragActive ? (
            <DragActive>
              <DragActiveTitle>
                Solte a imagem para fazer upload
              </DragActiveTitle>
            </DragActive>
          ) : (
            <Canvas ref={canvasRef}> </Canvas>
          )}

          <input {...getInputProps()} />

        </DivCanvas>

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
          <DivInput>
            <Label htmlFor="upperText">Filters</Label>
            <ButtonFontDiv>
              <ButtonFont onClick={() => seletcFont('Roboto')}>Roboto</ButtonFont>
              <ButtonFont onCLick={() => seletcFont('Zen Dots')}>Zen Dots</ButtonFont>
              <ButtonFont onCLick={() => seletcFont('Karantina')}>Karantina</ButtonFont>
            </ButtonFontDiv>
            <ButtonColorDiv>
              <ButtonColorRed onClick={() => seletcColor('red')}>Red</ButtonColorRed>
              <ButtonColorWhite onCLick={() => seletcColor('white')}>White</ButtonColorWhite>
              <ButtonColorBlack onCLick={() => seletcColor('black')}>Black</ButtonColorBlack>
            </ButtonColorDiv>

          </DivInput>
        </form>
      </main>

    </Container>
  )
}

export default Home
