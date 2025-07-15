import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'
import {
  FailureContainer,
  Img,
  Heading,
  FailurePara,
  RetryButton,
} from './styledComponents'

const FailureViwe = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const images = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        const headingColor = isDarkTheme ? '#f1f5f5' : '#1e293b'
        const paraColor = isDarkTheme ? '#e2e8f0' : '#475569'

        return (
          <FailureContainer>
            <Img src={images} alt="failure view" />
            <Heading headingColor={headingColor}>
              Oops! Something Went Wrong
            </Heading>
            <FailurePara paraColor={paraColor}>
              We are having some trouble completing your request, <br /> Please
              try again.
            </FailurePara>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default FailureViwe
