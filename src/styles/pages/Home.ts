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
  background: red;
  margin: 10px;
  width: 400px;
  border-radius: 10px;
`
