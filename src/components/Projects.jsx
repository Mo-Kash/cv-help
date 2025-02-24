import { useContext, useState } from 'react'
import '../styles/Projects.css'
import { CvContext } from '../context/CVcontext';
import deleteicon from '../assets/trash-bin.png';
import addicon from '../assets/add.png';

const Projects = () => {

  const {setCvData} = useContext(CvContext);

  const [projects, setProjects] = useState([
    {
        projTitle: "",
        projDesc: "",
        projLink: "",
        repoLink: "",
        id: crypto.randomUUID()
    }
  ]);

  const addProjectForm = ()=>{
    setProjects([
        ...projects,
        {
            projTitle: "",
            projDesc: "",
            projLink: "",
            repoLink: "",
            id: crypto.randomUUID()
        }
    ])
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(projects);

    setCvData((prevData)=>({
        ...prevData,
        projects
    }))
  }

  const handleChange = (i, e)=>{
    setProjects((prevProjects)=>{
        return prevProjects.map((project)=>{
            return project.id===i? {...project, [e.target.name]:e.target.value} : project;
        })

    })
  }

  const removeProject = (element)=>{
    setProjects((prevProjects)=>{return prevProjects.filter(project=>project.id!==element.id)})
  }

  return (
    <div className='projects'>
      <p className="subsection">Projects</p>
      <div className="for-border">
        <button type='button' className='add-project-btn' onClick={()=>{addProjectForm()}}><img src={addicon}/></button>
      </div>
      <form id='project-form' onSubmit={handleSubmit}>
        {
            projects.map((element)=>(
                <div className="projForm" key={element.id}>
                    <ul>
                        <li>
                            Project Title:
                            <input type="text" name='projTitle' id='proj-title' onChange={(e)=>handleChange(element.id, e)}/>
                        </li>
                        <li>
                            Description:
                            <input type="text" name="projDesc" id="proj-desc" onChange={(e)=>handleChange(element.id, e)}/>
                        </li>
                        <li>
                            Preview Link:
                            <input type="text" name='projLink' id='proj-link' onChange={(e)=>handleChange(element.id, e)}/>
                        </li>
                        <li>
                            Repository Link:
                            <input type="text" name="repoLink" id="repo-link" onChange={(e)=>handleChange(element.id, e)}/>
                        </li>
                    </ul>
                    <button type='button' className='remove-project-btn' onClick={()=>removeProject(element)}><img src={deleteicon}/></button>
                </div>
            ))
        }
        <button type='submit' className='btn submit-projects-btn'>Submit Projects</button>
      </form>
    </div>
  )
}
export default Projects
