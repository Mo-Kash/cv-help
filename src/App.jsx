import GeneralInfo from './components/GeneralInfo'
import EduExp from './components/EduExp'
import PracticalExp from './components/PracticalExp'
import Homepage from './components/Homepage'
import CVresult from './components/CVresult'
import { useState } from 'react'
import { CvProvider } from './context/CVcontext'
import './index.css'
import Projects from './components/Projects'

const App = () => {

  const [state, setState] = useState("");
  
  return (
      <CvProvider>
        <>
        {
            state==="Create"?
              <>
                <p className="app-heading">Create Your CV</p>
                <hr />
                <div className="content">
                  <div className='information-section'>
                    <p className='info-heading'>Enter and Edit Information</p>
                    <GeneralInfo />
                    <EduExp />
                    <PracticalExp />
                    <Projects />
                  </div>
                  <div className="cv-page">
                    <p className='result-heading'>Your CV:</p>
                    <CVresult />
                  </div>
                </div>
                <p className='footer'>© Mo-Kash, 2025.</p>
              </>
              :
              <div className="home">
                <Homepage setState={setState}/>
              </div>
        } 
        </>
      </CvProvider>
  )
}

export default App
