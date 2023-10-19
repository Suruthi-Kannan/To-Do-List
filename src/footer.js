import React from 'react';

const Footer = ({length}) => {
    const year=new Date();
  return (
    <footer>
      Copyright &copy; {year.getFullYear()}
      <p>{length} List {length===1 ?"Item":"Items"}</p>
    </footer>
  )
}

export default Footer