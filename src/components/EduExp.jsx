import { useContext, useState } from 'react'
import '../styles/EduExp.css'
import { CvContext } from '../context/CVcontext';
import deleteicon from '../assets/trash-bin.png';
import addicon from '../assets/add.png';

const EduExp = () => {

    const {setCvData} = useContext(CvContext);

    const [institutes, setInstitutes] = useState([
        { 
            instituteName: "", 
            degree: "",
            startMonth: "", 
            startYear: "",
            endMonth: "",
            endYear: "", 
            cgpa: "",
            id: crypto.randomUUID()
        },
    ]);

    const addInstituteForm = ()=>{
        setInstitutes([
            ...institutes,
            {
                instituteName: "", 
                degree: "",
                startMonth: "", 
                startYear: "",
                endMonth: "",
                endYear: "", 
                cgpa: "",
                id: crypto.randomUUID()
            }
        ]);
    };

    const removeInstitute = (e)=>{
        setInstitutes((prevInstitutes) => prevInstitutes.filter(institute => institute.id !== e.id));
    };

    const handleSubmit = (e)=>{
        e.preventDefault();

        console.log(institutes);
        setCvData((prevData)=>({
            ...prevData,
            educationalInfo: institutes,
        }));
    }

    const handleChange = (i, e) =>{
        setInstitutes((prevInstitutes) => {
            return prevInstitutes.map((inst) =>
                inst.id === i ? { ...inst, [e.target.name]: e.target.value } : inst
            );
        });
    };

    return (
        <div className='education'>
            <p className="subsection">Education</p>
            <div className="for-border">
                <button type='button' className='add-institute-btn' onClick={()=>{addInstituteForm()}}><img src={addicon}/></button>
            </div>
            <form className='edu-form' onSubmit={handleSubmit}>
                {
                    institutes.map((element)=>(
                        <div className="uniForm"  key={element.id}>
                            <ul>
                                <li><label htmlFor="college-input">University Attended: <input type="text" name='instituteName'id='college-input' value={element.instituteName || ""} onChange={(e)=>handleChange(element.id, e)}/></label></li>
                                <li><label htmlFor="degree-input">Degree: <input type="text" name='degree'id='degree-input' value={element.degree || ""} onChange={(e)=>handleChange(element.id, e)}/></label></li>
                                <li>
                                    Start Date: 
                                    <label htmlFor="start-month">Month:</label>
                                    <select name='startMonth' id='start-month' value={element.startMonth || ""} onChange={(e)=>handleChange(element.id, e)}>
                                        <option value=""></option>
                                        <option value="January">January</option>
                                        <option value="February">February</option>
                                        <option value="March">March</option>
                                        <option value="April">April</option>
                                        <option value="May">May</option>
                                        <option value="June">June</option>
                                        <option value="July">July</option>
                                        <option value="August">August</option>
                                        <option value="September">September</option>
                                        <option value="October">October</option>
                                        <option value="November">November</option>
                                        <option value="December">December</option>
                                    </select>
                                    <label htmlFor="start-year">Year</label>
                                    <input type="text" name="startYear" id="start-year" value={element.startYear || ""} onChange={(e)=>handleChange(element.id, e)}/>
                                </li>
                                <li>
                                    End Date: 
                                    <label htmlFor="end-month">Month:</label>
                                    <select name='endMonth' id='end-month' value={element.endMonth || ""} onChange={(e)=>handleChange(element.id, e)}>
                                        <option value=""></option>
                                        <option value="January">January</option>
                                        <option value="February">February</option>
                                        <option value="March">March</option>
                                        <option value="April">April</option>
                                        <option value="May">May</option>
                                        <option value="June">June</option>
                                        <option value="July">July</option>
                                        <option value="August">August</option>
                                        <option value="September">September</option>
                                        <option value="October">October</option>
                                        <option value="November">November</option>
                                        <option value="December">December</option>
                                    </select>
                                    <label htmlFor="end-year">Year</label>
                                    <input type="text" name="endYear" id="end-year" value={element.endYear || ""} onChange={(e)=>handleChange(element.id, e)}/>
                                </li>
                                <li><label htmlFor="cgpa-input">CGPA on Graduation: <input type="text" name='cgpa' id='cgpa-input' value={element.cgpa || ""} onChange={(e)=>handleChange(element.id, e)}/></label></li>
                            </ul>
                            <button type='button' className='remove-institute-btn' onClick={()=>removeInstitute(element)}><img src={deleteicon}/></button>
                        </div>
                    ))
                }
                <button type='submit' className='btn submit-institutes'>Submit Educational Information</button>
            </form>
        </div>
    )
}

export default EduExp
