import { useContext, useState } from "react";
import { CvContext } from "../context/CVcontext";
import "../styles/GeneralInfo.css";

const GeneralInfo = () => {
  const { setCvData } = useContext(CvContext);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    about: "",
    linkedin: ""
  });

  
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setCvData((prevData)=>({
        ...prevData,
        generalInfo: user,
    })); // Update global state
  };

  return (
    <div className="general-info">
      <p className="subsection">General Information</p>
      <form onSubmit={handleSubmit} className="general-form">
        <ul>
          <li>
            <label htmlFor="name-input">Your Name:</label>
            <input
              type="text"
              id="name-input"
              name="name"
              placeholder="John Smith"
              value={user.name}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="email-input">Your E-mail Address:</label>
            <input
              type="email"
              id="email-input"
              name="email"
              placeholder="abc@domain.com"
              value={user.email}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="phnum-input">Your Phone Number:</label>
            <input
              type="tel"
              id="phnum-input"
              name="phone"
              placeholder="1234567890"
              value={user.phone}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="linkedin-input">Your LinkedIn account:</label>
            <input
              type="text"
              id="linkedin-input"
              name="linkedin"
              placeholder="www.linkedin.com/JohnSmith"
              value={user.linkedin}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="about-input">Describe Yourself:</label>
            <input
              type="text"
              id="about-input"
              name="about"
              value={user.about}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="skills-input">Your Skillset:</label>
            <input
              type="text"
              id="skills-input"
              name="skills"
              placeholder="Skill 1, Skill 2,..."
              value={user.skills}
              onChange={handleChange}
            />
          </li>
        </ul>
        <button type="submit" className="btn submit-general-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default GeneralInfo;
