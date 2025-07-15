import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'
import {
  NotFoundContainer,
  Img,
  NotHeading,
  NotPara,
  NotFoundCon,
} from './styledComponents'

const NotFound = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const NotFoundImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      const color = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const textColor = isDarkTheme ? '#e2e8f0' : '#475569'
      const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

      return (
        <>
          <Header />
          <NavigationBar />
          <NotFoundContainer bgColor={bgColor}>
            <NotFoundCon>
              <Img src={NotFoundImg} alt="not found" />
              <NotHeading color={color}>Page Not Found</NotHeading>
              <NotPara textColor={textColor}>
                We are sorry, the page you requested could not be found.
              </NotPara>
            </NotFoundCon>
          </NotFoundContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default NotFound
