import React from 'react';
import './header.css'
import {Link} from 'react-router-dom'

export const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-content'>
        <Link className='header-logo' to='/'>
          <img
            src='https://alan.app/static/alan-logo-medium.79f960a7.svg'
            alt=''
          />
        </Link>
        <div className="header-menu">
            <ul className="header-list">
                <li className="header-item">Platform</li>
                <li className="header-item">Integrations</li>
                <li className="header-item">Company</li>
                <li className="header-item">Docs</li>
                <li className="header-item">Entertaiment</li>
            </ul>
        </div>
      </div>
    </div>
  );
};
