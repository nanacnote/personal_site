import { useEffect, useState } from "react";
import { Footer, useBreakPoint } from "./components";
import { gsap } from "gsap";
import { TextPlugin } from 'gsap/dist/TextPlugin';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Container, Row, Col, Badge } from 'react-bootstrap';
import CountUp from 'react-countup';
import {
  FaAlignJustify,
  FaTimes,
  FaDesktop, 
  FaBoxOpen, 
  FaGithub,
  FaCubes,
  FaNpm,
  FaServer,
  FaPalette,
  FaChrome,
  FaRocket,
  FaPlug,
  FaDatabase,
  FaWrench,
  FaUserCog,
  FaNetworkWired,
  FaTachometerAlt,
  FaLock,
  FaSmile,
  FaSmileWink,
} from 'react-icons/fa';

export const Home = ({ post }): JSX.Element => {

    //sider icons object 
    const siderLinks = [
      {
        "IDE": <FaDesktop/>,
        "Containers":<FaBoxOpen/>, 
        "Git":<FaGithub/>,
        "Stack":<FaCubes/>,
        "npm":<FaNpm/>,
        "Hosting":<FaRocket/>
      },
      {
        "Design": <FaPalette/>,
        "Front-end": <FaChrome/>,
        "Microservices": <FaServer/>,
        "API": <FaPlug/>, 
        "Database": <FaDatabase/>,
      },
      {
        "Functionality": <FaWrench/>,
        "Usability": <FaUserCog/>,
        "Interface": <FaNetworkWired/>,
        "Performance": <FaTachometerAlt/>,
        "Security": <FaLock/>
      }
    ]

  // instantiate gsap
  gsap.registerPlugin(TextPlugin, ScrollTrigger);
  const tl_landing = gsap.timeline();
  const tl_textVid = gsap.timeline();

  //instantiate useBreakPoint hook
    const cur_viewport = useBreakPoint()

  //all useState hooks below
  //controls state of sider in small media
  const [siderState, setsiderState] = useState(false)
  const [ siderShowHideIcon, setsiderShowHideIcon] = useState(<FaAlignJustify/>)
  //controls the loading transition animation
  const [ landingTransition, setlandingTransition] = useState(true)

  const themeChanger = (event)=> {
    const themeProvider = document.querySelector(".theme-provider")
    themeProvider.className = `theme-provider theme-${event.target.innerText.toLowerCase()}`
  }

    // useEffect for other activities on page other than gsap
  useEffect(() => {
      siderState? setsiderShowHideIcon(<FaTimes/>) : setsiderShowHideIcon(<FaAlignJustify/>)

  }, [siderState])

  // gsap scrolltrigger config
  useEffect(() => {
    // gsap.to(".main-pic-wrapper",{
    //     scrollTrigger: {
    //       trigger: ".main-pic-wrapper",
    //       // markers: true,
    //       start: "top center",
    //       toggleActions: "restart none none restart"
    //     },
    //     duration: 5, 
    //     x: 1000
    //   })
  }, [landingTransition])

  // gsap text video
  useEffect(() => {
    tl_textVid
    .to(".grad-hr", {duration: 2, width: "100%", ease: "bounce.out",}, "+=2.5")
    .to(".main-text-row", {duration: 2, height:"350px", width: "100%", paddingTop: "10px", ease: "bounce.out"}, "-=3")
    .to(".current-col, .theme-col", { duration: 0, opacity: 1}, "-=1")
    .from(".current-col-items, .theme-col-items", { duration: 1, opacity: 0, y: -20, stagger: 0.5}, "-=1")
    .from(".main-pic-wrapper", {duration: 2, opacity: 0, rotate: 1080, x: -2000, stagger: 0.5, ease: "elastic.out(1,0.30)"},"-=1")
    .to(".main-pic-wrapper", {duration: 0.25, rotate: 2160, stagger: 0.05,}, "-=0.25")
    .to(".main-pic-header, .main-numbers-header", { duration: 1, opacity: 1})
    .from(".main-pic-header, .main-numbers-header", { duration: 1, y: -20}, "-=1")
    .set(".main-text-1",{width: "100%", height: "100%"}, "-=1")
    .set(".t-01", {y: "-500%", display: "inline", fontSize: "1rem", opacity: 0})
    .to(".t-01", {duration: 2, y:"0%", fontSize: "3rem", opacity: 1, ease: "bounce.out"})
    .to(".t-01", {duration: 0.25, transform: "rotate(15deg)", ease: "elastic.out(1,0.30)"})
    .to(".t-01", {duration: 0.25, transform: "rotate(-15deg)", ease: "elastic.out(1,0.30)"})
    .set(".t-01", {display: "none"})
    .set(".t-02", {display: "inline", fontSize: "3rem", y: "0%"})
    .set(".t-02", {display: "none"}, "+=0.5")
    .to(".t-01", {display: "inline"})
    .to(".t-01", {duration: 1, transform:"rotate(-90deg)", x: "-500%", opacity: 0, ease: "expo.out"}, "-=0.25")
    .set(".t-01", {display: "none"})
    .set(".main-text-1", {width: "0%", height: "0%", borderBottom: "solid 5px"})
    .to(".main-text-1", {duration: 0.5, width: "10%", opacity: 0.5})
    .to(".main-text-1", {duration: 0.5, transform:"rotate(-90deg)", opacity: 0.75})
    .to(".main-text-1", {duration: 1,  width: "15%", borderBottom: "solid 7.5px", opacity: 1})
    .set(".t-03", {display: "inline"})
    .fromTo(".t-03", {x: "-150%", opacity: 0}, {duration: 2, x:"0%", opacity: 1, text: { value: "hello", delimiter: " " }, ease: "bounce.out"})
    .to(".main-text-1, .main-text-2, .main-text-3", {x: "-20%"}, "-=2")
    .fromTo(".t-03", {x: "-150%", opacity: 0}, {x:"0%", opacity: 1, text: { value: "<span style='font-size: 2vmax'>&nbsp&nbsp i am</span></br> <span style='font-size: 4vmax; color: #40a9ff' >Owusu</span>", }, ease: "none"}, "+=1")
    .to(".main-text-1, .t-03", {duration: 2.5, opacity: 0})
    .set(".main-text-1, .main-text-2, .main-text-3", {border: "none", width: "auto", height: "auto", opacity: 1, x: 0, y: 0})
    .set(".main-text-2", {opacity: 1, width: "100%", height: "100%"})
    .to(".t-04", {duration: 0.5, opacity: 1, position: "absolute", display: "inline", fontWeight: "bold", fontSize: "4vmax", top: 0, color:"white", ease: "elastic.out(1,0.30)"})
    .to(".t-04", {duration: 0.5, fontSize: "2vmax"})
    .to(".main-text-heart", {duration: 2, transform: "rotateY(180deg)", repeat: -1}, "-=0.5")
    .to(".t-05", {duration: 0.5, opacity: 1, position: "absolute", display: "inline", fontWeight: "bolder", fontSize: "6vmax", top: "10%", color: "#39FF14"})
    .to(".t-05", {transform: "rotate(90deg)", top:"50%", fontSize: "4vmax", ease: "bounce.out"})
    .to(".t-06", {duration: 0.5, opacity: 1, position: "absolute", display: "inline", fontWeight: "bolder", fontSize: "6vmax", top: "20%", left: "7.5%", color: "#FE4164", ease: "back.out(4)"})
    .to(".t-07", {duration: 0.5, opacity: 1, position: "absolute", display: "inline", fontWeight: "bolder", fontSize: "3vmax", top: "45%", left: "7.5%", color: "#1C1CF0", ease: "back.out(4)"})
    .to(".t-08", {duration: 0.5, opacity: 1, position: "absolute", display: "inline", fontWeight: "900", fontSize: "3vmax", top: "60%", left: "55%", color: "#292421", borderTop: "solid 7.5px #FFE135", ease: "elastic.out(1,0.30)"})
    .to(".t-09", {duration: 0.5, opacity: 1, position: "absolute", display: "inline", fontWeight: "600", fontSize: "6vmax", bottom: "10%", left: "10%", color: "#FFE135", borderBottom: "solid 7.5px #434343", ease: "none"})
    .to(".t-10", {duration: 0.5, opacity: 1, position: "absolute", display: "inline", fontWeight: "300", fontSize: "3vmax", top: "15%", right: "5%", color: "#292421"})
    .to(".t-10", {transform:"rotate(90deg)", top:"25%", fontSize: "2vmax", ease: "bounce.out"})
    .to(".t-11", {duration: 0.5, opacity: 1, position: "absolute", display: "inline", fontWeight: "900", fontSize: "2vmax", top: "30%", left: "55%", color: "#292421", ease: "elastic.out(1,0.30)"})
    .to(".t-12", {duration: 0.5, opacity: 1, position: "absolute", display: "inline", fontWeight: "lighter", fontSize: "3vmax", top: "40%", left: "57.5%", color: "#292421", ease: "elastic.out(1,0.30)"})
    .to(".t-a", {duration: 2, opacity: 0}, "+=3")
    .set(".t-a", {display: "none"})
    .set(".main-text-1, .main-text-2, .main-text-3", {border: "none", width: "auto", height: "auto", opacity: 1, x: 0, y: 0})
    .set(".app-intro", {display: "inline"})
    // .set(".app-intro", display: "inline")
  }, [landingTransition])

  // gsap landing animations
  useEffect(() => {
    tl_landing
    .to(".landing-transition-left", {duration: 1, backgroundColor: "#d9d9d9", width: "100%", height: "100%"})
    .to(".landing-transition-left", {duration: 1.5, backgroundColor: "#f0f0f0", width: "300%", x: 2000})
    .to(".landing-transition-left", {duration: 1.5, backgroundColor: "#f5f5f5", x: -2000, onComplete: setlandingTransition, onCompleteParams: [false]}, "-=0.5")
    .to(".sider", {duration: 1.5, height: "100vh", ease: "bounce.out"}, "-=3.5")
    .to(".sider-container", {duration: 0, opacity: 1}, "-=3.5")
    .from(".sider-section",{duration: 0.25, x: -500, stagger: 0.1, ease: "back.out(2)"}, "-=3")
    .from(".sider-btn",{duration: 0.25, transform: "rotateY(180deg)", stagger: 0.05},"-=2.5")
    .from(".sider-icon, .sider-badge", { duration: 0.25, opacity: 0, fontSize: "0", stagger: 0.05, ease: "bounce.out"}, "-=2")
    .from(".sider-divider", {duration: 0.5, y: -1000, stagger: 0.5, ease: "elastic.out(1,0.30)"}, "-=1.5")
  }, [landingTransition, cur_viewport, siderState])

  return(
    <div className="home-page">
        {landingTransition?
            <div>
                <Container fluid>
                    <Row>
                        <div className="landing-transition-container">
                            <div className="landing-transition-left"/>
                        </div>
                    </Row>
                </Container>
            </div>
            :
            <Container fluid>
                <Row className="home-main-container">
                    { cur_viewport?
                    siderState ?
                    <Col xs={12}>
                        <div className="siderShowHide" children={<button onClick={()=> setsiderState(!siderState)}>{siderShowHideIcon}</button>}/>
                        <div className="sider">
                            <div className="sider-container">
                                {siderLinks.map((e,i) =>
                                <div key={i}>
                                    <div className="sider-section">
                                    {Object.entries(e).map((e) => 
                                        <div className="sider-btn" key={e[0]}>
                                            <div className="sider-icon sider-badge pr-4">
                                                {e[1]}
                                            </div>
                                            <div className="sider-link-badge">
                                                <a href="#">{e[0]}</a>
                                                <span className="sider-badge">
                                                    <span>{Math.floor(Math.random() * 7+1)}</span>
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                    </div>
                                    {i === siderLinks.length-1 ? null : <hr className="sider-divider"/>}
                                </div>
                                )}
                            </div>
                        </div>
                    </Col>
                    :
                    <div className="siderShowHide" children={<button onClick={()=> setsiderState(!siderState)}><FaAlignJustify/></button>}/>
                    :
                    <Col xs={12} md={3} className="sider">
                        <div className="sider-container">
                            {siderLinks.map((e,i) =>
                            <div key={i}>
                                <div className="sider-section">
                                {Object.entries(e).map((e) => 
                                    <div className="sider-btn" key={e[0]}>
                                        <div className="sider-icon sider-badge pr-4">
                                            {e[1]}
                                        </div>
                                        <div className="sider-link-badge">
                                            <a href="#">{e[0]}</a>
                                            <span className="sider-badge">
                                                <span>{Math.floor(Math.random() * 7+1)}</span>
                                            </span>
                                        </div>
                                    </div>
                                )}
                                </div>
                                {i === siderLinks.length-1 ? null : <hr className="sider-divider"/>}
                            </div>
                            )}
                        </div>
                    </Col>
                    }

                    <Col className="home-page-right">
                        <Container fluid className="home-page-right-top">
                            <Row className="pb-5">
                                <Col>
                                    <div className="theme-col">
                                        <div className="theme-col-items theme-col-header">
                                            <span>try some themes</span>
                                        </div> 
                                        <div className="theme-col-items theme-col-link">
                                            <span className="clickable-item position-relative" onClick={themeChanger}>Light</span>&nbsp;|&nbsp;
                                            <span className="clickable-item position-relative" onClick={themeChanger}>Dark</span>&nbsp;|&nbsp;
                                            <span className="clickable-item position-relative" onClick={themeChanger}>Dull</span>&nbsp;|&nbsp;
                                            <span className="clickable-item position-relative" onClick={themeChanger}>Happy</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="current-col">
                                        <div className="current-col-items current-col-header">
                                            <span>currently working on</span>
                                        </div> 
                                        <div className="current-col-items current-col-link">
                                            <span className="clickable-item position-relative" onMouseEnter={()=>"currentWindow"}>insight | Financial Research Platform</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="pb-5">
                                <div className="grad-hr"></div>
                            </Row>

                            <Row className="pb-5">
                                <Container fluid>
                                    <div className="px-5 main-text-row">
                                        <div className="main-text-1">
                                            <span><FaSmile className="t-a t-01"/></span>
                                            <span><FaSmileWink className="t-a t-02"/></span>
                                        </div>
                                        <div className="main-text-2">
                                            <span className="t-a t-03 h1"></span>
                                            <span className="t-a t-04 h1"><div className="main-text-heart">&#10084;</div><div>I LIKE</div></span>
                                            <span className="t-a t-05 h1">DESiGN</span>
                                            <span className="t-a t-06 h1">C0D1NG</span>
                                            <span className="t-a t-07 h1">open source</span>
                                            <span className="t-a t-08 h1">THINKERING</span>
                                            <span className="t-a t-09 h1">Big Data</span>
                                            <span className="t-a t-10 h1">LEARNING</span>
                                            <span className="t-a t-11 h1">MODELING</span>
                                            <span className="t-a t-12 h1">mathematics</span>
                                        </div>
                                        <div className="main-text-3">
                                            <span className="app-a app-intro clickable-item position-relative">
                                                click here to test <br/>
                                                something cool I built 
                                            </span>
                                        </div>
                                    </div>
                                </Container>
                            </Row>

                            <Row className="pb-5">
                                <Container fluid>
                                    <Row className="main-pic-numbers">
                                        <Col className="main-pic">
                                            <Row>
                                                <div className="main-pic-header">
                                                    <span>languages under the belt</span>
                                                </div>
                                            </Row>
                                            <Row className="main-pic-col">
                                                <div className="main-pic-wrapper">
                                                    <img src="/svg/21.svg" alt="tech-pics" />
                                                </div>
                                                <div className="main-pic-wrapper">
                                                    <img src="/svg/30.svg" alt="tech-pics" />
                                                </div>
                                                <div className="main-pic-wrapper">
                                                    <img src="/svg/28.svg" alt="tech-pics" />
                                                </div>
                                                <div className="main-pic-wrapper">
                                                    <img src="/svg/33.svg" alt="tech-pics" />
                                                </div>
                                            </Row>
                                        </Col>
                                        <Col className="main-numbers">
                                            <Row>
                                                <div className="main-numbers-header">
                                                    <span>some numbers for you</span>
                                                </div>
                                            </Row>
                                            <Row className="main-numbers-col">
                                                <div className="main-numbers-wrapper">
                                                    <h6><strong>Projects</strong></h6>
                                                    <span className="c-text-info h3"><CountUp end={15} /></span>
                                                </div>
                                                <div className="main-numbers-wrapper">
                                                    <h6><strong>Vistors</strong></h6>
                                                    <span className="c-text-info h3"><CountUp end={65} /></span>
                                                </div>
                                                <div className="main-numbers-wrapper">
                                                    <h6><strong>Your Location</strong></h6>
                                                    <span className="c-text-info h5">norwich - UK</span>
                                                </div>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Container>
                            </Row>
                        </Container>
                                   
                        <div style={{width: "100%", height: "700px", backgroundColor: "transparent"}}></div>
                        <Container fluid className="home-page-right-footer">
                            <Footer/>
                        </Container>
                    </Col>

                </Row>
            </Container>
        }
    </div>
  )
}

export default Home


  // &#128170;&#129327;&#9939;&#128200;&#129516;&#128218;&#128071;&#129300;