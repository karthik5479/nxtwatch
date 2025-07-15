import {CgPlayListAdd} from 'react-icons/cg'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import TrendingCard from '../TrendingCard'

import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'
import {
  SavedContainer,
  TitleContainer,
  IconCon,
  TitleText,
  SavedList,
  NoSavedContainer,
  NoImg,
  NoHeading,
  NoPara,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
      const heading = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const para = isDarkTheme ? '#fe2e8f0' : '#475569'

      return (
        <>
          <Header />
          <NavigationBar />
          <SavedContainer bgColor={bgColor} data-testid="savedVideos">
            <TitleContainer textColor={textColor}>
              <IconCon>
                <CgPlayListAdd size={40} color="#ff0000" />
              </IconCon>
              <TitleText textColor={textColor}>Saved Videos</TitleText>
            </TitleContainer>
            {savedVideos.length > 0 ? (
              <SavedList>
                {savedVideos.map(eachitem => (
                  <TrendingCard key={eachitem.id} videoDetails={eachitem} />
                ))}
              </SavedList>
            ) : (
              <NoSavedContainer>
                <NoImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                  alt="no saved videos"
                />
                <NoHeading heading={heading}>No saved videos found</NoHeading>
                <NoPara para={para}>
                  You can save your videos while watching them
                </NoPara>
              </NoSavedContainer>
            )}
          </SavedContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)
export default SavedVideos
