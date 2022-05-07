import React from 'react'
import './style.css'

const Subtotal = () => {
  return (
    <div className="subtotal">
      <p>
        Subtotal <span>589.98&</span>{" "}
      </p>
      <p>
        Tax <span>2.53&</span>{" "}
      </p>
      <p>
        Shipping <span>0.00&</span>{" "}
      </p>
      <p>
        Total <span>592.51&</span>{" "}
      </p>
    </div>
  );
}

export default Subtotal