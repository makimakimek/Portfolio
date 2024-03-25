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
import innopromoo1 from './assets/innopromoo1.png'
import innopromoo2 from './assets/innopromoo2.png'
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
                  <div>I am currently a Master’s student in computer science, looking to improve my software development knowledge. I am interested in Front-end Web Development and iOS Development.</div>
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
                                <div className = "projectParagraph">This iOS application, developed as our capstone project by a team of four, allows users 
                                                                    to seamlessly manage their skincare routine. Upon creating an account, users can capture 
                                                                    a picture of their face within the application. The app then analyzes the facial image to 
                                                                    identify the user's skin type and what kind of acne they have. Based on this analysis, personalized 
                                                                    morning and night skincare routines are suggested, complete with specific product recommendations 
                                                                    tailored to the user's unique needs. Furthermore, the application features a page showcasing 
                                                                    the user's last two pictures for easy visual comparison. This section highlights the progress by 
                                                                    indicating which acne has diminished and which areas may still require attention.
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
                                <div>InnoPromoo</div>
                            </div>
                            <div className = "projectParagraphContainer">
                                <div className = "projectParagraph">I independently designed and developed a website for InnoPromoo, a real company, 
                                                                    handling all aspects from gathering client requirements to deployment. This website 
                                                                    allows them to showcase their various products to a wider audience. Built with React.js 
                                                                    and CSS, the website is fully functional and responsive, ensuring a seamless viewing 
                                                                    experience on both desktop and mobile devices, regardless of screen orientation.  
                                                                    Additionally, I implemented a language toggle for English and Turkish translations, 
                                                                    considering the company's Turkish origin. To make the website accessible to the public, 
                                                                    the client bought a domain where I deployed the code, integrating it into the domain's 
                                                                    public HTML.
                                </div>
                            </div>
                        </div>

                        <div className = "projectImageContainer">
                            <div>
                                <img src = {innopromoo1} className = "projectImage1" alt = "innopromoo website screenshot"/>
                            </div>

                            <div>
                                <img src = {innopromoo2} className = "projectImage" alt = "innopromoo website screenshot"/>
                            </div>
                        </div>
                    </div>

                    <div className = "projectButtonContainer">
                        <div className = "githubButtonContainer">
                            <a href = "https://github.com/makimakimek/inno" target = "_blank" className = "link">
                                <button className="buttons">Github</button>
                            </a>
                        </div>
                        <div className = "livePreviewContainer">
                            <a href = "https://innopromoo.com/" target = "_blank" className = "link">
                                <button className="buttons">Live Preview</button>
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
                                <div className = "projectParagraph">This website serves as a platform for cat adoption, showcasing a variety of cats available 
                                                                    for adoption along with their names and brief descriptions. Additionally, I have added an 
                                                                    "About Us" page that provides visitors with a paragraph detailing information about the company 
                                                                    behind the website. I created this website's layout and design using flexbox, utilizing HTML and 
                                                                    CSS. The development was done through React and Vite.
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
                                <div className = "projectParagraph">This website offers an interactive sketching experience where users can create drawings using 
                                                                    their mouse as they navigate over a grid of squares. Users have the option to choose their preferred 
                                                                    colors, and there is an option for a random color each time they pass over a square. The grid size is 
                                                                    customizable, allowing users to select any number between 0 and 100. Users can also enable a "Shading Effect", 
                                                                    creating shades as they move over pre-filled squares. The canvas can be easily cleared with the "Clear" button. 
                                                                    I created this website's layout and design using flexbox, utilizing HTML, CSS, and JS. I used DOM to implement 
                                                                    most features.
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