import React from 'react'
import Itemlist from './Itemlist';
const Content = ({item,changecheck,dClick,dbutton}) => {

  
  // const [name,setName]=useState("javascript");
  // function Namechange(){
  //   const cont=["java","javascript","python"];
  //   const con = Math.floor(Math.random()*3);
  //   setName(cont[con]);
  // const Onclick=(name)=>{
  //   console.log(`thank you ${name}`)
  //  }
  // const [count,setCount]=useState(1);
  // function increment(){
  //   setCount(count+1);
  // }
  // function decrement(){
  //   setCount(count-1)
  // }
     return (
  <>
   {(item.length)?
      <Itemlist 
      item={item}
      key={item.id}
      changecheck={changecheck}
      dClick={dClick}
      dbutton={dbutton}
      />
 
  :
      <p style={
        {
          fontSize:'2rem'
        }
      }>Empty List</p>}
  {/* // <p>Hello {name} World</p>
  // <button onClick={Namechange}>Click</button> */}
  {/* <button onClick={decrement}>-</button>
  <span>{count}</span>
  <button onClick={increment}>+</button> */}
  </>
  )
}

export default Content