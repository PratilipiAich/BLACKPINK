import React from 'react'
import "../styles/Footer.css"
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
    return (
        <div className="footer">
            <a className="footer-links" target="_blank" href="https://www.instagram.com/blackpinkofficial/?hl=en"><InstagramIcon style={{height: "30px", width: "30px"}}/></a>
            <a className="footer-links" target="_blank" href="https://www.facebook.com/BLACKPINKOFFICIAL/"><FacebookIcon style={{height: "30px", width: "30px"}} /></a>
            <a className="footer-links" target="_blank" href="https://twitter.com/BLACKPINK"><TwitterIcon style={{height: "30px", width: "30px"}}/></a>
            <a className="footer-links" target="_blank" href="https://www.youtube.com/channel/UCOmHUn--16B90oW2L6FRR3A"><YouTubeIcon style={{height: "30px", width: "30px"}}/></a>
            <a className="footer-links" target="_blank" href="https://www.vlive.tv/channel/F001E5">VLIVE</a>
        </div>
    )
}

export default Footer
