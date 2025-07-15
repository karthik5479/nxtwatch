import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavigationContainer = styled.div`
  position: fixed;
  top: 60px;
  margin-top: 28px;
  width: 250px;
  height: 90%;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 991px) {
    display: none;
  }
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  margin-bottom: 20px;
`

export const NavOptions = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  list-style-type: none;
  margin-top: 0px;
  padding: 0px;
`

export const NavLinkCon = styled.li`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  align-items: center;
  padding-left: 20px;
  background-color: ${props => props.bgColor};
`

export const NavText = styled.p`
  font-family: Roboto;
  font-size: 20px;
  margin-left: 15px;
  color: ${props => props.color};
`

export const ContactHeading = styled.p`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 500;
  margin-left: 15px;
  color: ${props => props.color};
`
export const NavLink = styled(Link)`
  text-decoration: none;
`

export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
`

export const ContactImage = styled.img`
  height: 26px;
  width: 26px;
  margin-right: 10px;
  border-radius: 50px;
`

export const Note = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 24px;
  margin-right: 4px;
  color: ${props => props.color};
`
export const UlCon = styled.ul`
  list-style-type: 'none';
`
export const NavigationSmall = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 1px;
  padding: 10px;
  align-items: center;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 769px) {
    display: none;
  }
`
