import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: none;

  @media screen and (min-width: 768px) {
    width: 250px;
  }
`

export const Image = styled.img`
  width: 100vw;
  height: 320px;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 240px;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
`

export const Title = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 0px;
  color: ${props => props.textColor};
`

export const ViewsAndDate = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 300;
  color: ${props => props.textColor};
`
