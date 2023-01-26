import { Container } from "./style";
import logo from '../../assets/manuel.jpg'
import linke from '../../assets/LinkedIn.svg'
import insta from '../../assets/Instagram.svg'
import facebook from '../../assets/Facebook.svg'
import twitter from '../../assets/Twitter.svg'
import link from '../../assets/Group 7.svg'



export default function Main() {
  return (
    <Container>
      <div className="container-main">
        <div className="bg-img">
          <div>
            <div>
              <img src={logo} alt="" />
              <h3>Manuel Afonso</h3>
              <p>Front-end developer with a keen eye for detail and a determination to deliver the highest quality. I am very proud of my work and I always try to improve myself with each project I work on.</p>
            </div>
            <div className="midia-social">
              <a href="https://www.linkedin.com/in/manuelpauloafonso/"><img src={linke} alt="" /></a>
              <a href="https://www.instagram.com/manuel_afonso29/"><img src={insta} alt="" /></a>
              <a href="https://web.facebook.com/manuel.paulo.1253/"><img src={facebook} alt="" /></a>
              <a href="https://twitter.com/mManuelPauloAf1"><img src={twitter} alt="" /></a>
            </div>
            <div className="links">
              <ul>
                <li className="one"><a target="_blank" href=""><span>👨🏼‍💻my blog</span>  </a></li>
                <li><a target="_blank" href="https://www.instagram.com/manuel_afonso29/"><span>📝my instagram</span></a></li>
                <li><a target="_blank" href="https://github.com/ManuelPauloAfonso"><span>🎙my Github</span> </a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/manuelpauloafonso/"><span>🛍my Linkdin</span></a></li>
                <li><a target="_blank" href="https://twitter.com/mManuelPauloAf1"><span>🎥my Twitter</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </Container>
  )
}