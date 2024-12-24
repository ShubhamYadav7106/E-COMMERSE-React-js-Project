// import React from 'react'

import { useEffect, useState } from "react";
import Data from "./Data";
import Cart from "./cart";
import './cartStyle.css'

const ShowPage=()=> {

  const[myItems,setMyItems]=useState([])

  useEffect(()=>{
    const existingItems=JSON.parse(localStorage.getItem('cart'))||[]
    setMyItems(existingItems)
  },[])

  const addProduct=(item)=>{
    // alert(product.title)
    const newItems={
      ...item,
      count:1
    }
    setMyItems((preItems)=>[...preItems,newItems])

    localStorage.setItem('cart',JSON.stringify([...myItems,newItems]))
  }                            
  return (<>
    <section className="shop">
      
        <div className="cart_container">
        <h1>This is My Books</h1>
        <div className="shop">
            {
                Data.map((item,key)=>(
                    <div className="item" key={key}>
                            <h2>{item.title}</h2>
                            <p>{item.desc} </p>
                            <span>Price :${item.price}</span>
                            <br/><button onClick={()=>addProduct(item)}>Add To Cart</button>
                    </div>
                ))
            }
        </div>
        </div>
    </section>
    { 
    myItems.length > 0 && //jab list me kuch hoga tbi dikega refersh time m
    <Cart cartData={myItems}/>}
    </>
  )
}

export default ShowPage;