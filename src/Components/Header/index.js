import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {BsBrightnessHigh, BsMoon} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'
import {
  Navbar,
  Img,
  Container,
  ThemeBtn,
  ProfileImg,
  Button,
  Mcontainer,
  ClosePara,
  ButtonsCon,
  CloseButton,
  ConfirmButton,
  LogoutIcon,
  LogoLink,
} from './styledComponents'

const profileUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png'

const Header = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const color = isDarkTheme ? '#ffffff' : '#00306e'
      const bgColor = isDarkTheme ? '#231f20' : '#f1f5f5'

      const onLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      const changeTheme = () => {
        toggleTheme()
      }

      return (
        <Navbar bgColor={bgColor}>
          <LogoLink to="/">
            <Img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </LogoLink>
          <Container>
            <ThemeBtn type="button" data-testid="theme" onClick={changeTheme}>
              {isDarkTheme ? (
                <BsBrightnessHigh size={30} color="#ffffff" />
              ) : (
                <BsMoon size={30} />
              )}
            </ThemeBtn>
            <ProfileImg src={profileUrl} alt="profile" />
            <Popup
              modal
              trigger={
                <Button type="button" bgColor={bgColor} color={color}>
                  Logout
                </Button>
              }
            >
              {close => (
                <Mcontainer>
                  <ClosePara>Are you sure, you want to logout?</ClosePara>
                  <ButtonsCon>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>
                    <ConfirmButton type="button" onClick={onLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsCon>
                </Mcontainer>
              )}
            </Popup>

            <Popup
              modal
              trigger={
                <LogoutIcon type="button">
                  <FiLogOut size={25} color={color} />
                </LogoutIcon>
              }
            >
              {close => (
                <Mcontainer>
                  <ClosePara>Are you sure, you want to logout?</ClosePara>
                  <ButtonsCon>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>
                    <ConfirmButton type="button" onClick={onLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsCon>
                </Mcontainer>
              )}
            </Popup>
          </Container>
        </Navbar>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default withRouter(Header)
