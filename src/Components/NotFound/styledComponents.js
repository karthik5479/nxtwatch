import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-left: 250px;
  }
`
export const NotFoundCon = styled.div`
  display: flex;
  flex-direction: column;
  background: none;
  align-items: center;
  justify-content: center;
`
export const NotHeading = styled.h1`
  font-family: Roboto;
  font-size: 25px;
  text-align: center;
  color: ${props => props.color};
`
export const Img = styled.img`
  width: 230px;
  @media screen and (min-width: 768px) {
    width: 430px;
  }
`

export const NotPara = styled.p`
  font-family: Roboto;
  font-size: 25px;
  text-align: center;
  color: ${props => props.textColor};
`
