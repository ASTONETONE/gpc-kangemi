import React, { useState } from 'react';

const Navbar= () => {

    const [open, setOpen] = useState('');

  return (
    <div className='navbar'>
        <div className='logo-container'>
            <div className='logo-image'>
                <img src='./gpclogonobg.png' width='100px' />
            </div>
            <div>
                <span className='main-text'>Gospel</span>
                <span className='main-text'>Pentecostal</span>
                <span className='main-text'>Church</span>
                <span className='sub-text'>Kangemi</span>
            </div>
            </div>

            <div className='toggle-menu' onClick={() => setOpen(!open)}>☰</div>

            <ol className={`navbar-links ${open ? 'open':''}`}>
                <div className='close-toggle'><div className='toggle-menu' onClick={() => setOpen(!open)}><button>X</button></div></div>
                <li><a href='#' target='_blank'>Home</a></li>
                <li><a href='#' target='_blank'>About</a></li>
                <li><a href='https://www.youtube.com/@GOSPELPENTECOSTALCHURCHKAN-q9o' target='_blank'>Youtube</a></li>
                <li><a href='https://www.tiktok.com/@gospel.pentecostal/' target='_blank'>TikTok</a></li>
                <li onClick={(() => alert('No link at the moment, try again later!!!'))}><a href='#' target='_blank'>Instagram</a></li>
                <li><a href='https://www.facebook.com/groups/1303575817178331/?ref=share&mibextid=NSMWBT' target='_blank'>Facebook</a></li>
                <li><a href='mailto:isaacmachinda47@gmail.com?Subject=Gospel%20Pentecostal%20Church' target='_blank'>Contact</a></li>
                <li onClick={(() => alert('Good Bye 🙏🙏🙏'))}><a href='https://www.google.com' target='_blank'>Exit</a></li>
            </ol>
        
    </div>
  );
}

export default Navbar
