import React from "react"
import './additem.css';

const ItemSearch = ({search,setSearch}) => {
  return (
    <form className="searchitem" onSubmit={(e)=>e.preventDefault()}>
    <label htmlFor="search">Search</label>
    <input 
    id='search'
    type="text"
    role='searchbox' 
    placeholder="Seach Items"
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
    />
    
    </form>
  )
}

export default ItemSearch