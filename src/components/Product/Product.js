import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router'
import apiDetails from '../../hooks/apiDetails';
import Header from '../Header/Header';

function Product() {
    const param = useParams();
    const {data, isLoading} = useQuery(["product" , param.productId], () => apiDetails("GET",  param.productId))
    
    if(isLoading){
        return <div className="loader"></div>
      } 
    return (
        <div className='product-container'>
        <Header/>
            
            <div className='container-details'>
                <img src={data.image[0]} />
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <span>{data.category}</span>
                <h3>{data.price}</h3>
                <button className='add_button'>Add to Cart</button>
            </div>
          
        </div>
  )
}

export default Product