import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react';
import './additem.css';

const Additem = ({newItem,setNewitem,addnewitem}) => {
  const inputref = useRef()
  return (
   <form className='addform' onSubmit={addnewitem}>
        <label htmlFor="additem">AddItem
        </label>
        <input 
            autoFocus
            type="text"
            id='additem'
            ref={inputref}
            placeholder='Add item'
            required
            value={newItem}
            onChange={(e)=>setNewitem(e.target.value)}
             />
        <button
            type='submit'
            onClick={()=>inputref.current.focus()}
            aria-label='additem'>
            <FaPlus 
            role='button'
            tabIndex="0"
            />
        </button>
   </form>
  )
}

export default Additem