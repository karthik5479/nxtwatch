import styled from 'styled-components'

export const CardContainerLi = styled.li`
  flex-direction: column;
  align-self: center;
  width: 100%;
  background: #ede9e7;
  height: 400px;
  justify-content: space-between;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    margin-right: 20px;
    width: 280px;
    margin: 10px;
  }
`
export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`

export const FailurVideoViwe = styled.div`
  background: 'none';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ThumbNailImg = styled.img`
  width: 100%;
`
export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 8px;
  margin-top: 2px;
`
export const Logos = styled.div`
  width: 40px;
  height: 40px;
  margin: 20px;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
`

export const Heading = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: ${props => props.color};
  margin-top: 6px;
`

export const ChannelName = styled.p`
  font-family: Roboto;
  font-size: 14px;
  color: ${props => props.color};
  margin: 0;
`

export const Dates = styled.p`
  font-family: Roboto;
  font-size: 14px;
  color: ${props => props.color};
`
export const Dot = styled.span`
  width: 25px;
  heigth: 25px;
  border-radius: 50px;
  padding-left: 5px;
  padding-right: 5px;
`
