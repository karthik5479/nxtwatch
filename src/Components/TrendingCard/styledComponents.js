import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const CardContainer = styled.li`
  margin-bottom: 18px;
  width: 100%;
  list-style-type: none;
  background: none;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    padding-left: 35px;
    flex-direction: row;
  }
`

export const ThumbNailImage = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`
export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin: 20px;
  border-radius: 50%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`

export const Title = styled.p`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
  margin-top: 0px;
  color: ${props => props.textColor};
`

export const Name = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 300;
  margin-top: 0px;
  color: ${props => props.textColor};
`

export const ViewsAndDate = styled.p`
  font-family: Roboto;
  font-size: 14px;
  margin-top: 0px;
  font-weight: 300;
  color: ${props => props.textColor};
`

export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
