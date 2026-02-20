import { useState, useEffect } from 'react'
import downarrow from '../assets/icons/down-chevron_8213476.png'
import uparrow from '../assets/icons/up-chevron_8213544.png'
import logo from '../assets/bookmyglow_logo.png'
import profile_icon from '../assets/icons/profile.jpg'

const TopBar=()=> {
  const [businessIconShow,setBusinessIconShow]=useState(false)
  const [featureIconShow,setFeatureIconShow]=useState(false)
  const [imageNavbar,SetImageNavbar]= useState('')
  const [businessList,setBusinessList] = useState([
    {name:"default",img: "assets/salon_images/pexels-shkrabaanthony-6599031.jpg"},
    {name:"Hair Salon",img: "assets/salon_images/hair-salon-5200392_1280.jpg"},
    {name:"Beauty Salon",img: "assets/salon_images/beauty-salon-4043096_1280.jpg"},
    {name:"Nail Salon",img: "assets/salon_images/gettyimages-1357869157-612x612.jpg"},
    {name:"Tattoos and Piercing",img: "assets/service_images/images.jpg"},
    {name:"Massage Parlor",img: "assets/service_images/pexels-olly-3764568.jpg"},
    {name:"SPA",img: "assets/service_images/pexels-shkrabaanthony-4599374.jpg"},
  ])
  const [chunkedList,setChunkedList]=useState([])



  useEffect(()=>{
    SetImageNavbar(businessList[0].img)
    setChunkedList(listChunk(businessList,3))
  },[])


  function listChunk(array,size){
     let result=[]
    for(let i=1;i<array.length;i+=size){
      result.push(array.slice(i,i+size))
    }
    return result
  }
  
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/about">
          <img src={logo} width="100" height="100"/>

        </a>

        {/* Used when shifting to mobile view */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          
        >
          <span className="navbar-toggler-icon" style={{color:'white'}}></span>
        </button>

          {/* Business Card */}
        <div className='collapse navbar-collapse ms-5' id='navbarSupportedContent'>
            <ul className='navbar-nav'>
              <li className='nav-item dropdown' 
                  onMouseEnter={() => setBusinessIconShow(!businessIconShow)}
                  onMouseLeave={() => setBusinessIconShow(!businessIconShow)}>

                  <a className='nav-link text ' id="navbarDropdown" >

                    Businesses
                   
                      <img  className={`ms-2 arrow ${businessIconShow? "up":""}`} src={downarrow} width={15} height={15}/>
                    </a>

                  
                    <div className={`dropdown-card ${businessIconShow ? "show" : ""}`}  aria-labelledby='navbarDropdown'>
                      <p>What are you looking for?</p>
                      <div className='d-flex justify-content-between align-items-center'>

                        {
                           chunkedList.map((chunk,index)=>(
                              <div key={index}>
                                <ul>
                                  {chunk.map((data,index) =>(
                                    <li key={index}>
                                      <button className='card-button'  role='button' href="#"
                                        onMouseEnter={() =>  SetImageNavbar(data.img)}
                                        onMouseLeave={() =>  SetImageNavbar(businessList[0].img)}
                                      >
                                          {data.name}
                                      </button>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                           ))
                        }

                       <div >
                          <img className={`card-image-container `} src={imageNavbar} width={280} height={200}
                              />
                       </div>
                        
                      </div>
                  </div>
              </li>
              <li className='nav-item dropdown' 
                  onMouseEnter={() => setFeatureIconShow(!featureIconShow)}
                  onMouseLeave={() => setFeatureIconShow(!featureIconShow)}>

                  <a className='nav-link text ' id="navbarDropdown" >

                    Features
                    <img  className={`ms-2 arrow ${featureIconShow? "up":""}`} src={downarrow} width={15} height={15}/>
                    </a>

                  {featureIconShow && (
                    <div  className={`dropdown-card ${featureIconShow ? "show" : ""}`}  aria-labelledby='navbarDropdown'>
                      <p>What are you looking for?</p>
                      <div className='d-flex justify-content-between align-items-center'>

                        {
                           chunkedList.map((chunk,index)=>(
                              <div key={index}>
                                <ul>
                                  {chunk.map((data,index) =>(
                                    <li key={index}>
                                      <button className='card-button'  role='button' href="#"
                                        onMouseEnter={() =>  SetImageNavbar(data.img)}
                                        onMouseLeave={() =>  SetImageNavbar(businessList[0].img)}
                                      >
                                          {data.name}
                                      </button>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                           ))
                        }

                       <div >
                          <img className={`card-image-container `} src={imageNavbar} width={280} height={200}
                              />
                       </div>
                        
                      </div>
                  </div>
                )}
              </li>
              <li className='nav-item'>
                  <a className='nav-link text'> Prices</a>
              </li>

            </ul>
        </div>

        <div className='login-btn'>
          <button className='profile_btn'> <img className="profile_img" src={profile_icon} /></button>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;