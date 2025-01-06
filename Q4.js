import React, { useEffect, useState } from 'react'



function Q4() {


const[tittle,setTitle]= useState()
const[id,setId]= useState([1])
const[price,setPrice]= useState()
const[category,setCategory]= useState()
const[description,setDescription]= useState()


useEffect(()=>{
  fetchData();

},[id])

  const fetchData = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    console.log(data);
    setTitle(data.title);
    setId(data.id);
    setPrice(data.price);
    setDescription(data.description);
    setCategory(data.category);
    
  };
 
  return (
    <div className='App'>
   
      <h3>Product Details</h3>
      <div className='products'>
      <p><b>Id: </b> <input 
      placeholder='Id'
      value={id}
      onChange={(e)=>setId(Number(e.target.value))}
      />
      </p>
      
     
      <p><b>Title: </b>{tittle}</p>
      <p> <b>Price: </b>RS-{price}</p>
      <p> <b>Category: </b> {category}</p>
      <p><b>Description: </b>{description}</p>
      </div>
      <hr></hr>
    </div>
  )
}

export default Q4