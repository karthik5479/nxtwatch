import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'
import {
  NavLink,
  CardContainer,
  ThumbNailImage,
  ContentContainer,
  ProfileImage,
  TextContainer,
  Title,
  Name,
  Dot,
  ViewsAndDate,
} from './styledComponents'

const TrendingCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbNailUrl,
    viewCount,
    publishedAt,
    name,
    profile,
  } = videoDetails

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#ffffff' : '#000000'

        return (
          <NavLink to={`/videos/${id}`}>
            <CardContainer>
              <ThumbNailImage src={thumbNailUrl} alt="video thumbnail" />
              <ContentContainer>
                <ProfileImage src={profile} alt="channel logo" />

                <TextContainer>
                  <Title textColor={textColor}>{title}</Title>
                  <Name textColor={textColor}>{name}</Name>
                  <ViewsAndDate textColor={textColor}>
                    {viewCount} views <Dot> &#8226</Dot> {publishedAt}
                  </ViewsAndDate>
                </TextContainer>
              </ContentContainer>
            </CardContainer>
          </NavLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default TrendingCard
