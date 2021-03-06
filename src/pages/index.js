import React, { useEffect, useState } from "react"
import Countdown from 'react-countdown';
import Marquee from "react-fast-marquee";
import $ from "jquery";

import FLUX from '../assets/svg/flux.svg'
import SCADpro from '../assets/svg/scadpro.svg'
import AstralCircle from '../assets/svg/astralCircle.svg'
import Logo from '../assets/images/logo.png'
import '../styles/styles.scss'

const DesktopCircles = () => (
  <>
    <div className="smallerCircle">
        <FLUX/>
        <SCADpro/>
      </div>
      <div className="centerCircle">
        <AstralCircle/>
        <img src={Logo}/> 
      </div>
      <a href="https://forms.gle/x3XDcaPtxvhrPmGk6" className="smallerCircle countdown">
        <p>Click Here</p>
        <h2>Sign Up Now</h2>
      </a>
  </>
);

const PortableCircles = () => (
  <>
    <div className="centerCircle portableCenterCircle">
      <AstralCircle/>
      <img src={Logo}/>
    </div>
    <div className="portableCircles">
      <div className="smallerCircle">
        <FLUX/>
        <SCADpro/>
      </div>
      <a href="https://forms.gle/x3XDcaPtxvhrPmGk6" className="smallerCircle countdown">
        <p>Click Here</p>
        <h2>Sign Up Now</h2>
      </a>
    </div>
  </>
);

export default function Home() {
  const [pageWidth, setPageWidth] = useState();
  const [pageHeight, setPageHeight] = useState();

  useEffect(() => {
    setPageWidth(window.innerWidth);
    setPageHeight(window.innerHeight);

    function handleResize() {
      setPageWidth(window.innerWidth);
      setPageHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    $("main").mousemove(function(e) {
      var parentOffset = $(this).parent().offset();
      var relX = (e.pageX - parentOffset.left) - 100;
      var relY = (e.pageY - parentOffset.top) - 100;
    
      $('mask g').attr('transform', 'translate(' + relX + ',' + relY + ')');
    });
  });

  function determineType(w, h) {
    if(w < 1000) {
      return(<PortableCircles/>)
    } else {
      if(w < 1100 && h > 900) {
        return(<PortableCircles/>)
      }
      return(<DesktopCircles/>)
    }
  }
  
  return(
    <div className="fullPage">
      <div className="box">
        <header>
          <Marquee className="marquee" gradientColor={[6,6,6]}>
            <p>A competition for innovation and growth</p>
            <p>A competition for innovation and growth</p>
            <p>A competition for innovation and growth</p>
            <p>A competition for innovation and growth</p>
            <p>A competition for innovation and growth</p>
          </Marquee>
        </header>

        <main>
          <div className="maskHolder">
            <div className="maskImage">
              <svg x="0px" y="0px" width="100%" height="100%">
                <mask id="mask">
                  <radialGradient id="radialFill">
                    <stop stopColor="black" offset="0"/>
                    <stop stopColor="white" offset="1"/>
                  </radialGradient>
                  <rect width="10000px" height="5000px" x="0" y="0" fill="white" />
                  <g transform="translate(0, 0)">
                    <circle cx="100" cy="100" r="100" fill="url(#radialFill)"/>
                  </g>
                </mask>
                <rect x="0" y="0" className="one" mask="url(#mask)" width="100%" height="100%" />
              </svg>
            </div>
          </div>
          {determineType(pageWidth, pageHeight)}
        </main>

        <footer>
          <ul className="links">
            <a href="https://2021.scadstartup.com" target="_blank"><li>Startup 2021</li></a>
            <a href="https://www.instagram.com/scadstartup/" target="_blank"><li>Startup Instagram</li></a>
            <a href="https://www.instagram.com/scadflux/" target="_blank"><li>FLUX Instagram</li></a>
            <a href="https://discord.gg/2b2XV3dWfK"><li>Discord</li></a>
          </ul>
          <p>
            SCAD StartUp is an annual, week-long design sprint competition hosted by FLUX &#8212; SCAD's UX club &#8212; in collaboration with SCADpro
          </p>
        </footer>
      </div>
    </div>
  ) 
}