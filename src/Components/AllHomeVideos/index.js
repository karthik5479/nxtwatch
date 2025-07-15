import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'
import CardsHome from '../CardsHome'

import {
  VideoCard,
  FailurVideoViwe,
  NoSearchImg,
  NoHeading,
  NoPara,
  ReTryButton,
} from './styledComponents'

const AllHomeVideos = props => {
  const {homeContent, onRetry} = props
  const listLength = homeContent.length

  const onClickRetry = () => {
    onRetry()
  }
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f5' : '#1e293b'
        const paraColor = isDarkTheme ? '#e2e8f0' : '#475569'

        return listLength !== 0 ? (
          <VideoCard>
            {homeContent.map(eachitem => (
              <CardsHome key={eachitem.id} cardDetails={eachitem} />
            ))}
          </VideoCard>
        ) : (
          <FailurVideoViwe>
            <NoSearchImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoHeading headingColor={headingColor}>
              No Search Results Found
            </NoHeading>
            <NoPara paraColor={paraColor}>
              Try different key words or remove search filter
            </NoPara>
            <ReTryButton type="button" onClick={onClickRetry}>
              Retry
            </ReTryButton>
          </FailurVideoViwe>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default AllHomeVideos
