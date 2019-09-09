import React from 'react';
import '../../scss/description.scss';

const UserDescription = (props) => {
  return(
    <div className='description'>
      <p>Followers {props.data.followers}</p>
      <p>Following {props.data.following}</p>
      <p>Public Repos: {props.data.public_repos}</p>
    </div>
  )
}

export default UserDescription;