import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'

import {
  VideoPlayerContainer,
  PlayerTitle,
  StatusContainer,
  Views,
  Dots,
  AllBtnContainer,
  BtnContainer,
  LikeBtn,
  BtnText,
  HrLine,
  CommentContainer,
  ChannelImage,
  InfoContainer,
  ChannelName,
  SubScribers,
  Discription,
} from './styledComponents'

const VideoPlayer = props => {
  const {
    videoDetails,
    onClickLiked,
    onClickDisLiked,
    onLiked,
    onDisLiked,
  } = props

  const onClickLike = () => {
    onClickLiked()
  }

  const onClickDisLike = () => {
    onClickDisLiked()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, addVideo, savedVideos} = value

        const textColor = isDarkTheme ? '#ffffff' : '#000000'

        let isSaved
        const index = savedVideos.findIndex(each => each.id === videoDetails.id)
        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        const saveIcon = isSaved ? '#2563eb' : '#64748b'

        const onClickSave = () => {
          addVideo(videoDetails)
        }

        return (
          <VideoPlayerContainer>
            <ReactPlayer
              url={videoDetails.videoUrl}
              controls
              width="100%"
              height="68vh"
            />
            <PlayerTitle textColor={textColor}>
              {videoDetails.title}
            </PlayerTitle>
            <StatusContainer>
              <Views textColor={textColor}>
                {videoDetails.viewCount} views
                <Dots textColor={textColor}>&#8226;</Dots>
                {videoDetails.publishedAt}
              </Views>

              <AllBtnContainer>
                <BtnContainer>
                  <LikeBtn
                    type="button"
                    color={onLiked ? '#2563eb' : '#64748b'}
                    onClick={onClickLike}
                    data-testid="likeButton"
                  >
                    <AiOutlineLike
                      size={30}
                      color={onLiked ? '#2563eb' : '#64748b'}
                    />
                    <BtnText color={onLiked ? '#2563eb' : '#64748b'}>
                      Like
                    </BtnText>
                  </LikeBtn>
                </BtnContainer>

                <BtnContainer>
                  <LikeBtn
                    type="button"
                    color={onDisLiked ? '#2563eb' : '#64748b'}
                    onClick={onClickDisLike}
                    data-testid="dislikeButton"
                  >
                    <AiOutlineDislike
                      size={30}
                      color={onDisLiked ? '#2563eb' : '#64748b'}
                    />
                    <BtnText color={onDisLiked ? '#2563eb' : '#64748b'}>
                      Dislike
                    </BtnText>
                  </LikeBtn>
                </BtnContainer>

                <BtnContainer>
                  <LikeBtn type="button" color={saveIcon} onClick={onClickSave}>
                    <BiListPlus size={30} />
                    <BtnText color={saveIcon}>
                      {isSaved ? 'Saved' : 'Save'}
                    </BtnText>
                  </LikeBtn>
                </BtnContainer>
              </AllBtnContainer>
            </StatusContainer>
            <HrLine />
            <CommentContainer>
              <ChannelImage src={videoDetails.profile} alt="channel logo" />
              <InfoContainer>
                <ChannelName textColor={textColor}>
                  {videoDetails.name}
                </ChannelName>
                <SubScribers textColor={textColor}>
                  {videoDetails.subScriber} Subscribers
                </SubScribers>
                <Discription textColor={textColor}>
                  {videoDetails.deScription}
                </Discription>
              </InfoContainer>
            </CommentContainer>
          </VideoPlayerContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default VideoPlayer
