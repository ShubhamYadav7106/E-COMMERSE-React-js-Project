import React, { useEffect, useState } from 'react'
import './cartStyle.css';
function Cart({cartData}) {
    const[cart,setCart]=useState(cartData)

    useEffect(()=>{
        setCart(cartData)
    },[cartData])

    const delItem=(key)=>{
        const updatedCartData=[...cart]
        updatedCartData.splice(key,1)
        localStorage.setItem('cart',JSON.stringify(updatedCartData))
        setCart(updatedCartData)

    }
    const calculatedTotal=()=>{
        return cart.reduce((total,item)=>total+item.price,0)
    }
  return (
    <div className='list_container'>
        <div className='cart_title'>
            <h1>Your List</h1>
        </div>
        {
            cart.map((item,index)=>(
                <div key={index} className='cartList'>
                            <span>{item.title}</span>
                            <p>{item.desc} </p>
                            <span>Price :${item.price}</span>
                            <br/><button onClick={()=>delItem(index)}>Remove</button>
                </div>
            ))
        }
        <p className='total'> Total Price: {calculatedTotal()}</p>
    </div>
  )
}

export default Cart 