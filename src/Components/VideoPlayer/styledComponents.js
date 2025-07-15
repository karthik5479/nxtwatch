import styled from 'styled-components'

export const VideoPlayerContainer = styled.div`
  padding: 20px;
  margin-top: 75px;
`

export const PlayerTitle = styled.p`
  font-family: Roboto;
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 5px;
  color: ${props => props.textColor};
`

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const BtnContainer = styled.p`
  background: none;
  display: flex;
`

export const Views = styled.p`
  font-family: Roboto;
  font-size: 19px;
  color: ${props => props.textColor};
`

export const Dots = styled.span`
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
  width: 25px;
  height: 25px;
  color: ${props => props.textColor};
`

export const AllBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const LikeBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  display: flex;
  align-items: center;
  color: ${props => props.color || '#64748b'};
`

export const BtnText = styled.span`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 500;
  margin-left: 6px;
  color: ${props => props.color || '#64748b'};

  @media screen and (max-width: 576px) {
    display: none;
  }
`

export const HrLine = styled.hr`
  boader: 1px solid #909090;
`

export const CommentContainer = styled.div`
  margin-top: 18px;
  display: flex;
  align-items: flex-start;
`

export const ChannelImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 20px;
  border-radius: 50px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelName = styled.p`
  font-family: Roboto;
  font-size: 18px;
  margin: 0px;
  color: ${props => props.textColor};
`

export const SubScribers = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: ${props => props.textColor};
`
export const Discription = styled.p`
  font-family: Roboto;
  font-size: 20px;
  color: ${props => props.textColor};
`
