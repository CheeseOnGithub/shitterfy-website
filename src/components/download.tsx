import React from 'react';
import { FaDownload } from 'react-icons/fa';
import Header from './header';
import { saveAs } from 'file-saver';

function saveFile() {
  saveAs(
    "https://c.tenor.com/GfFnwdzdTYoAAAAS/ja.gif",
    "sexer.gif"
  );
}

function Download() {
  return <div>
    <Header />
    <button className='button' id='download-button' onClick={saveFile}> <FaDownload /> <span> DOWNLOAD FREE AMONG US!!! </span></button>
  </div>;
}

export default Download;


