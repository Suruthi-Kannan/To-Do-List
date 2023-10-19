import React from 'react';

const Head = (props) => {
  return (
    <header>
    <div>{props.title}</div>
    </header>
  )
}
Head.defaultProps={
  title :"Head"
}
export default Head