import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logoLL.png'
import './index.scss'



const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();
  return (
    <div className='logo-container'>'
      <img className = 'solid-logo' src={LogoS} alt="flower" />
      


      <svg xmlns="http://www.w3.org/2000/svg" 
      // xmlns:xlink="http://www.w3.org/1999/xlink" 
      width="800px" 
      height="800px" 
      viewBox="0 0 128 128" 
      aria-hidden="true" 
      role="img" 
      class="iconify iconify--noto" 
      preserveAspectRatio="xMidYMid meet">
       <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
        >
    <path
      ref={outlineLogoRef}
      d="M102.89 99.51H57.24v-82c0-1.24-1-2.24-2.24-2.24H33.11c-1.24 0-2.24 1-2.24 2.24v100.96c0 
      1.24 1 2.24 2.24 2.24h69.79c1.24 0 2.24-1 2.24-2.24v-16.72a2.251 2.251 0 0 0-2.25-2.24z" 
      fill="#40C0E7"/>
    </g>
    </svg>
    </div>
  )
}

export default Logo