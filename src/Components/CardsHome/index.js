import {Link} from 'react-router-dom'
import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'
import './index.css'
import {
  CardContainerLi,
  ThumbNailImg,
  ContentContainer,
  ProfileImg,
  TextContainer,
  Heading,
  Logos,
  ChannelName,
  Dates,
  Dot,
} from './styledComponents'

const CardsHome = props => {
  const {cardDetails} = props
  const {
    id,
    title,
    thumbNailUrl,
    name,
    profile,
    viewCount,
    publishedAt,
  } = cardDetails

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <Link to={`/videos/${id}`} className="nav-link">
            <CardContainerLi>
              <ThumbNailImg src={thumbNailUrl} alt="video thumbnail" />
              <ContentContainer>
                <Logos>
                  <ProfileImg src={profile} alt="channel logo" />
                </Logos>

                <TextContainer>
                  <Heading color={textColor}>{title}</Heading>
                  <ChannelName color={textColor}>{name}</ChannelName>
                  <Dates>
                    {viewCount} views<Dot>&#8226;</Dot>
                    {publishedAt}
                  </Dates>
                </TextContainer>
              </ContentContainer>
            </CardContainerLi>
          </Link>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default CardsHome
