// Write your code here
import {Component} from 'react'

class ConfigurationController extends Component {
  state = {
    showContent: true,
    showLeftNavbar: true,
    showRightNavbar: true,
  }

  onClickContent = event => {
    if (event.target.checked) {
      this.setState({
        showContent: true,
        showLeftNavbar: false,
        showRightNavbar: false,
      })
    }
  }

  onClickLeftNavbar = event => {
    if (event.target.checked) {
      this.setState({
        showContent: false,
        showLeftNavbar: true,
        showRightNavbar: false,
      })
    }
  }

  onClickRightNavbar = event => {
    if (event.target.checked) {
      this.setState({
        showContent: false,
        showLeftNavbar: false,
        showRightNavbar: true,
      })
    }
  }

  render() {
    return (
      <div className="config-cont">
        <h1 className="heading">Layout</h1>
        <input
          className="input"
          type="checkbox"
          onClick={this.onClickContent}
        />
        <label className="label" id="input" htmlFor="content">
          Content
        </label>
        <input
          className="input"
          type="checkbox"
          id="leftnavbar"
          onClick={this.onClickLeftNavbar}
        />
        <label className="label"  htmlFor="leftnavbar">
          Left Navbar
        </label>
        <input
          className="input"
          type="checkbox"
          id="rightnavbar"
          onClick={this.onClickRightNavbar}
        />
        <label className="label" id="rightnavbar" htmlFor="rightnavabr">
          Right Navbar
        </label>
      </div>
    )
  }
}
export default ConfigurationController
