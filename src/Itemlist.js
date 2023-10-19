import React from 'react';
import {FaTrashAlt} from "react-icons/fa";

const Itemlist = ({item,changecheck,dClick,dbutton}) => {

  return (
    <ul>
      {item.map((item)=>
      <li className="item" key={item.id}> 
        <input 
        type="checkbox"
        onChange={()=>changecheck(item.id)}
        checked={item.checked} />
        <label onDoubleClick={()=>dClick(item.id)}>{item.items}
        </label>
        <FaTrashAlt
          role ="button"
          onClick={()=>dbutton(item.id)}
          tabIndex="0" 
          
          />
      </li>
      )}
    </ul>
  )
}

export default Itemlist