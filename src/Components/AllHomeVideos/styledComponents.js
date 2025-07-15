import styled from 'styled-components'

export const VideoCard = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`

export const FailurVideoViwe = styled.div`
  background: 'none';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NoSearchImg = styled.img`
  width: 230px;
  @media screen and (min-width: 768px) {
    width: 460px;
  }
`

export const NoHeading = styled.h1`
  font-family: Roboto;
  font-size: 23px;
  text-align: center;
  color: ${props => props.headingColor};
`

export const NoPara = styled.p`
  font-family: Roboto;
  font-size: 18px;
  text-align: center;
  color: ${props => props.paraColor};
`

export const ReTryButton = styled.button`
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
`
