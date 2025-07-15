import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'
import {
  NavLink,
  CardContainer,
  Image,
  TextContainer,
  Title,
  ViewsAndDate,
} from './styledComponents'

const GamingCard = props => {
  const {gamingVideosDetails} = props
  const {id, title, thumbNailUrl, viewCount} = gamingVideosDetails
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#ffffff' : '#000000'

        return (
          <NavLink to={`/videos/${id}`}>
            <CardContainer>
              <Image src={thumbNailUrl} alt="video thumbnail" />
              <TextContainer>
                <Title textColor={textColor}>{title}</Title>
                <ViewsAndDate textColor={textColor}>
                  {viewCount} Watching Worlwide
                </ViewsAndDate>
              </TextContainer>
            </CardContainer>
          </NavLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default GamingCard
