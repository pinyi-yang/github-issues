import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => (
  <div className='header'>
    <nav>
      <Link to='/' className='link'>Home</Link> | {' '}
      <Link to='/issues' className='link'>Issues</Link> | {' '}
    </nav>
  </div>
)

export default Header;