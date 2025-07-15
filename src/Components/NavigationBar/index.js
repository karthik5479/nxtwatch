import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'
import {
  NavigationContainer,
  NavOptions,
  NavLinkCon,
  NavLink,
  NavText,
  ContactInfo,
  ContactHeading,
  ContactImage,
  Note,
  ContactIcons,
  NavigationSmall,
  UlCon,
} from './styledComponents'

class NavigationBar extends Component {
  renderTabItems = () => (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, activeTab, changeTab} = value
        const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'
        const textColor = isDarkTheme ? '#f1f5f9' : '#231f20'
        const activeTabBg = isDarkTheme ? '#475569' : '#cbd5e1'

        const onClickHome = () => {
          changeTab('Home')
        }
        const onClickTrending = () => {
          changeTab('Trending')
        }
        const onClickGaming = () => {
          changeTab('Gaming')
        }
        const onClickSaved = () => {
          changeTab('Saved')
        }

        return (
          <>
            <NavigationContainer bgColor={bgColor}>
              <NavOptions>
                <NavLink to="/">
                  <NavLinkCon
                    key="home"
                    bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
                    onClick={onClickHome}
                  >
                    <AiFillHome
                      size={30}
                      color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={textColor}>Home</NavText>
                  </NavLinkCon>
                </NavLink>

                <NavLink to="/trending">
                  <NavLinkCon
                    key="trending"
                    bgColor={activeTab === 'Trending' ? activeTabBg : 'none'}
                    onClick={onClickTrending}
                  >
                    <HiFire
                      size={30}
                      color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={textColor}>Trending</NavText>
                  </NavLinkCon>
                </NavLink>

                <NavLink to="/gaming">
                  <NavLinkCon
                    key="gaming"
                    bgColor={activeTab === 'Gaming' ? activeTabBg : 'none'}
                    onClick={onClickGaming}
                  >
                    <SiYoutubegaming
                      size={30}
                      color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={textColor}>Gaming</NavText>
                  </NavLinkCon>
                </NavLink>

                <NavLink to="/saved-videos">
                  <NavLinkCon
                    key="saved"
                    bgColor={activeTab === 'Saved' ? activeTabBg : 'none'}
                    onClick={onClickSaved}
                  >
                    <CgPlayListAdd
                      size={30}
                      color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={textColor}>Saved Videos</NavText>
                  </NavLinkCon>
                </NavLink>
              </NavOptions>
              <ContactInfo>
                <ContactHeading color={textColor}>CONTACT US</ContactHeading>
                <ContactIcons>
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </ContactIcons>

                <Note color={textColor}>
                  Enjoy! Now to see your channels and recommendations!
                </Note>
              </ContactInfo>
            </NavigationContainer>
            <NavigationSmall>
              <NavLink to="/">
                <UlCon>
                  <AiFillHome
                    size={30}
                    color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                    onClick={onClickHome}
                  />
                </UlCon>
              </NavLink>
              <NavLink to="/trending">
                <UlCon>
                  <HiFire
                    size={30}
                    color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                    onClick={onClickTrending}
                  />
                </UlCon>
              </NavLink>
              <NavLink to="/gaming">
                <UlCon>
                  <SiYoutubegaming
                    size={30}
                    color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                    onClick={onClickGaming}
                  />
                </UlCon>
              </NavLink>
              <NavLink to="/saved-videos">
                <UlCon>
                  <CgPlayListAdd
                    size={30}
                    color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                    onClick={onClickSaved}
                  />
                </UlCon>
              </NavLink>
            </NavigationSmall>
          </>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )

  render() {
    return <>{this.renderTabItems()}</>
  }
}

export default withRouter(NavigationBar)
