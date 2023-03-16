// Write your code here

import {Component} from 'react'

class Body extends Component {
  render() {
    return (
      <div className="body-cont">
        <div className="left-menu">
          <h1 className="heading">Left Navbar Menu</h1>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
          </ul>
        </div>
        <div className="content">
          <h1 className="heading">Content</h1>
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adiplscing elit, sed do
            elusmod tempor incldidunt ut labore et Ut enim ad minim veniam.
          </p>
        </div>
        <div className="right">
          <h1 className="heading">Right Navbar</h1>
          <div className="para1">
            <p className="para1">Ad 1</p>
          </div>
          <div className="para2">
            <p className="para2">Ad 2</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Body
