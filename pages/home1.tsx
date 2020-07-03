import { GetStaticProps } from 'next';
import { useEffect, useState } from "react";
import { Footer } from "./components";
import { gsap } from "gsap";
import { CSSRulePlugin } from 'gsap/dist/CSSRulePlugin';
import { TextPlugin } from 'gsap/dist/TextPlugin';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaPauseCircle,
  FaPlayCircle,
  FaBars,
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
  
  // ref holder for main animated text
  let mainText: any
  
  // instantiate gsap
  gsap.registerPlugin(TextPlugin, ScrollTrigger);
  const tl_1 = gsap.timeline();
  const tl_2 = gsap.timeline({repeat: -1});

  const [pausePlay, setpausePlay] = useState(<FaPauseCircle/>)

  // viewPort controller

  // currently working on section function 
  const currentWindow = ()=>{
    const rule = CSSRulePlugin.getRule("")
    alert("good")
  }

  //pause function to show animation on mouse enter animated text
  const pauseGsapText = ()=>{
    gsap.timeline()
    .to(".pause-play-animator", {duration: 0.5, display: "flex", opacity: 0, fontSize: "5rem"})
    .to(".pause-play-animator", {duration: 0, display: "none", opacity: 1, fontSize: "0", onComplete: setpausePlay, onCompleteParams: [<FaPlayCircle/>]})
  }
  //play function to show animation on mouse enter animated text
  const playGsapText = ()=>{
    gsap.timeline()
    .to(".pause-play-animator", {duration: 0.5, display: "flex", opacity: 0, fontSize: "5rem"})
    .to(".pause-play-animator", {duration: 0, display: "none", opacity: 1, fontSize: "0", onComplete: setpausePlay, onCompleteParams: [<FaPauseCircle/>]})
  }

  useEffect(() => {
    gsap.to(".test",{
      scrollTrigger: {
        trigger: ".test",
        markers: true,
        start: "top center"
      },
      duration: 5, 
      x: 1000
    })
  }, [])

  // gsap timeline on load (runs only once)
  // useEffect(() => {
  //   mainText.onmouseenter = function() {
  //     tl_2.pause();
  //   }
  //   mainText.onmouseleave = function() {
  //     tl_2.play();
  //   }
  //   tl_1
  //   .to(".loading-animator", {duration: 0, display: "block", position: "absolute",  height: "100%", width: "100%"}) 
  //   .to(".loading-animator", {duration: 2, backgroundColor: "#d9d9d9", x: 2000})
  //   .to(".loading-animator", {duration: 2, display: "none", backgroundColor: "#f5f5f5", width: "300vw",  x: -2500}, "-=0.75")
  //   .to(".home-page-main", {duration: 0, display: "block"}, "-=2")
  //   .to(".sider", {duration: 1.5, height: "100vh", paddingTop: "5%", paddingBottom: "5%", ease: "bounce.out",}, "-=1")
  //   .from(".sider-section",{duration: 0.25, x: -500, stagger: 0.1, ease: "back.out(2)"}, "-=1")
  //   .from(".sider-btn",{duration: 0.25, transform: "rotateY(180deg)", stagger: 0.05},"-=0.25")
  //   .from(".sider-icon", { duration: 0.25, opacity: 0, fontSize: "0", stagger: 0.05, ease: "bounce.out"}, "-=0.25")
  //   .from(".sider-divider", {duration: 0.5, y: -1000, stagger: 0.5, ease: "elastic.out(1,0.30)"})
  //   .to(".hr", {duration: 2, width: "100%", ease: "bounce.out",}, "-=2")
  //   .from(".current-row-items", { duration: 1, opacity: 0, y: -20, stagger: 0.5}, "-=0.5")
  //   .from(".main-pic-wrapper", {duration: 2, opacity: 0, rotate: 1080, x: -2000, stagger: 0.5, ease: "elastic.out(1,0.30)",}, "-=1")
  //   .to(".main-pic-wrapper", {duration: 0.25, rotate: -2160, stagger: 0.05,}, "-=0.25")
  //   .to(".home-page-right-bottom", {display: "block"})
  //   tl_2
  //   .to(".main-text", {duration: 2, text: post[0].intro, ease: "none"}, "+=10")
  //   .to(".main-text", {duration: 2, text: "", ease: "none"}, "+=5")
  //   .to(".main-text", {duration: 2, text: post[0].tech_interest, ease: "none"})
  //   .to(".main-text", {duration: 2, text: "", ease: "none"}, "+=5")
  //   .to(".main-text", {duration: 2, text: post[0].future, ease: "none"})
  //   .to(".main-text", {duration: 2, text: "", ease: "none"}, "+=5")
  //   .to(".main-text", {duration: 2, text: post[0].other_interest, ease: "none"})
  //   .to(".main-text", {duration: 2, text: "", ease: "none"}, "+=5")
  //   .to(".main-text", {duration: 2, text: post[0].favourite_quote, ease: "none"})
  //   .to(".main-text", {duration: 2, text: "", ease: "none"}, "+=5")
  //   .to(".main-text", {duration: 2, text: post[0].big_idea, ease: "none"})
  //   .to(".main-text", {duration: 2, text: "", ease: "none"}, "+=5")
  // }, [ ])

  return(
    <div className="home-page">
      <div className="siderShowHide" children={<button><FaBars/></button>} />
      <div className="home-animator-helpers loading-animator"/>
      <div className="home-animator-helpers pause-play-animator" children={pausePlay} />
      <main className="home-page-main">
        <Container fluid className="home-page-container">
          <Row>
            <Col md={2} className="sider">
              <div className="sider-container">
                {siderLinks.map((e,i) =>
                  <div key={i}>
                    <div className="sider-section">
                      {Object.entries(e).map((e) => 
                        <div className="sider-btn" key={e[0]}>
                          <span className="sider-icon pr-3">
                            {e[1]}
                          </span>
                          <span>
                            <a href="#">{e[0]}</a>
                          </span>
                        </div>
                      )}
                    </div>
                    {i === siderLinks.length-1 ? null : <hr className="sider-divider"/>}
                  </div>
                )}
              </div>
            </Col>
            
            <Col md={10} className="home-page-right">
              <Container fluid className="home-page-right-top">
                <Row className="pb-5">
                  <div className="current-row">
                    <div className="current-row-items current-row-header">
                      currently working on
                    </div> 
                    <div className="current-row-items current-row-link">
                      <a href="#" onMouseEnter={currentWindow}>insight | Financial Research Platform</a>
                    </div>
                  </div>
                </Row>

                <Row className="pb-5">
                  <div className="hr"></div>
                </Row>

                <Row className="pb-5">
                  <Container fluid>
                    <div className="px-5 main-text-row">
                      <span 
                        ref={div => mainText = div}
                        className="main-text h2"
                        onMouseEnter={pauseGsapText}
                        onMouseLeave={playGsapText}
                      />
                    </div>
                  </Container>
                </Row>

                <Row className="pb-5">
                  <Container fluid>
                    <Row className="px-5">
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
                  </Container>
                </Row>
              </Container>

              <Container fluid className="home-page-right-bottom">
                        placeholder
              </Container>

              <div className="test" style={{width: "500px", height: "800px", backgroundColor: "grey"}}>good</div>

              
              <Container fluid className="home-page-right-footer">
                <Footer/>
              </Container>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  )
}

export default Home


export const getStaticProps: GetStaticProps = async () => {
  const post: Array<{[key: string]: string}> = [
    {
      intro: "Jack of 3 programming languages",
      tech_interest: "As at now I am passionate about Neural Networks and modeling Financial data",
      future: "In the future I see my interest shifting towards Bioinformatics especially Protein Structures.",
      other_interest: "I have read way too much Classic Literature and Philosophy titles",
      favourite_quote: "'To act wisely when the time for action comes, to wait patiently when it is time for repose, put man in accord with the tides. Ignorance of this law results in periods of unreasoning enthusiasm on the one hand, and depression on the other.' - Helena Blavatsk.",
      big_idea: "Data should be entered into the public domain after 72 hours of allowing the collector to have exclusive rights. This way the collector only has an edge by aggresively inovating. There will also arise a qiuck turn around feed back pipeline into public conciousness. As the open source community gets to work on close to live data. I will be writing more on this as I develop the thought.",
    }
  ]

  return {
    props: {
      post
    },
  }
}

// &#128170;&#129327;&#9939;&#128200;&#129516;&#128218;&#128071;&#129300;