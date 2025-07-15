import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import FailureViwe from '../FailureViwe'
import GamingCard from '../GamingCard'

import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'
import {
  GamingContainer,
  LoaderContainer,
  GamingVideioList,
  TitleContainer,
  IconCon,
  TitleText,
} from './styledComponents'

const apiStatusContent = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Gaming extends Component {
  state = {
    gamingVideos: [],
    apiStatus: apiStatusContent.initial,
  }

  componentDidMount() {
    this.getGaming()
  }

  getGaming = async () => {
    this.setState({apiStatus: apiStatusContent.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const newData = data.videos.map(eachitem => ({
        id: eachitem.id,
        title: eachitem.title,
        thumbNailUrl: eachitem.thumbnail_url,
        viewCount: eachitem.view_count,
      }))
      this.setState({
        gamingVideos: newData,
        apiStatus: apiStatusContent.success,
      })
    } else {
      this.setState({apiStatus: apiStatusContent.failure})
    }
  }

  renderSuccessViwe = () => {
    const {gamingVideos} = this.state
    return (
      <>
        <GamingVideioList>
          {gamingVideos.map(item => (
            <GamingCard key={item.id} gamingVideosDetails={item} />
          ))}
        </GamingVideioList>
      </>
    )
  }

  renderLoader = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  onRetry = () => {
    this.getTrend()
  }

  renderFailureViwe = () => <FailureViwe onRetry={this.onRetry} />

  renderGaming = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusContent.success:
        return this.renderSuccessViwe()
      case apiStatusContent.failure:
        return this.renderFailureViwe()
      case apiStatusContent.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

          return (
            <>
              <Header />
              <NavigationBar />
              <GamingContainer bgColor={bgColor} data-testid="gaming">
                <TitleContainer textColor={textColor}>
                  <IconCon>
                    <SiYoutubegaming size={40} color="#ff0000" />
                  </IconCon>
                  <TitleText textColor={textColor}>Gaming</TitleText>
                </TitleContainer>
                {this.renderGaming()}
              </GamingContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Gaming
