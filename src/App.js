import {Component} from 'react'
import ConfigurationContext from './context/ConfigurationContext'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {
    showContent: true,
    showLeftNavbar: true,
    showRightNavbar: true,
  }

  onToggleShowContent = showContent => {
    this.setState({
      showContent: true,
      showLeftNavbar: false,
      showRightNavbar: false,
    })
  }

  onToggleShowContent = showLeftNavbar => {
    this.setState({
      showContent: false,
      showLeftNavbar: true,
      showRightNavbar: false,
    })
  }

  onToggleShowContent = showRightNavbar => {
    this.setState({
      showContent: false,
      showLeftNavbar: false,
      showRightNavbar: true,
    })
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state

    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <ConfigurationController />
        <Layout />
      </ConfigurationContext.Provider>
    )
  }
}

export default App
