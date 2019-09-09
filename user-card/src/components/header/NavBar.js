import React from 'react';
import { Button } from 'antd';

import '../../scss/nav.scss';

const NavBar = (props) => {
  
  return(

  <div className='nav-bar'>
    <nav style={{'backgroundColor': 'black'}}>
      <Button ghost type='circle' icon="menu"/>
    </nav>
  </div>
  )
}

export default NavBar;