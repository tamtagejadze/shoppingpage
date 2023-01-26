import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import apiRequests from '../apiRequests';

function ShoppingPage() {
    const {t}=useTranslation()
    const [products, setProducts] = useState([]);
    const {data, isLoading} = useQuery("products", () => apiRequests('GET', "products"));
    
    console.log(data);

    useEffect(() =>{
        if(data){
            setProducts(data)
        }
    },[data])

  return (
    <>
        <h2>{t('OFFER')}</h2>
        {isLoading ? <div className="loader"></div> :(
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
        )}
    </>
  )
}

export default ShoppingPage