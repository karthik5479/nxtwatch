import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkTheme: false,
  activeTab: 'Home',
  savedVideos: [],
  changeTab: () => {},
  addVideo: () => {},
  toggleTheme: () => {},
})
export default ThemeAndVideoContext
