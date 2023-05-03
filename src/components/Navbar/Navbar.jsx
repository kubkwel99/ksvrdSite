/** @format */

import { Component } from 'react';
import { menuItems } from './MenuItems';
import './Navbar.css';

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className='navbarItems flex flex-row items-center text-white'>
        <h2 className='navbarLogo z-20'>@KSVRD</h2>

        <ul className={this.state.clicked ? 'navbarMenu active' : 'navbarMenu'}>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <a
                  className={item.cName}
                  href='/'>
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>

        <div
          className='menuIcons float-right'
          onClick={this.handleClick}>
          <i class={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </nav>
    );
  }
}

export default Navbar;
