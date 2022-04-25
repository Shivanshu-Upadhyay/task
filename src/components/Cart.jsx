import React, { useState } from 'react'
import './css/cart.css'

const Product = ({ img, value, item,dec,ince }) => {
  return (
    <>
      <div className="product">
        <div className="imgbox">
          <img src={img} alt="" />
          <div style={{ textAlign: "center" }}>
            <span style={{ background: "aliceblue" }}>
              <button
                style={{ marginRight: "20px", border: "none" }}
                onClick={dec}
              >
                <i className="fa-solid fa-circle-minus fa-lg"></i>
              </button>
              {item}
              <button
                style={{ marginLeft: "20px", border: "none" }}
                onClick={ince}
              >
                <i className="fa-solid fa-square-plus fa-lg"></i>
              </button>
            </span>
          </div>
        </div>
        <div>
          <h1>Querty watch Lesther strap </h1>
          <br />
          <h2>₹{value} </h2>
          <br />

          <h3>Color: Brown</h3>
          <br />
          <h6>In Stack</h6>
          <br />
          <button className="delete">Delete</button>
          <button className="seemore">See More Like this</button>
        </div>
      </div>
    </>
  );
};

function Cart() {
     let a = 12000;
     let b = 1000;
     let c = 500;
     const [item1, setitem1]=useState(0)
     const [item2, setitem2]=useState(0)
     const [item3, setitem3]=useState(0)
     

     const ince = ()=>{
         setitem1(item1+1)
     }
     const dec = ()=>{
         setitem1(item1-1)
     }
     const ince2 = ()=>{
         setitem2(item2+1)
     }
     const dec2 = ()=>{
         setitem2(item2-1)
     }
     const ince3 = ()=>{
         setitem3(item3+1)
     }
     const dec3 = ()=>{
         setitem3(item3-1)
     }
    

  return (
    <div>
      <header className="header">
        <i className="fa-solid fa-bars fa-2xl " style={{ color: "red" }}></i>
        <i className="fa-solid fa-bars fa-2xl " style={{ color: "red" }}></i>
      </header>
      <div style={{ textAlign: "center" }} className="bgcolor">
        <i className="fa-solid fa-magnifying-glass iconserch"></i>
        <input type="search" placeholder="Search" className="search" />
        <br />
      </div>
      <Product
        img="https://picsum.photos/300/300"
        value={a}
        item={item1}
        ince={ince}
        dec={dec}
      />
      <Product
        img="https://picsum.photos/300/301"
        value={b}
        item={item2}
        ince={ince2}
        dec={dec2}
      />
      <Product
        img="https://picsum.photos/301/300"
        value={c}
        item={item3}
        ince={ince3}
        dec={dec3}
      />

      <h2 style={{ textAlign: "center" }}>
        SubTotal ₹{a * item1 + b * item2 + c * item3}
      </h2>
      <div style={{ textAlign: "center" }}>
        <button className="lastbutton">
          Proceed to by ({item1 + item2 + item3} items)
        </button>
      </div>
    </div>
  );
}

export default Cart