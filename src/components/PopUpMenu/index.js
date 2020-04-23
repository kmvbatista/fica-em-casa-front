import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <div className='dropdown'>
        <div onClick={this.showDropdownMenu} style={{ cursor: 'pointer' }}>
          <img style={{ width: '4em' }} src='./more.svg' alt='menu' />
        </div>

        {this.state.displayMenu ? (
          <ul>
            <li>
              <Link to='profile'>Meu perfil</Link>
            </li>
            <li>
              <Link to='/'>Tela principal</Link>
            </li>
            <li>
              <Link to='login' onClick={() => (document.cookie = 'undefined')}>
                Sair
              </Link>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
