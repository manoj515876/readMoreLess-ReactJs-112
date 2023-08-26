// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
`
export const Heading = styled.h1`
  font-size: 25px;
  font-weight: bold;
  font-family: 'Roboto';
  color: #1e293b;
`
export const Description = styled.p`
  font-size: 15px;
  font-weight: bold;
  font-family: 'Roboto';
  color: #1e293b;
`
export const Image = styled.img`
  height: 220px;
  width: 100%;
`
export const Button = styled.button`
  background-color: #1f81ff;
  color: #ffffff;
  border-radius: 5px;
  height: 30px;
  width: 80px;
  font-size: 12px;
`
