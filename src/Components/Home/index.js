import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import FailureViwe from '../FailureViwe'
import AllHomeVideos from '../AllHomeVideos'
import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'

import {
  HomeContainer,
  CardContainer,
  BannerLeft,
  Img,
  Text,
  Button,
  BannerRight,
  CloseButton,
  SearchContainer,
  SearchInput,
  SearchIconContainer,
  LoaderContainer,
} from './styledComponents'

const apiStatusContent = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Home extends Component {
  state = {
    bannerDisplay: 'flex',
    searchInput: '',
    apiStatus: apiStatusContent.initial,
    allVideos: [],
  }

  componentDidMount() {
    this.getContent()
  }

  getContent = async () => {
    this.setState({
      apiStatus: apiStatusContent.inProgress,
    })
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const renderData = await response.json()
    if (response.ok === true) {
      const updatedData = renderData.videos.map(eachitem => ({
        id: eachitem.id,
        title: eachitem.title,
        thumbNailUrl: eachitem.thumbnail_url,
        name: eachitem.channel.name,
        profile: eachitem.channel.profile_image_url,
        viewCount: eachitem.view_count,
        publishedAt: eachitem.published_at,
      }))
      this.setState({
        allVideos: updatedData,
        apiStatus: apiStatusContent.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusContent.failure,
      })
    }
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getContent)
  }

  onClickClose = () => {
    this.setState({bannerDisplay: 'none'})
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearch = () => {
    this.getContent()
  }

  renderLoader = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureViwe = () => <FailureViwe onRetry={this.onRetry} />

  renderSuccessViwe = () => {
    const {allVideos} = this.state

    return (
      <>
        <AllHomeVideos homeContent={allVideos} onRetry={this.onRetry} />
      </>
    )
  }

  renderHomeContent = () => {
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
    const {bannerDisplay, searchInput} = this.state
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
          const display = bannerDisplay === 'flex' ? 'flex' : 'none'

          return (
            <>
              <Header />
              <NavigationBar />
              <HomeContainer
                data-testid="home"
                bgColor={bgColor}
                style={{paddingTop: '12vh'}}
              >
                {bannerDisplay === 'flex' && (
                  <CardContainer data-testid="banner" display={display}>
                    <BannerLeft>
                      <Img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <Text>
                        Buy Nxt Watch Premium prepaid plans with <br /> UPI
                      </Text>
                      <Button type="button">GET IT NOW</Button>
                    </BannerLeft>
                    <BannerRight>
                      <CloseButton
                        data-testid="close"
                        onClick={this.onClickClose}
                      >
                        <AiOutlineClose size={25} />
                      </CloseButton>
                    </BannerRight>
                  </CardContainer>
                )}

                <SearchContainer>
                  <SearchInput
                    type="search"
                    placeholder="Search"
                    value={searchInput}
                    color={textColor}
                    onChange={this.onChangeInput}
                  />

                  <SearchIconContainer
                    as="button"
                    type="button"
                    data-testid="searchButton"
                    onClick={this.getSearch}
                  >
                    <AiOutlineSearch size={30} />
                  </SearchIconContainer>
                </SearchContainer>
                {this.renderHomeContent()}
              </HomeContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Home
