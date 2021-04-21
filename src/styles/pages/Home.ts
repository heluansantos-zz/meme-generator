import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: 54px;
  color: ${props => props.theme.colors.primary};
  margin-top: 40px;
  font-family: 'Zen Dots'
`

export const Description = styled.p`
  margin-top: 24px;
  font-size: 24px;
  line-height: 32px;  
`

export const Input = styled.input.attrs({
  id: "upperText",
  name: "upperText",
})`
  margin: 4px;
  font-size: 24px;
  line-height: 32px;  
  border-radius: 10px;
`

export const Label = styled.label`
  color: #ddd;  
  align-self: center;
`

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Canvas = styled.canvas`
  background: #666;
  margin: 10px;
  width: 500px;
  border-radius: 10px;
`

export const DivCanvas = styled.div`
  
`

export const DragActive = styled.div`
  background: #ff6600;
  margin: 10px;
  width: 500px;
  height: 250px;
  border-radius: 10px;
`

export const DragActiveTitle = styled.div`
  text-align: center;
  color: #333;
  align-items: center;
`

export const ButtonFont = styled.button`
border-radius: 10px;
height: 20px;
width: 100px;
`

export const ButtonColorRed = styled.button`
border-radius: 10px;
height: 20px;
width: 100px;
background: 'red'
`

export const ButtonColorWhite = styled.button`
border-radius: 10px;
height: 20px;
width: 100px;
background: 'white'
`

export const ButtonColorBlack = styled.button`
border-radius: 10px;
height: 20px;
width: 100px;
background: 'Black'
`

export const ButtonSave = styled.button`
border-radius: 10px;
height: 34px;
`

export const ButtonFontDiv = styled.div`
  flex-direction: row;
  justify-content: space-around;
  padding: 2%;
`
export const ButtonColorDiv = styled.div`
  flex-direction: row;
  justify-content: space-around;
  padding: 2%;
`

