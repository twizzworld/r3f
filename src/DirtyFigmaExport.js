import { useState, useRef } from 'react';

export function Overlay() {

    const [showAbout, setShowAbout] = useState(false);
    
    const closeHandler = () => {
        setShowAbout(false);
      };

    const openHandler = () => {
        setShowAbout(true);
      };

    const [show2, setShow2] = useState(false);
    
    const closeHandler2 = () => {
        setShow2(false);
      };

    const openHandler2 = () => {
        setShow2(true);
      };
    
    const [show3, setShow3] = useState(false);
    
    const closeHandler3 = () => {
        setShow3(false);
      };

    const openHandler3 = () => {
        setShow3(true);
      };

    const [show4, setShow4] = useState(false);
    
    const closeHandler4 = () => {
        setShow4(false);
      };

    const openHandler4 = () => {
        setShow4(true);
      };
    
    const [show5, setShow5] = useState(false);
    
    const closeHandler5 = () => {
        setShow5(false);
      };

    const openHandler5 = () => {
        setShow5(true);
      };
    
    const [show6, setShow6] = useState(false);
    
    const closeHandler6 = () => {
        setShow6(false);
      };

    const openHandler6 = () => {
        setShow6(true);
      };
    
    const [show7, setShow7] = useState(false);
    
    const closeHandler7 = () => {
        setShow7(false);
      };

    const openHandler7 = () => {
        setShow7(true);
      };
    
    const [show8, setShow8] = useState(false);
    
    const closeHandler8 = () => {
        setShow8(false);
      };

    const openHandler8 = () => {
        setShow8(true);
      };
    return (
        <>
        <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          padding: 40,
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          pointerEvents: "none",
        }}>
        <div style={{ width: "100%", padding: 0, display: "inline-flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <p
            style={{
              fontFamily: "'Antonio', sans-serif",
              flex: "1 1 0%",
              height: 30,
              fontSize: 30,
              fontWeight: "700",
              lineHeight: "30px",
              color: "white",
              letterSpacing: -2,
            }}>
            JOSHUA OKOLO
          </p>
          <div style={{ flex: "1 1 0%", display: "flex", gap: "2em" }}></div>
          <p style={{ flex: "1 1 0%", height: 30, fontSize: 30, lineHeight: "30px", textAlign: "right", color: "white" }}>⎑</p>
        </div>
        <div style={{ height: 60 }} />
        <div style={{ width: "100%", padding: 0, display: "inline-flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "center" }}>
          <p style={{ flex: "1 1 0%", height: "100%", fontSize: 12, lineHeight: "1.5em", color: "white" }}>
            <b>Engineering + CS</b>
            <br />
            Harvard University
            <br />
            <b>—</b>
          </p>
          <div style={{ width: 10 }} />
          <p
            style={{
              transform: "rotate3d(0, 0, 1, 90deg) translate3d(100%,10px,0)",
              transformOrigin: "right",
              fontSize: 12,
              fontWeight: "700",
              lineHeight: "100%",
              textAlign: "right",
              color: "white",
              whiteSpace: "nowrap",
            }}>
            DRAG POINTER &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ●
          </p>
        </div>
        <div style={{ height: 10 }} />
        <div
          className="full"
          style={{
            fontFamily: "'Antonio', sans-serif",
            width: "100%",
            flex: "1 1 0%",
            padding: 0,
            display: "inline-flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
          }}>
          <p style={{ flex: "1 1 0%", fontSize: 250, lineHeight: "1em", color: "white", margin: 0, letterSpacing: -10 }}>X</p>
          <div style={{ width: 10 }} />
          <p style={{ flex: "1 1 0%", fontSize: 250, lineHeight: "100%", textAlign: "right", color: "white", margin: 0, letterSpacing: -10 }}>_27</p>
        </div>
        <div style={{ height: 60 }} />
        <div
          style={{
            pointerEvents: "all",
            pointer: "auto",
            width: "100%",
            padding: 0,
            display: "inline-flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
          }}>
          <p className="full" style={{ whiteSpace: "nowrap", flex: "1 1 0%", fontSize: 12, lineHeight: "1.5em", color: "white" }}>
            <b>Today's record is tomorrow's quota</b>
            <br />
            - Anonymous
          </p>
          <div style={{ width: 10 }} />
          <div style={{ width: 10 }} />
          <p className="full" style={{ flex: "1 1 0%", fontSize: 12, lineHeight: "1em", textAlign: "right", color: "white" }}></p>
        </div>
      </div>


      <footer style={{ position: "absolute", bottom: 40, right: 40, display: "flex", flexDirection: "row"}}>
        <ul style={{ flex: "1 1 0%", fontSize: 12, lineHeight: "1em", textAlign: "right", color: "white" }}>
          <li onClick={openHandler}>about</li>
          <li onClick={openHandler2}>experience</li>
          <li onClick={openHandler3}>skills</li>
          <li onClick={openHandler4}>interests</li>
          <li onClick={openHandler5}>projects</li>
          <li onClick={openHandler6}>fun</li>
          <li onClick={openHandler7}>contact</li>
          <li onClick={openHandler8}>more</li>
        </ul>
    
      </footer>
      
      {/*About popup*/}
      { showAbout &&
        
        <div>
            
        <div
        class="popups"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          padding: 40,
          pointerEvents: showAbout ? "auto" : "none",
          color: "white",
        }}>
            <div class="popups aboutPopup background"
                style={{
                    width: "90vw",
                    height: "90vh",
                    borderRadius: "3px",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexDirection: "column",
                }}>
            <div class="hheader">ABOUT</div>
            <div class="ccontent">Hello there! Welcome to my website. I'm Joshua Okolo, and I'm currently a freshman studying at Harvard University planning to major in mechanical engineering and/or computer science. However, I am an enthusiast in a lot more areas, inclucing economics and biomedical engineering (more under interests). </div>
            <div class="backButton" onClick={closeHandler} style={{opacity:"1", cursor:"pointer"}}>BACK</div>
            </div>
        </div>
            
            </div>
        }


        {/*Experience popup*/}
      { show2 &&
        
        <div>
            
        <div
        class="popups"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          padding: 40,
          pointerEvents: show2 ? "auto" : "none",
          color: "white",
        }}>
            <div class="popups aboutPopup background"
                style={{
                    width: "90vw",
                    height: "90vh",
                    borderRadius: "3px",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexDirection: "column",
                }}>
            <div class="hheader">EXPERIENCE</div>
            <div class="lcontent" style={{display: "flex"}}>
                <div>numerly | dec 2020 - may 2021 | aided in the development of educational software and tutoring services. expanded operations to multiple cities.</div>
                <br></br>
                <div>houston food bank |a student hero | aug 2021 - dec 2022</div>
                <br></br>
                <div>omdena, machine learning engineer | aug 2022 - present | develop full-stack ML apps for startups, NGOs, and other mission-driven organizations</div>
                <br></br>
                <div>zindi, AI Engineer | jan 2022 - present | develop ai models for various organizations and causes worldwide, falling under the umbrella of human rights.</div>
                <br></br>
                <div>freelance web3 cybersec auditing | october 2022 - march 2023</div>
                <br></br>
                <div>rosalind | feb 2022 - present | solve bioinformatics problems on the rosalind platform.</div>
                <br></br>
                <div>numerai, financial engineer and data science competitor | jan 2022 - present | engineer market prediction models. compete in the numerai competition unstaked. models are ensembled to create the hedge fund's main model.</div>
                <br></br>
                <div>kaggler @ kaggle | dec 2021 - present | compete in artificial intelligence and data science competitions.</div>
                <br></br>
                <div>buildspace s4 | <a href='https://buildspace.so/'>iykyk</a></div>
                <div></div>
                <div>I've also gotten a few awards, some of my most notable ones being the Congressional Gold Medal and Congressional STEM Star. </div>
                <br></br>
            </div>
            <div class="backButton" onClick={closeHandler2} style={{opacity:"1", cursor:"pointer"}}>BACK</div>
            </div>
        </div>
            
            </div>
        }

        {/*Skills popup*/}
      { show3 &&
        
        <div>
            
        <div
        class="popups"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          padding: 40,
          pointerEvents: show3 ? "auto" : "none",
          color: "white",
        }}>
            <div class="popups aboutPopup background"
                style={{
                    width: "90vw",
                    height: "90vh",
                    borderRadius: "3px",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexDirection: "column",
                }}>
            <div class="hheader">SKI LLS</div>
            <div class="lcontent" style={{display: "flex"}}>
                <div>ai/ml, pytorch, tensorflow, langchain, </div>
                <br></br>
                <div>data science & analytics with python</div>
                <br></br>
                <div>web3: blockchain programming, solidity, rust</div>
                <br></br>
                <div>python, c, c++, javascript</div>
                <br></br>
                <div>unreal engine for game development, blender</div>
                <br></br>
                <div>fusion360, SolidWorks, MATLAB</div>
                <br></br>
            </div>
            <div class="backButton" onClick={closeHandler3} style={{opacity:"1", cursor:"pointer"}}>BACK</div>
            </div>
        </div>
            
            </div>
        }

        {/*Interests popup*/}
      { show4 &&
        
        <div>
            
        <div
        class="popups"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          padding: 40,
          pointerEvents: show4 ? "auto" : "none",
          color: "white",
        }}>
            <div class="popups aboutPopup background"
                style={{
                    width: "90vw",
                    height: "90vh",
                    borderRadius: "3px",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexDirection: "column",
                }}>
            <div class="hheader">INTERESTS</div>
            <div class="lcontent">
                <div>web3/blockchain</div>
                <br></br>
                <div>computer networking</div>
                <br></br>
                <div>cybersecurity</div>
                <br></br>
                <div>artificial intelligence/machine learning</div>
                <br></br>
                <div>operating systems</div>
                <br></br>
                <div>xr (ar/vr)</div>
                <br></br>
                <div>gamedev</div>
                <br></br>
                <div>robotics</div>
                <br></br>
            </div>
            <div class="backButton" onClick={closeHandler4} style={{opacity:"1", cursor:"pointer"}}>BACK</div>
            </div>
        </div>
            
            </div>
        }

        {/*Projects popup*/}
      { show5 &&
        
        <div>
            
        <div
        class="popups"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          padding: 40,
          pointerEvents: show5 ? "auto" : "none",
          color: "white",
        }}>
            <div class="popups aboutPopup background"
                style={{
                    width: "90vw",
                    height: "90vh",
                    borderRadius: "3px",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexDirection: "column",
                }}>
            <div class="hheader">PROJECTS</div>
            <div class="scontent">
                <div>computer-aided diagnosis (cad) algorithms for segmenting radiology images</div>
                <div>programming language (jocose)</div>
                <div>python proof-of-work blockchain | javascript proof-of-work blockchain | go proof-of-stake blockchain</div>
                <div>custom llm models | llm model playground</div>
                <div>decentralized exchanges (uniswap and sushiswap forks) | smart contract wallet</div>
                <div>unreal engine (ue) racing game | ue fps game | ue battle royale game</div>
                <div>ai audio dubber | documents chatbot</div>
                <br></br>
                <div>currently working on:</div>
                <div>blockchain Apps: decentralized compute, storage, and finance networks</div>
                <div>games and experiences using unreal engine and generative ai</div>
                <br></br>
            </div>
            <div class="backButton" onClick={closeHandler5} style={{opacity:"1", cursor:"pointer"}}>BACK</div>
            </div>
        </div>
            
            </div>
        }

        {/*fun popup*/}
      { show6 &&
        
        <div>
            
        <div
        class="popups"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          padding: 40,
          pointerEvents: show6 ? "auto" : "none",
          color: "white",
        }}>
            <div class="popups aboutPopup background"
                style={{
                    width: "90vw",
                    height: "90vh",
                    borderRadius: "3px",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexDirection: "column",
                }}>
            <div class="hheader">FUN</div>
            <div class="ccontent">
                    <div><a href='https://minecraft-simple.vercel.app/'>simple in-browser minecraft game</a></div>
                </div>
            <div class="backButton" onClick={closeHandler6} style={{opacity:"1", cursor:"pointer"}}>BACK</div>
            </div>
        </div>
            
            </div>
        }

        {/*Contact popup*/}
      { show7 &&
        
        <div>
            
        <div
        class="popups"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          padding: 40,
          pointerEvents: show7 ? "auto" : "none",
          color: "white",
        }}>
            <div class="popups aboutPopup background"
                style={{
                    width: "90vw",
                    height: "90vh",
                    borderRadius: "3px",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexDirection: "column",
                }}>
            <div class="hheader">CONTACT</div>
            <div class="ccontent">
                <div>email: numinousmuses@gmail.com</div>
                <br></br>
                <div><a href='https://www.linkedin.com/in/joshua-okolo/'>linkedin</a></div>
            </div>
            <div class="backButton" onClick={closeHandler7} style={{opacity:"1", cursor:"pointer"}}>BACK</div>
            </div>
        </div>
            
            </div>
        }

        
      </>
    )
  }


  