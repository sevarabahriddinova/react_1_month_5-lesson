import React, { useEffect, useState } from 'react' 
import { useParams } from 'react-router-dom'
import axios from 'axios';

const About = () => {
 
  const [products,setProduct]=useState(null);

  const {id}=useParams () 
  
  useEffect(()=>{
    axios(`https://reqres.in/api/users?page=2/${id}`)  
    .then(response => setProduct (response.data.data))
  },[])

  return (
 <div>
     {
      products && <div>
        <h2>{products.last_name}</h2>     
        <h2>{products.first_name}</h2> 
      </div>
     }
 </div>
    )
}

export default About