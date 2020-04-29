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
              <Link to='need-help-options'>Preciso de ajuda</Link>
            </li>
            <li>
              <Link to='can-help-options'>Quero ajudar</Link>
            </li>
            <li>
              <Link to='friends'>Meus amigos</Link>
            </li>
            <li>
              <Link to='/'>Tela inicial</Link>
            </li>
            <li>
              <Link to='login'>Sair</Link>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
