import React from 'react'
import SC1 from '../assets/Screenshot 2025-03-24 175540.png'
import SC2 from '../assets/Screenshot 2025-03-24 175647.png'
import SC3 from '../assets/Screenshot 2025-03-24 175715.png'
import SC4 from '../assets/Screenshot 2025-03-24 175733.png'
import SC5 from '../assets/Screenshot 2025-03-24 175807.png'
import { motion } from "motion/react"

const test_sction = () => {
  return (
    <>
    <div className="container">
      <motion.div className="mt-5 mb-5" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
        <img className="w-100" src={SC2}/>
      </motion.div>
      <motion.div className="mt-5 mb-5 d-flex justify-content-between align-items-center" initial={{scale:0}} animate={{rotate:720, scale:1}} transition={{duration:2}}  >
        <img  className="image-caraosel" src={SC1}/>
        <img  className="image-caraosel" src={SC2}/>
      </motion.div>
      {/* <div className="mt-5 mb-5">
        <img  className="w-100" src={SC3}/>
      </div>
      <div className="mt-5 mb-5">
        <img  className="w-100" src={SC4}/>
      </div>
      <div className="mt-5 mb-5">
        <img  className="w-100" src={SC5}/>
      </div>
      <div className="mt-5 mb-5">
        <img  className="w-100" src={SC1}/>
      </div> */}
    </div>
    </>
  )
}

export default test_sction
