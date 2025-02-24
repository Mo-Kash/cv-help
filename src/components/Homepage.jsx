import '../styles/Homepage.css'

const Homepage = ({setState}) => {
  return (
    <>
      <div className='home-page'>
        <p className='app-name'>CV Helper</p>
        <button type='button' className='create-cv-btn' onClick={()=>{setState("Create")}}>Create CV</button>
        <p className='footer'>© Mo-Kash, 2025.</p>
      </div>
    </>
  )
}

export default Homepage