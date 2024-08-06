import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Home.css"
import { Link } from 'react-router-dom'

import yul from "../assets/yul.svg"
import a from "../assets/a.svg"
import icons from "../assets/icons.svg"
const Home = () => {
  const [products,setProducts]=useState([])

  useEffect(()=>{
    axios("https://reqres.in/api/users?page=2")  
    .then(response=> setProducts (response.data.data))
  },[])

    console.log(products);
    return (
      <div className='container'>
        
        {products.map(products => (
            <table  key={products.id}>
              <tbody>
                  <tr>
                    <td>
                    <img className='avatarca' src={products.avatar} alt="" />

                      <div className='title__wrapper'>

                             <Link className='link' to={`/about/${products.id}`}> 
                                <h2>{products.last_name}</h2>     
                                <h2>{products.first_name}</h2>   
                              </Link>
                              
                          
                          <img className='addition__img' src={yul} alt="" />
                      </div>
                      
                    </td>
                    <td>
                      <img className='a__img' src={icons} alt="" />
                      <span>{products.email}</span>
                      
                    </td>
                  </tr>
              </tbody>
            </table>
            ))}
      </div>  
    );
}
export default Home
