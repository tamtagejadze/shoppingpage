import React, { useEffect, useState } from 'react'
import useRequest from '../../hooks/useRequest';

function ShoppingPage() {
    const [products, setProducts] = useState([]);
    const [data] = useRequest('GET', "/products") 
    console.log(data);

    useEffect(() =>{
        if(data){
            setProducts(data)
        }
    },[data])

  return (
    <div>
        <ul>
        {
        products.map(item =>( 
            <li key={item.id} > 
               <img src={item.image} />
               <span>{item.title}</span>
               <p>{item.description}</p>
               <h3>{item.price}</h3>
            </li>   
        ))
        }
        </ul>
    </div>
  )
}

export default ShoppingPage