import React, { useState } from 'react'
import { IoCart } from "react-icons/io5";
import Product from './Product';

const showProduct = (props) => {
    let summ = 0;
    props.product.forEach(el => summ += Number.parseFloat(el.price))
    return ( <div>
    <p className='all-summ'>Общая сумма: {new Intl.NumberFormat().format(summ) +' сом'}</p>
    {props.product.map(el => (
        <Product onDelete={props.onDelete} key={el.id} item={el} />
    ))}
    </div>)
}
// 
const showNotProduct = () => {
    return (<div className='empty'>
        <h2>Пока здесь нет товаров</h2>
    </div>)
}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false);
    
    const handleCart = () => {
        setCartOpen(cartOpen = !cartOpen)
    }

  return (
    <header>
        <div className='header-nav'>
            <span className='logo'>Gadget <span className='logo-comp'>.kg</span></span>
            <IoCart  className={`shop-btn ${cartOpen && 'active'}`} onClick={handleCart}/>
            {cartOpen && (
                <div className='shop-cart'>
                    {props.product.length > 0 ? 
                        showProduct(props) : showNotProduct()
                    }
                </div>
            )}
        </div>
        
        <div className='presentation'>
           
        </div>
    </header>
  )
}
