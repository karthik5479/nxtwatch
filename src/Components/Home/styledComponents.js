import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
  margin-bottom: 60px;
  overflow-y: auto;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 991px) {
    margin-left: 250px;
  }
`

export const CardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  height: 200px;
  justify-content: space-between;
  padding: 20px;
  display: ${props => props.display};
`

export const BannerLeft = styled.div`
  width: 50%;
`

export const BannerRight = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Img = styled.img`
  width: 150px;
  height: 40px;
  margin: 6px;
  @media screen and (max-width: 576px) {
    width: 80px;
    height: 20px;
  }
`

export const Text = styled.p`
  font-family: Roboto;
  font-weight: 500;
  font-size: 20px;
  color: #000000;
  margin: 6px;
  @media screen and (max-width: 576px) {
    font-size: 15px;
  }
`
export const Button = styled.button`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: solid 1px #000000;
  background: none;
  color: #000000;
  border-radius: 5px;
  margin: 6px;
`
export const CloseButton = styled.button`
  border: none;
  background: none;
  height: 30px;
`
export const SearchContainer = styled.div`
  display: flex;
  border: solid 1px #909090;
  width: 260px;
  height: 40px;
  margin: 20px;
  outline: 'none';
  border-radius: 6px;
  @media screen and (min-width: 576px) {
    width: 40%;
  }
`

export const SearchIconContainer = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SearchInput = styled.input`
  background: 'none';
  border: 'none';
  width: 100%;
  outline: 'none';
  padding: 6px;
  font-family: 'Roboto';
  color: ${props => props.color};
`

export const LoaderContainer = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  alig-items: center;
`
