import { useState } from 'react'
import './App.css'
import myImage from './assets/imageOption1.png'
import htmlIcon from './assets/htmlicon.png'
import cssIcon from './assets/cssicon.png'
import jsIcon from './assets/javascripticon.png'
import reactIcon from './assets/reacticon.png'
import swiftIcon from './assets/swifticon.png'
import javaIcon from './assets/javaicon.png'
import pythonIcon from './assets/pythonicon.webp'
import sqlIcon from './assets/sqlicon.svg'
import cIcon from './assets/cicon.png'
import cSharpIcon from './assets/csharpicon.png'
import xCodeIcon from './assets/xcodeicon.png'
import githubIcon from './assets/githubicon.png'
import gitIcon from './assets/giticon.png'
import figmaIcon from './assets/figmaicon.png'
import adobeIllustratorIcon from './assets/illustratoricon.png'
import adobePhotoshopIcon from './assets/photoshopicon.png'
import firebaseIcon from './assets/firebaseicon.png'
import linuxIcon from './assets/linuxicon.png'
import capstone1 from './assets/capstoneScreenshot1.PNG'
import capstone2 from './assets/capstoneScreenshot2.PNG'
import capstone3 from './assets/capstoneScreenshot3.PNG'
import capstone4 from './assets/capstoneScreenshot4.PNG'
import capstone5 from './assets/capstoneScreenshot5.PNG'
import catAdoption1 from './assets/firstProjectScreenshot1.png'
import catAdoption2 from './assets/firstProjectScreenshot2.png'
import etchASketch1 from './assets/thirdProjectScreenshot3.png'
import etchASketch2 from './assets/thirdProjectScreenshot4.png'
import etchASketch3 from './assets/thirdProjectScreenshot5.png'
import linkedinIcon from './assets/linkedinicon.png'


function App() {

  return (
    <>
    <div className = "page">
      <div className = "firstViewContainer">
          <div className = "nameContainer">
              Melodi Keskin
          </div>
          <div className = "animationContainer">
              I am a <span className = "animation"></span>
          </div>
      </div>

      <div className = "aboutContainer">
        <div className = "aboutTitleContainer">
            <div className = "lineBefore"></div>
            <div className = "aboutTitle">
                About Me
            </div>
            <div className = "lineAfter"></div>
        </div>

          <div className = "underneathContainer">
              <div className = "imageContainer">
                <img src={myImage} className = "image1" alt = "a gray image placeholder female"/>
              </div>
              <div className = "textContainer">                    
                <div className = "paragraphContainer">
                  <div>I am currently a Master’s student looking to improve my software development knowledge. I am interested in Front-end Web Development and iOS Development.</div>
                </div>
              </div>
          </div>
      </div>

      <div className = "skillsContainer">
        <div className = "skillsTitleContainer">
            <div className = "lineBefore"></div>
            <div className = "skillsTitle">
                Skills
            </div>
            <div className = "lineAfter"></div>
        </div>
        
        <div className = "iconContainer">
          <div className = "generalFrontEndContainer">
            <div className = "titleContainer2">Front-end</div>
              <div className = "frontEndContainer">
                <div className = "frontEndSkillsContainer">
                  <div className = "htmlContainer">
                    <img src={htmlIcon} className = "htmlImage" alt = "html icon" />
                    <div>HTML</div>
                  </div>
        
                  <div className = "cssContainer">
                    <img src={cssIcon} className = "cssImage" alt = "css icon"/>
                    <div>CSS</div>
                  </div>
                            
                  <div className = "jsContainer">
                    <img src={jsIcon} className = "javascriptImage" alt = "js icon" />
                    <div>JavaScript</div>
                  </div>
                </div>

                <div className = "frontEndSkillsContainer">
                  <div className = "reactContainer">
                    <img src = {reactIcon} className = "reactImage" alt = "react icon" />
                    <div>React</div>
                  </div>

                  <div className = "swiftContainer">
                    <img src = {swiftIcon} className = "swiftImage" alt = "swift icon" />
                    <div>Swift</div>
                  </div>
                </div>
              </div>
            </div>

            <div className = "generalOtherCodingContainer">
              <div className = "titleContainer2">Other Softwares</div>
                <div className = "otherCodingContainer">
                  <div className = "otherCodingSkillsContainer">
                    <div className = "javaContainer">
                      <img src = {javaIcon} className = "javaImage" alt = "java icon" />
                      <div>Java</div>
                    </div>
                            
                    <div className = "pythonContainer">
                      <img src = {pythonIcon} className = "pythonImage" alt = "python icon" />
                      <div>Python</div>
                    </div>

                    <div className = "sqlContainer">
                      <img src = {sqlIcon} className = "sqlImage" alt = "sql icon" />
                      <div>SQL</div>
                    </div>
                  </div>

                  <div className = "otherCodingSkillsContainer">
                   <div className = "cContainer">
                    <img src = {cIcon} className = "cImage" alt = "c icon" />
                    <div>C</div>
                  </div>

                            <div className = "cSharpContainer">
                                <img src = {cSharpIcon} className = "cSharpImage" alt = "c sharp icon" />
                                <div>C#</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = "generalMiscContainer">
                    <div className = "titleContainer2">Tools</div>
                    <div className = "miscContainer">
                        <div className = "miscSillsContainer">
                            <div className = "xcodeContainer">
                                <img src = {xCodeIcon} className = "xcodeImage" alt = "xcode icon" />
                                <div>Xcode</div>
                            </div>

                            <div className = "githubContainer">
                                <img src = {githubIcon} className = "githubImage" alt = "github icon" />
                                <div>GitHub</div>
                            </div>

                            <div className = "gitContainer">
                                <img src = {gitIcon} className = "gitImage" alt = "git icon" />
                                <div>Git</div>
                            </div>
                        </div>

                        <div className = "miscSkillsContainer">
                            <div className = "figmaContainer">
                                <img src = {figmaIcon} className = "figmaImage" alt = "figma icon" />
                                <div>Figma</div>
                            </div>

                            <div className = "illustratorContainer">
                                <img src = {adobeIllustratorIcon} className = "illustratorImage" alt = "adobe illustrator icon" />
                                <div>Adobe Illustrator</div>
                            </div>

                            <div className = "photoshopContainer">
                                <img src = {adobePhotoshopIcon} className = "photoshopImage" alt = "adobe photoshop icon" />
                                <div>Adobe Photoshop</div>
                            </div>
                        </div>

                        <div className = "miscSkillsContainer">
                            <div className = "firebaseContainer">
                                <img src = {firebaseIcon} className = "firebaseImage" alt = "firebase icon" />
                                <div>Firebase</div>
                            </div>

                            <div className = "linuxContainer">
                                <img src = {linuxIcon} className = "linuxImage" alt = "linux icon" />
                                <div>Linux</div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </div>

      <div className = "featuredProjectsContainer">
        <div className = "featuredProjectsTitleContainer">
            <div className = "lineBefore"></div>
            <div className = "featuredProjectsTitle">
                Featured Projects
            </div>
            <div className = "lineAfter"></div>
        </div>

            <div className = "projectsContainer">
                <div className = "projectUnderneathContainer">
                    <div className = "rightContainer">
                        <div className = "leftContainer">
                            <div className = "projectTitleContainer">
                                <div>Skinmate iOS Application</div>
                            </div>
                            <div className = "projectParagraphContainer">
                                <div className = "projectParagraph">Created an iOS application with a group for my capstone project where the user takes a picture of their face, 
                                    and then the application analyzes their face to figure out what type of acne the user has and what skin type the user has to then suggest 
                                    a morning and night skincare routine with specific products according to the user’s face. The application also had a page to show the last 
                                    2 pictures of the user for comparison where it showed which acne had gone away, and which acne was still there.
                                </div>
                            </div>
                        </div>

                        <div className = "projectImageContainer">
                            <div>
                                <img src = {capstone1} className = "projectImagePhone1" alt = "capstone project screenshot"/>
                            </div>

                            <div>
                                <img src = {capstone2} className = "projectImagePhone" alt = "capstone project screenshot"/>
                            </div>

                            <div>
                                <img src = {capstone3} className = "projectImagePhone" alt = "capstone project screenshot"/>
                            </div>

                            <div>
                                <img  src = {capstone5} className = "projectImagePhone" alt = "capstone project screenshot"/>
                            </div>
                        </div>
                    </div>

                    <div className = "projectButtonContainer">
                        <div className = "githubButtonContainer">
                            <a href="https://github.com/eozol17/comp491" target="_blank" className="link">
                                <button className="buttons">Github</button>
                            </a>
                        </div>
                        <div className = "livePreviewContainer">
                            <a href="https://drive.google.com/file/d/1s3wRORKIWn5ID1-YOpBUF5m7QKy5i326/view?usp=sharing" target="_blank" className="link">
                                <button className="buttons">Video</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className = "projectUnderneathContainer">
                    <div className = "rightContainer">
                        <div className = "leftContainer">
                            <div className = "projectTitleContainer">
                                <div>Cat Adoption Website</div>
                            </div>
                            <div className = "projectParagraphContainer">
                                <div className = "projectParagraph">This is a website for adopting cats. It shows some cats that are up for adoption and states their names and a little fact about them. 
                                    I also added an "About Us" page where there is a paragraph about the company. This website was done with flexbox.
                                </div>
                            </div>
                        </div>

                        <div className = "projectImageContainer">
                            <div>
                                <img src = {catAdoption1} className = "projectImage1" alt = "cat adoption project screenshot"/>
                            </div>

                            <div>
                                <img src = {catAdoption2} className = "projectImage" alt = "cat adoption project screenshot"/>
                            </div>
                        </div>
                    </div>

                    <div className = "projectButtonContainer">
                        <div className = "githubButtonContainer">
                            <a href = "https://github.com/makimakimek/catAdoption" target = "_blank" className = "link">
                                <button className="buttons">Github</button>
                            </a>
                        </div>
                        <div className = "livePreviewContainer">
                            <a href = "https://adoptingcats.netlify.app/" target = "_blank" className = "link">
                                <button className="buttons">Live Preview</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className = "projectUnderneathContainer">
                    <div className = "rightContainer">
                        <div className = "leftContainer">
                            <div className = "projectTitleContainer">
                                <div>Etch-A-Sketch</div>
                            </div>
                            <div className = "projectParagraphContainer">
                                <div className = "projectParagraph">A website where the user can sketch with their mouse by going over the squares. The user can pick whichever color they want 
                                    and there is also an option to have a random color every time they go over a square with their mouse. The user can also change the size of the grid, they 
                                    can pick any number between 0 - 100. The user can also click on the "Shading Effect" button to have shades while going over an already filled square. The 
                                    user can also clear the canvas by clicking on the "Clear" button. This project was done with flexbox, most of the features were done in javascript using DOM.
                                </div>
                            </div>
                        </div>

                        <div className = "projectImageContainer">
                            <div>
                                <img src = {etchASketch1} className = "projectImage1" alt = "etch a sketch project screenshot"/>
                            </div>

                            <div>
                                <img src = {etchASketch2} className = "projectImage" alt = "etch a sketch project screenshot"/>
                            </div>

                            <div>
                                <img  src = {etchASketch3} className = "projectImage" alt = "etch a sketch project screenshot"/>
                            </div>
                        </div>
                    </div>

                    <div className = "projectButtonContainer">
                        <div className = "githubButtonContainer">
                            <a href="https://github.com/makimakimek/etchASketch" target="_blank" className="link">
                                <button className="buttons">Github</button>
                            </a>
                        </div>
                        <div className = "livePreviewContainer">
                            <a href="https://makimakimek.github.io/etchASketch/" target="_blank" className="link">
                                <button className="buttons">Live Preview</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className = "contactSection">
            <div className = "contactTitleSection">
                <div className = "lineBefore"></div>
                <div className = "contactTitle">
                    Contact
                </div>
                <div className = "lineAfter"></div>
            </div>

            <div className = "underContactSection">
                <div className = "emailTitleSection">
                    Write me an e-mail at:
                </div>

                <div className = "emailSection">
                    melodikeskin98@gmail.com
                </div>

                <div className = "orSection">
                    OR
                </div>

                <div className = "emailTitleSection">
                    Reach me through social media:
                </div>

                <div className = "githubAndLinkedinSection">
                    <a href = "https://github.com/makimakimek" target = "_blank" className = "link">
                        <img src = {githubIcon} className = "githubImage" alt = "github icon" />
                    </a>

                    <a href = "https://www.linkedin.com/in/melodi-keskin-059007211/" target = "_blank" className = "link">
                        <img src = {linkedinIcon} className = "linkedinImage" alt = "linkedin icon" />
                    </a>
                </div>

                <div className = "copyright">
                    Designed and developed by Melodi Keskin © 2024
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default App