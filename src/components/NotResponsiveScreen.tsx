import React from 'react';

import monkey from '../assets/monkey.jpg';

const NotResponsiveScreen = () => {
  return (
  <div className="not-responsive">

    <img src={monkey} alt="Monkey"/>
    <p>Que ironia... esta página não é adaptável! 🙊</p>
  </div>)
}

export default NotResponsiveScreen;