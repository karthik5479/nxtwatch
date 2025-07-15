import styled from 'styled-components'

export const FailureContainer = styled.div`
  background: 'none';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Img = styled.img`
  width: 230px;
  @media screen and (min-width: 768px) {
    width: 460px;
  }
`

export const Heading = styled.h1`
  font-family: Roboto;
  font-size: 23px;
  text-align: center;
  color: ${props => props.headingColor};
`
export const FailurePara = styled.p`
  font-family: Roboto;
  font-size: 18px;
  text-align: center;
  color: ${props => props.paraColor};
`
export const RetryButton = styled.button`
  font-family: Roboto;
  font-size: 18px;
  color: #ffffff;
  background-color: #4f46e5;
  border: none;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  cousor: pointer;
  border-radius: 6px;
  cursor: pointer;
`
