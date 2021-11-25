import React, { useEffect } from "react"
import Countdown from 'react-countdown';
import Marquee from "react-fast-marquee";
import $ from "jquery";

import FLUX from '../assets/svg/flux.svg'
import SCADpro from '../assets/svg/scadpro.svg'
import '../styles/styles.scss'

export default function Home() {

  useEffect(() => {    
    $(".maskImage").mousemove(function(e) {
      var parentOffset = $(this).parent().offset();
      var relX = (e.pageX - parentOffset.left) - 100;
      var relY = (e.pageY - parentOffset.top) - 100;
    
      $('mask g').attr('transform', 'translate(' + relX + ',' + relY + ')');
    });
  });
  
  return(
    <div className="fullPage">
      <div className="box">
        <header>
          <Marquee className="marquee" gradientColor={[6,6,6]}>
            <p>A competition for innovation and growth</p>
            <p>A competition for innovation and growth</p>
            <p>A competition for innovation and growth</p>
          </Marquee>
        </header>
        <main>
          <div class="maskHolder">
            <div class="maskImage">
            <svg x="0px" y="0px" width="100%" height="100%">
              <mask id="mask">
                <radialGradient id="radialFill">
                  <stop stop-color="black" offset="0"/>
                  <stop stop-color="white" offset="1"/>
                </radialGradient>
                <rect width="100%" height="100%" x="0" y="0" fill="white" />
                <g transform="translate(0, 0)">
                  <circle cx="100" cy="100" r="100" fill="url(#radialFill)"/>
                </g>
              </mask>
              <rect x="0" y="0" class="one" mask="url(#mask)" width="100%" height="100%" />
            </svg>
            </div>
          </div>
          <div className="smallerCircle">
            <FLUX/>
            <SCADpro/>
          </div>
          <div className="centerCircle">
 
          </div>
          <div className="smallerCircle countdown">
            <p>Unlock Full Site</p>
            <Countdown date={new Date(2022, 0, 15)} />
          </div>
        </main>
        <footer>
          <ul className="links">
            <a href=""><li>Startup 2021</li></a>
            <a href=""><li>Startup Instagram</li></a>
            <a href=""><li>FLUX Instagram</li></a>
            <a href=""><li>Contact Us</li></a>
          </ul>
          <p>
            SCAD StartUp is our annual, week-long design sprint hosted by FLUX - the UX club in collaboration with SCADpro
          </p>
        </footer>
      </div>
    </div>
  ) 
}
