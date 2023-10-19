/* import logo from './logo.svg'; */
import Head from "./Head";
import Itemlist from "./Itemlist";
import Content from "./content";
import Footer from "./footer";
import ItemSearch from "./itemsearch";
import Additem from "./Add_item";
import apirequest from "./apirequest";
import { useState,useEffect } from 'react';



function App() 
{
  const API='http://localhost:3500/item';
  const[item,setItem]=useState([]);
  const[newItem,setNewitem] =useState('')
  const[search,setSearch]=useState('')
  const[fetchError,setFetchError]=useState(null)
  const[isLoading,setIsLoading]=useState(true)

useEffect(()=>{
  const fetchItems=async()=>{
    try{
      const response = await fetch(API);
      if(!response.ok) throw Error("Data Not Found");
      const listitems = await response.json();
      setItem(listitems);
      setFetchError(null)
    }catch(err){
      setFetchError(err.message)
    }finally{
      setIsLoading(false)
    }
  }
setTimeout(()=>{
  (async ()=> await fetchItems())()
},2000)
}
,[])

  //add item function
    const addItem=async(items)=>
    {
      const id=item.length ?item[item.length-1].id+1:1;
      const addNewItem={id,checked:false,items}
      const listItems=[...item,addNewItem]
      setItem(listItems)
    
      const postOption={
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(addNewItem)
      }
      const result= await apirequest(API,postOption)
      if(result) setFetchError(result)
    }
    //change the check
  const changecheck=async(id)=>
  {
  const listItems =item.map((item)=>
    item.id===id ?{...item,checked:!item.checked}:item)
    setItem(listItems)

    const myItem =listItems.filter((item)=>item.id===id)
    const updateOption={
      method :'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({checked:myItem[0].checked})
    }
    const reqUrl=`${API}/${id}`
    const result=await apirequest(reqUrl,updateOption)
    if(result) setFetchError(result)
  }
  //delete button
  const dbutton =async(id)=>
  {
    const listItems=item.filter((item)=>
    item.id!==id)
    setItem(listItems)
    const deleteOption={
      method :'DELETE'
    }

    const reqUrl=`${API}/${id}`
    const result=await apirequest(reqUrl,deleteOption)
    if(result) setFetchError(result)
  }
  //double tab
  const dClick=(id)=>
  {
    const listItems =item.map((item)=>
    item.id===id ?{...item,checked:!item.checked}:item)
    setItem(listItems)
   
  }
  //add new item
  const addnewitem=(e)=>
  {
    e.preventDefault()
    if(!newItem) return;
    console.log(newItem)
    //additem
    addItem(newItem)
    setNewitem('')
  }
  
  return (
    <div>
    <Head  title="TO DO LIST"/>
     <Additem 
     newItem ={newItem}
    setNewitem={setNewitem}
    addnewitem={addnewitem}
    />
    <ItemSearch 
    search={search}
    setSearch={setSearch}
    />
  <main>
    {isLoading &&<p>{`Loding...`}</p>}
    {fetchError && <p>{`Error:${fetchError}`} </p>}
    {!isLoading && !fetchError && <Content 
    item={item.filter(item=>((item.items).toLowerCase()).includes(search.toLocaleLowerCase()))}
    key={item.id}
    changecheck={changecheck}
    dClick={dClick}
    dbutton={dbutton}
    />}
   </main> 
   <Footer 
   length={item.length}/>
   </div>
  )
}

export default App;
