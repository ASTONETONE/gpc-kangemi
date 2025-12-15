import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        
        <div className='footer-container'>
        
        
        <div>
          <p>quick links:</p> 
            <div  className='quick-links'>
            <li className='box'><a href='https://www.youtube.com/@GOSPELPENTECOSTALCHURCHKAN-q9o' target='_blank'><img src='./youtube.png' width='70px' />Youtube</a></li>
            <li className='box'><a href='https://www.tiktok.com/@gospel.pentecosta/' target='_blank'><img src='./tiktok.png' />TikTok</a></li>
            <li className='box' onClick={(() => alert('No link at the moment, try again later!!!'))}><a href='#' target='_blank'><img src='./instagram.png' />Instagram</a></li>
            <li className='box'><a href='https://www.facebook.com/groups/1303575817178331/?ref=share&mibextid=NSMWBT' target='_blank'><img src='./facebook.png' />Facebook</a></li>
            </div>
        </div>
       
        
            <div className='contact'>
              <p>contact us: </p>
        <p className='author'><img src='./phone.png' width='30px' /><span>+254723529944</span></p>
        <p className='author'><a href='mailto:isaacmachinda415@gmail.com?Subject=Gospel%20Pentocostal%20Church' target='_blank'><img src='./gmail.png' width='20px' /><span>isaacmachinda415@gmail.com</span></a></p>
        
         <p className='author'><img src="./location.png" width='30px' /><span>Kangemi Mau Mau</span></p>
        </div>
         </div>

        <p className='author'>Powered by: <span className='author-name'>Astonetone</span></p>
        <div className='footer-text'>
            <h3> &copy; 2025 Gospel Pentecostal Church Kangemi. All Rights Reserved</h3>
        </div>
       
        
    </div>
  )
}

export default Footer