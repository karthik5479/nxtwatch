import styled from 'styled-components'

export const TrendingContainer = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
  min-height: 100vh;
  overflow-y: auto;
  background-color: ${props => props.bgColor};

  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  height: 9vh;
  width: 100%;
  color: ${props => props.textColor};
`

export const IconCon = styled.div`
  margin-left: 12px;
  margin-right: 0px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`

export const TitleText = styled.p`
  font-family: Roboto;
  font-size: 25px;
  margin-left: 8px;
  font-weight: 500;
  color: ${props => props.textColor};
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const LoaderContainer = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  alig-items: center;
`
export const TrendingVideioList = styled.ul`
  list-style-type: none;
  margin-top: 20px;
`
