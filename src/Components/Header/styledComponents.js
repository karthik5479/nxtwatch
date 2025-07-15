import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const Navbar = styled.nav`
  height: 12vh;
  background: ${props => props.bgColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  @media screen and (min-width: 768px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`

export const Img = styled.img`
  height: 50px;
  width: 180px;
  margin: 2px;
  cursor: pointer;
  margin-left: 10px;
  @media screen and (min-width: 768px) {
    height: 30px;
    width: 100px;
  }
  @media screen and (max-width: 576px) {
    height: 30px;
    width: 100px;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 10px;
`

export const ThemeBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`
export const LogoLink = styled(Link)`
  text-decoration: none;
`

export const ProfileImg = styled.img`
  height: 40px;
  width: 40px;
  margin: 6px;
  cursor: pointer;
`

export const Button = styled.button`
  background-color: ${props => props.bgColor};
  border: 1px solid;
  font-family: Roboto;
  color: ${props => props.color};
  border-color: ${props => props.color};
  border-radius: 12px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-left: 6px;
  cursor: pointer;
  @media screen and (max-width: 576px) {
    display: none;
  }
`

export const Mcontainer = styled.div`
  height: 150px;
  width: 260px;
  background-color: #cbd5e1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-radius: 12px;
  @media screen and (min-width: 768px) {
    height: 220px;
    width: 420px;
  }
`

export const ClosePara = styled.p`
  color: #000000;
  margin: 10px;
  font-family: Roboto;
  font-size: 16px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 25px;
    font-weight: 500;
  }
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: 1px solid #808080;
  color: #808080;
  border-radius: 12px;
  padding: 8px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 10px;
  outline: none;
  font-family: Roboto;
  font-weight: 500;
  cursor: pointer;
  font-size: 16px;
  @media screen and (min-width: 768px) {
    padding: 12px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 20px;
  }
`

export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  border: 1px solid #3b82f6;
  color: #ffffff;
  align-self: flex-end;
  border-radius: 12px;
  padding: 8px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 10px;
  outline: none;
  font-family: Roboto;
  font-weight: 400;
  cursor: pointer;
  font-size: 16px;
  @media screen and (min-width: 768px) {
    padding: 12px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 20px;
  }
`

export const LogoutIcon = styled.button`
  background: none;
  border: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ButtonsCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
