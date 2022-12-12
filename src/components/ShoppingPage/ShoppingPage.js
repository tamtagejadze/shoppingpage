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
        <h2>დღის შეთავაზება</h2>
        <ul>
        {
        products.map(item =>( 
            <div>
                <li key={item.id} > 
                <img src={item.image} />
                <span>{item.title}</span>
                <p>{item.description}</p>
                <h3>{item.price}</h3>
                </li> 
            </div>  
        ))
        }
        </ul>
    </div>
  )
}

export default ShoppingPage