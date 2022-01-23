import React from 'react';
import Header from './header';
import Typewriter from 'typewriter-effect';


function Homepage() {
  return <div>
    <Header />
    <div className="typewriter">
      <Typewriter
        options={{
          strings: ['Shitify', 'is really cool and awesome, we totally dont log your ip and address.'],
          autoStart: true,
          loop: true,
          delay: 50,
        }}
      />
    </div>
    <div className="homeWrapper">
      <h1 className='text'>to be honest i dont know what to add here so just have this funny cat</h1>
      <img className='cat' src="https://media.discordapp.net/attachments/778785701751029812/928126688452300841/520CB9A5-6889-4FEA-A7EA-76BE87D98471.gif" alt="cat"/>
    </div>
  </div>
}

export default Homepage;
