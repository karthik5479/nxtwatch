import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Loginpage from './Components/Loginpage'
import Home from './Components/Home'
import Trending from './Components/Trending'
import Gaming from './Components/Gaming'
import SavedVideos from './Components/SavedVideos'
import NotFound from './Components/NotFound'
import VideoDetails from './Components/VideoDetails'
import ProtectedRoute from './Components/ProtectedRoute'
import ThemeAndVideoContext from './Context/ThemeAndVideoContext'

import './App.css'

class App extends Component {
  state = {
    savedVideos: [],
    isDarkTheme: false,
    activeTab: 'Home',
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  addVideo = video => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(item => item.id === video.id)

    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      const updatedVideos = savedVideos.filter(item => item.id !== video.id)
      this.setState({savedVideos: updatedVideos})
    }
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  removeVideo = id => {
    const {savedVideos} = this.state
    const newSavedVideos = savedVideos.filter(item => item.id !== id)
    this.setState({savedVideos: newSavedVideos})
  }

  render() {
    const {activeTab, isDarkTheme, savedVideos} = this.state

    return (
      <ThemeAndVideoContext.Provider
        value={{
          isDarkTheme,
          activeTab,
          savedVideos,
          changeTab: this.changeTab,
          addVideo: this.addVideo,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Loginpage} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeAndVideoContext.Provider>
    )
  }
}

export default App
