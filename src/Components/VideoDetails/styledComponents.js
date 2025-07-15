import styled from 'styled-components'

export const DetailsContainer = styled.div`
  margin-bottom: 60px;
  min-height: 100vh;
  overflow-y: auto;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-left: 250px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
