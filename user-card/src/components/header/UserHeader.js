import React from 'react';
import '../../scss/header.scss';

const UserHeader = (props) => {

  return(
    <div className='header'>
      <div>
        <h2 className='name'>{props.data.name}</h2>
        <p className='username'>GitHub Handle: {props.data.login}</p>
      </div>

      <img width='260px' height='250px' src={props.data.avatar_url} alt={props.data.name} />
    </div>
  )
}

export default UserHeader;