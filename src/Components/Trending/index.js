import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import FailureViwe from '../FailureViwe'
import TrendingCard from '../TrendingCard'

import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'
import {
  TrendingContainer,
  TitleContainer,
  IconCon,
  TitleText,
  LoaderContainer,
  TrendingVideioList,
} from './styledComponents'

const apiStatusContent = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Trending extends Component {
  state = {
    trendingVideos: [],
    apiStatus: apiStatusContent.initial,
  }

  componentDidMount() {
    this.getTrend()
  }

  getTrend = async () => {
    this.setState({apiStatus: apiStatusContent.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
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
        publishedAt: eachitem.published_at,
        name: eachitem.channel.name,
        profile: eachitem.channel.profile_image_url,
      }))
      this.setState({
        trendingVideos: newData,
        apiStatus: apiStatusContent.success,
      })
    } else {
      this.setState({apiStatus: apiStatusContent.failure})
    }
  }

  renderSuccessViwe = () => {
    const {trendingVideos} = this.state
    return (
      <>
        <TrendingVideioList>
          {trendingVideos.map(item => (
            <TrendingCard key={item.id} videoDetails={item} />
          ))}
        </TrendingVideioList>
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

  renderTrendings = () => {
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
              <TrendingContainer bgColor={bgColor} data-testid="trending">
                <TitleContainer textColor={textColor}>
                  <IconCon>
                    <HiFire size={40} color="#ff0000" />
                  </IconCon>
                  <TitleText textColor={textColor}>Trending</TitleText>
                </TitleContainer>
                {this.renderTrendings()}
              </TrendingContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Trending
