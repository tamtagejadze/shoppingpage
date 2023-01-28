import React, { useReducer } from 'react'
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import apiRequests from '../../hooks/apiRequests';
import productReducer from '../../hooks/product.reducer';
import Header from '../Header/Header'

function Cart({initialCount}) {
    const [state, dispatch] = useReducer(productReducer, {count: 0})    
    const {data} = useQuery("products", () => apiRequests('GET', "products"))
    const {t} = useTranslation();

  return (
    <div className='cart-div'>
      <Header/>
      <div className='cart-container'>
        <div className='cart-left'> 
          <nav className='cart-nav'>
            <li>{t('PRODUCTNAME')}</li>
            <li>{t('QUANTITY')}</li>
            <li>{t('PRICE')}</li>
            <li>{t('TOTAL')}</li>
          </nav>
          <div className='cart-content'>
            {
              (data || []).map((item) => {
                if(item.id<5) return (
                  <div className='cart_items' key={item.id}>
                    <div className='product-name'>
                      <img className='cart-img' src={item.image} />
                      <span>{item.title}</span>
                    </div>
                    <div className='product-qty'>
                      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
                      <span>{state.count}</span>
                      <button onClick={() => dispatch({type: 'increment'})}>+</button>
                    </div>
                    <div className='product-price'>
                      <h3>{item.price}</h3>
                    </div>
                    <div className='product-price'>
                      <h3>{item.price}</h3>
                    </div>
                  </div>   
                ); else return ''
              })
            }               
          </div>
          <button className='cart-reset-btn' onClick={() => dispatch({type: 'reset', payload: initialCount})}>{t('RESET')}</button>
        </div>
        <div className='cart-right'>
            <h3>{t('TOTAL')}</h3>
            <div>
              <span>{t('TOTALAMOUNT')}</span>
              <br/>
              <span>{t('TOTAL')}:</span>
            </div>
            <button>{t('BUY')}</button>
        </div>
      </div>
    </div>
  )
}

export default Cart