import { useContext, useState } from 'react'
import '../styles/PracticalExp.css'
import { CvContext } from '../context/CVcontext';
import deleteicon from '../assets/trash-bin.png';
import addicon from '../assets/add.png';

const PracticalExp = () => {

  const {setCvData} = useContext(CvContext);

  const [companies, setCompanies] = useState([
    {
      companyName: "",
      post: "",
      startYear: "",
      endYear: "",
      jobDesc: "",
      id: crypto.randomUUID()
    }
  ]);

  const addCompanyForm = ()=>{
    setCompanies([
      ...companies, 
      {
        companyName: "",
        post: "",
        startYear: "",
        endYear: "",
        jobDesc: "",
        id: crypto.randomUUID()
      }
    ]);
  };

  const removeCompany = (e) => {
    setCompanies((prevCompanies) => prevCompanies.filter(company => company.id !== e.id));
  };

  const handleSubmit = (e)=>{
    e.preventDefault();

    console.log(companies);
    setCvData((prevData)=>({
      ...prevData,
      practicalExp: companies,
    }))
  };

  const handleChange = (i, e)=>{
    setCompanies((prevCompanies) => {
      return prevCompanies.map((company) =>
          company.id === i ? { ...company, [e.target.name]: e.target.value } : company
      );
  });
  }

  return (
    <div className='practical'>
      <p className="subsection">Work Experience</p>
      <div className="for-border">
        <button type='button' className='add-company-btn' onClick={()=>addCompanyForm()}><img src={addicon}/></button>
      </div>
      <form id='practical-form' onSubmit={handleSubmit}>
        {
          companies.map((element)=>(
            <div className="practForm" key={element.id}>
              <ul>
                <li>
                  Company:
                  <input type="text" name='companyName' id='company' onChange={(e)=>handleChange(element.id, e)}/>
                </li>
                <li>
                  Post:
                  <input type="text" name="post" id="post" onChange={(e)=>handleChange(element.id, e)}/>
                </li>
                <li>
                  Start Year:
                  <input type="text" name='startYear' id='start-year' onChange={(e)=>handleChange(element.id, e)}/>
                </li>
                <li>
                  End Year:
                  <input type="text" name='endYear' id='end-year' onChange={(e)=>handleChange(element.id, e)}/>
                </li>
                <li>
                  Description:
                  <input type="text" name="jobDesc" id="job-desc" onChange={(e)=>handleChange(element.id, e)}/>
                </li>
              </ul>
              <button type='button' className='remove-company-btn' onClick={()=>removeCompany(element)}><img src={deleteicon}/></button>
            </div>
          ))
        }
        <button type='submit' className='btn submit-companies'>Submit Practical Experience</button>
      </form>
    </div>
  )
}

export default PracticalExp
