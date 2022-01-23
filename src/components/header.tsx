import React from 'react';
import { Link } from 'react-router-dom';
import {AiFillHome, AiFillInfoCircle, AiFillDownCircle} from 'react-icons/ai';
import { FaDownload } from 'react-icons/fa';

const Header = () => {
  return <div>
      <header>
        <div className="hdr">
          <h1 className="title">shitify</h1>
          <h2 className='subtitle'>the tool you dont need and wont ever need</h2>
          <div className="buttons">
            <Link to='/' className="button"> <AiFillHome /> <span> home </span></Link>
            <Link to='/about' className="button"> <AiFillInfoCircle /> <span> about </span></Link>
            <Link to='/download' className="button"> <FaDownload /> <span> download </span></Link>
          </div>
        </div>
      </header>
  </div>;
};

export default Header;
