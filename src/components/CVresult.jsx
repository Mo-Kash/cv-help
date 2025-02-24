import { useContext } from "react";
import { CvContext } from "../context/CVcontext";
import "../styles/CVresult.css";
import "../styles/print.css";
import downloadicon from "../../src/assets/download.png";

const CVresult = () => {


  const { cvData } = useContext(CvContext); 


  return (
    <>
      <div className="cv-result">
        <div className="header">
          <div className="full-name">
            {cvData.generalInfo.name}
          </div>
          <div className="contact-info">
            <span className="email">Email: </span>
            <span className="email-val">{cvData.generalInfo.email}</span>
            <span className="separator" />
            <span className="phone">Phone: </span>
            <span className="phone-val">{cvData.generalInfo.phone}</span>
            <span className="separator" />
            <span className="linkedin">LinkedIn Account: </span>
            <span className="linked-in">{cvData.generalInfo.linkedin}</span>
          </div>
          <div className="about">
            <span className="desc">{cvData.generalInfo.about}</span>
          </div>
        </div>
        <hr />
        <div className="details">
          <div className="section">
            <div className="section__title">Education</div>
              <div className="section__list">
                {cvData.educationalInfo.length > 0 ? (
                    cvData.educationalInfo.map((element, index) => (
                      <div key={index} className="section__list-item">
                        <div className="left">
                          <div className="name">{`${element.instituteName}`}</div>
                          <div className="duration">{`${element.startMonth}, ${element.startYear} - ${element.endMonth}, ${element.endYear}`}</div>
                        </div>
                        <div className="right">
                          <div className="degree">{element.degree}</div>
                          <div className="cgpa">CGPA: {element.cgpa}</div>
                        </div>
                      </div>
                    ))
                  ) 
                  : (
                    <p>No educational information added yet.</p>
                  )
                }
              </div>
            </div>
          </div>
          <hr />
          <div className="section">
            <div className="section__title">Work Experience</div>
            <div className="section__list">
              {cvData.practicalExp.length > 0 ? (
                  cvData.practicalExp.map((element, index) => (
                    <div key={index} className="section__list-item">
                      <div className="left">
                        <div className="name">{`${element.companyName}`}</div>
                        <div className="duration">{`${element.startYear} - ${element.endYear}`}</div>
                      </div>
                      <div className="right">
                        <div className="name">{element.post}</div>
                        <div className="desc">{element.jobDesc}</div>
                      </div>
                    </div>
                  ))
                ) 
                : (
                    <p>No work experience added yet.</p>
                )
              }
            </div>
          </div>
          <hr />
          <div className="section">
            <div className="section__title">Projects</div>
            <div className="section__list">
              {cvData.projects.length > 0 ? (
                  cvData.projects.map((element, index) => (
                    <div key={index} className="section__list-item">
                      <div className="left">
                        <div className="name">{element.projTitle}</div>
                        <div className="text" style={{display:"flex", flexWrap: "wrap"}}>{element.projDesc}</div>
                      </div>
                      <div className="right">
                        <a href={element.projLink} target="blank">View Project</a>
                        <a href={element.repoLink} target="blank">Project Repository</a>
                      </div>
                    </div>
                  ))
                ) 
                : (
                  <p>No Projects added yet.</p>
                )
              }
            </div>
          </div>
          <hr />
          <div className="section">
            <div className="section__title">Skills</div>
            <div className="skills">
              <div className="skills__item">
                  <div className="name">{cvData.generalInfo.skills}</div>
              </div>
            </div>
          </div>
      </div>
      <button className="download-btn" onClick={()=>{window.print();}}><img src={downloadicon}/>Download CV</button>
    </>
  );
};

export default CVresult;

