import React from 'react'

const Footer = () => {
    const year=new Date().getFullYear();
  return (
    <footer>
        copyright &copy; { year.getFullYear} </footer>
      
   
  )
}

export default Footer