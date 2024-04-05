import React from 'react';
import './Notifications.css';
import { getLastestNotification } from './utils';
import closeIcon from './close-icon.png';

function Notifications() {
  return (
    <>
    <div className = "Notifications" >
    <p> Here is the list of notifications </p>
    <button style={{
      float: 'right',
      marginTop: '-70px',
      backgroundColor: '#fff',
      border: 'none',
    }} aria-label='Close'>
      <img src={closeIcon} alt='close' />
    </button>
    <ul>
      <li data-priority="default">New course available</li>
      <li data-priority="urgent">New course available</li>
      <li data-priority="urgent"
      dangerouslySetInnerHTML={{
        __html: getLastestNotification()
      }}></li>
    </ul>
    </div>
    </>
  )
};

export default Notifications;
