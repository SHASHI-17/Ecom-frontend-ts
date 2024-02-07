import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/cart-items";
import { Link } from "react-router-dom";

const cartItems=[
  {
    productId:"asf",
    photo:"https://rukminim2.flixcart.com/image/416/416/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70&crop=false",
    name:"max",
    price:3000,
    quantity:40,
    stock:10,

  }
]
const SubTotal=4000
const tax =Math.round( SubTotal * 0.18);
const shippingcharges=200;
const discount=200;
const total=SubTotal+tax+shippingcharges;
const Cart = () => {
  const [couponCode,setCouponCode]=useState<string>("");
  const [isValidCouponCode,setIsValidCouponCode]=useState<boolean>(false);

  useEffect(()=>{
      const timeoutID=setTimeout(()=>{
          if(Math.random()>0.5) setIsValidCouponCode(true);
          else setIsValidCouponCode(false)
      },1000);
      return ()=>{
        clearTimeout(timeoutID);
        setIsValidCouponCode(false);
      }
  },[couponCode])

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? cartItems?.map((i,index) => (
          <CartItem key={index} cartItem={i} />)) 
        : <h1>No Items Added</h1> }
      </main>
      <aside>
        <p>SubTotal : ₹{SubTotal}</p>
        <p>Shipping Charges : ₹{shippingcharges}</p>
        <p>Tax : ₹{tax}</p>
        <p>
          Discount: - <em>₹{discount}</em>
        </p>
        <p><b>Totak : ₹{total}</b></p>
        <input type="text" value={couponCode} placeholder="Coupon Code" onChange={e=> setCouponCode(e.target.value)} />
        {couponCode && (
          isValidCouponCode ? <span className="green">
          ₹{discount} off using the <code>{couponCode}</code>
        </span> : <span className="red">Invalid Coupon <VscError/></span>
        )}
        {cartItems.length>0 && <Link to={'/shipping'}>
        Checkout</Link>}
      </aside>
    </div>
  )
}

export default Cart