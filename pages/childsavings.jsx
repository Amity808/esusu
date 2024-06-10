import React from 'react'
import bg from "../public/homebg.png";
import Navbar from "../components/Navbar"
import ChildSavings from "../components/ChildSavings"

const Childsavings = () => {
    const headerStyle = {
        backgroundImage: `url(${bg.src})`,
        /* Additional styles can be added here */
    
        // Set background size to cover the container by default
        backgroundSize: "cover",
    
        // Center the background image by default
        backgroundPosition: "center",
    
        // Media query for mobile devices
        "@media (maxWidth: 768px)": {
          backgroundSize: "auto", // Adjust background size for smaller screens
          backgroundPosition: "center", // You can adjust this as needed
        },
      };
  return (
    <div style={headerStyle} className=' h-screen'>
        <div>
            <Navbar />
        </div>
        <ChildSavings />
    </div>
  )
}

export default Childsavings