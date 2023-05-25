import { useEffect, useState } from 'react'
import LogoTitle from '../../assets/images/logoLL.png'
// import LogoS from '../../assets/images/logo-s3.png'
import Logo from './Logo'
import {Link} from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
// import Loader from 'react-loaders'
import './index.scss'


const HomePage = () =>{
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['i', 'l', 'i', 'y', 'a']
  const jobArray = ['S', 'o', 'f','t', 'w', 'a', 'r', 'e', ' ',  'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.']
  

  useEffect (() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  
  return (
    
    <div className="container home-page">
      <div className="text-zone">
      
        <h1>
        <span className = {letterClass}>H</span>
        <span className = {`${letterClass} _12`}>i,</span>

        <br /> 
        <span className = {`${letterClass} _13`}>I</span>
        <span className = {`${letterClass} _14`}>'m</span>
        <img
              src={LogoTitle}
              alt="developer" />
              <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
              />
        <br/>
        <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
              />
         </h1>
         <h2>Full Stack Engineer </h2>
         <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
      </div>
      Logo
    </div>

  
  );
}

export default HomePage