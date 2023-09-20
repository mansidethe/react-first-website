import "./Card.css";

import { useState } from "react";
 


export default function Card({ image, text, price }) {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  return (
    <div className="products">
      
      <div className="container">
        <div className="card">

         
          
          <button type="button" className="button-incre" onClick={increaseCount}>
            +
          </button>
          <span className="btn-count">{count}</span>
          <button type="button" className="button-incre" onClick={decreaseCount}>
            -
          </button>
        </div>
      </div>
      
    </div>
  );
}
