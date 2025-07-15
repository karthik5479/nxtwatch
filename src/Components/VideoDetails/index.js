import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import FailureViwe from '../FailureViwe'
import VideoPlayer from '../VideoPlayer'
import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'

import {LoaderContainer, DetailsContainer} from './styledComponents'

const apiStatusContent = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class VideoDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusContent.initial,
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({
      apiStatus: apiStatusContent.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/videos/${id}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()

      const item = data.video_details

      const updatedData = {
        id: item.id,
        title: item.title,
        videoUrl: item.video_url,
        thumbNailUrl: item.thumbnail_url,
        name: item.channel.name,
        profile: item.channel.profile_image_url,
        subScriber: item.channel.subscriber_count,
        viewCount: item.view_count,
        publishedAt: item.published_at,
        deScription: item.description,
      }

      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusContent.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusContent.failure,
      })
    }
  }

  onRetry = () => {
    this.getVideoDetails()
  }

  onClickLiked = () => {
    this.setState(prev => ({
      isLiked: !prev.isLiked,
      isDisliked: prev.isLiked ? prev.isDisliked : false,
    }))
  }

  onClickDisLiked = () => {
    this.setState(prev => ({
      isDisliked: !prev.isDisliked,
      isLiked: prev.isDisliked ? prev.isLiked : false,
    }))
  }

  renderLoader = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureViwe = () => <FailureViwe onRetry={this.onRetry} />

  renderSuccessViwe = () => {
    const {videoDetails, isLiked, isDisliked} = this.state

    return (
      <VideoPlayer
        videoDetails={videoDetails}
        onClickLiked={this.onClickLiked}
        onClickDisLiked={this.onClickDisLiked}
        onLiked={isLiked}
        onDisLiked={isDisliked}
      />
    )
  }

  renderVideoDetails = () => {
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

          return (
            <>
              <Header />
              <NavigationBar />
              <DetailsContainer
                data-testid="videoItemDetails"
                bgColor={bgColor}
              >
                {this.renderVideoDetails()}
              </DetailsContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default VideoDetails
