import React, { useEffect, useState } from 'react'
import useRequest from '../../hooks/useRequest';

function ShoppingPage() {
    const [products, setProducts] = useState([]);
    const [data] = useRequest('GET', "products") 
    console.log(data);

    useEffect(() =>{
        if(data){
            setProducts(data)
        }
    },[data])

  return (
    <>
        <h2>დღის შეთავაზება</h2>
        <div className='container'>
        {
        products.map(item =>( 
            <div className='items_div'>
                <img className='img' src={item.image} />
                <span>{item.title}</span>
                <p>{item.description}</p>
                <h3>{item.price}</h3>
                <button className='add_button'>Add To Cart</button>
            </div>  
        ))
        }
        
        </div>
    </>
  )
}

export default ShoppingPage