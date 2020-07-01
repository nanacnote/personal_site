import { GetStaticProps } from 'next';
import { useEffect } from "react";
import { Footer } from "./components";
import { gsap } from "gsap";
import { TextPlugin } from 'gsap/dist/TextPlugin';
import { Container, Row, Col } from 'react-bootstrap';

export const Home = ({ post }): JSX.Element => {
  let mainText: any, mainPics: any;
  
  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    // const tl = gsap.timeline({repeat: -1});
    const tl_1 = gsap.timeline();
    const tl_2 = gsap.timeline({repeat: -1});
    mainText.onmouseenter = function() {
        tl_2.pause();
    }
    mainText.onmouseleave = function() {
      tl_2.play();
    }

    tl_1
    .to(".loading-animator", {duration: 0, position: "absolute",  height: "100%", width: "100%"}) 
    .to(".loading-animator", {duration: 2, visibility: "visible", backgroundColor: "#d9d9d9", x: 2000})
    .to(".loading-animator", {duration: 2, backgroundColor: "#f5f5f5", width: "300vw",  x: -2500}, "-=0.75")
    .to(".loading-animator", {duration: 0, display: "none"})
    .to(".sider", {duration: 1.5, visibility: "visible", height: "100vh", ease: "bounce.out",}, "-=1")
    .from(".sider-section",{duration: 0.25, x: -500, stagger: 0.1, ease: "back.out(2)"}, "-=1")
    .from(".sider-btn",{duration: 0.25, transform: "rotateY(180deg)", stagger: 0.05},"-=0.25")
    .from(".sider-divider", {duration: 0.5, y: -1000, stagger: 0.5, ease: "elastic.out(1,0.30)"})
    .to(".hr", {duration: 2, visibility: "visible", width: "100%", ease: "bounce.out",}, "-=1.5")
    .to(".current-row-items", { duration: 0, visibility: "visible", opacity:0})
    .from(".current-row-items", { duration: 1, opacity: 1, y: -50, stagger: 0.5}, "-=0.5")
    .to(".main-pic-wrapper", {duration: 0.5, visibility: "visible"}, "-=1")
    .from(".main-pic-wrapper", {duration: 2, opacity: 0, rotate: 1080, x: -2000, stagger: 1, ease: "elastic.out(1,0.30)",}, "-=1")
    .to(".main-pic-wrapper", {duration: 0.25, rotate: -2160, stagger: 0.05,}, "-=0.25")
    .to(".home-page ", {visibility: "visible"})
    tl_2
    .to(".main-text", {duration: 2, text: post[0].intro, ease: "none"}, "+=10")
    .to(".main-text", {duration: 2, text: "", ease: "none"}, "+=5")
    .to(".main-text", {duration: 2, text: post[0].tech_interest, ease: "none"})
    .to(".main-text", {duration: 2, text: "", ease: "none"}, "+=5")
    .to(".main-text", {duration: 2, text: post[0].future, ease: "none"})
    .to(".main-text", {duration: 2, text: "", ease: "none"}, "+=5")
    .to(".main-text", {duration: 2, text: post[0].other_interest, ease: "none"})
    .to(".main-text", {duration: 2, text: "", ease: "none"}, "+=5")
    .to(".main-text", {duration: 2, text: post[0].favourite_quote, ease: "none"})
    .to(".main-text", {duration: 2, text: "", ease: "none"}, "+=5")
    .to(".main-text", {duration: 2, text: post[0].big_idea, ease: "none"})
    .to(".main-text", {duration: 2, text: "", ease: "none"}, "+=5")

    return () => {
      "cleanup"
    }
  }, [ ])

  return(
    <div className="home-page">
      <div className="loading-animator"/>
      <main>
        <Container fluid className="home-page-container">
          <Row>
            <Col md={2} className="sider">
              <div className="sider-container">
                <div className="sider-section">
                  {["IDE", "Containers", "Git", "Stack", "npm", "Hosting"].map(e => 
                    <div className="sider-btn" key={e}>
                      <a href="#">{e}</a>
                    </div>
                  )}
                </div>
                  <hr className="sider-divider"/>
                <div className="sider-section">
                  {["Design", "Front-end", "Microservices", "API", "Database"].map(e => 
                    <div className="sider-btn" key={e}>
                      <a href="#">{e}</a>
                    </div>
                  )}
                </div>
                  <hr className="sider-divider"/>
                <div className="sider-section">
                  {["Functionality", "Usability", "Interface", "Performance", "Security"].map(e => 
                    <div className="sider-btn" key={e}>
                      <a href="#">{e}</a>
                    </div>
                  )}
                </div>
              </div>
            </Col>
            
            <Col md={10} className="">
              <Container fluid>
                <Row className="pb-5">
                  <div className="current-row">
                    <div className="current-row-header current-row-items">
                      currently working on
                    </div> 
                    <div className="current-row-items">
                      <a href="#">insight | Financial Research Platform</a>
                    </div>
                  </div>
                </Row>

                <Row className="pb-5">
                  <div className="hr"></div>
                </Row>

                <Row className="p-5 main-text-row" as="div" ref={div => mainText = div}>
                  <Col xs={12} className={"main-text-col"}>
                    <div className="main-text h1"/>
                  </Col>
                </Row>

                <Row className="pb-5">
                  <Container fluid>
                    <Row className="px-5">
                      <div className="main-pic-wrapper" ref={div => mainPics = div}>
                        <img src="/svg/21.svg" alt="tech-pics" />
                      </div>
                      <div className="main-pic-wrapper" ref={div => mainPics = div}>
                        <img src="/svg/30.svg" alt="tech-pics" />
                      </div>
                      <div className="main-pic-wrapper" ref={div => mainPics = div}>
                        <img src="/svg/28.svg" alt="tech-pics" />
                      </div>
                      <div className="main-pic-wrapper" ref={div => mainPics = div}>
                        <img src="/svg/33.svg" alt="tech-pics" />
                      </div>
                    </Row>
                  </Container>
                </Row>
              </Container>
              <div style={{height: "500px"}}>last</div>

              <Footer/>

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