import React from "react"
import Countdown from 'react-countdown';
import Marquee from "react-fast-marquee";

import FLUX from '../assets/svg/flux.svg'
import SCADpro from '../assets/svg/scadpro.svg'
import '../styles/styles.scss'

export default function Home() {
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
