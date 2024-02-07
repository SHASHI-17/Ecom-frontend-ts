import { ChangeEvent, useState } from "react"
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Shipping = () => {


    const [shippingInfo,setShippingInfo]=useState({
        address:"",
        city:"",
        country:"",
        pinCode:"",
        state:"",
    });

    const changeHandler=(e:ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        e.preventDefault();
            setShippingInfo(prev=>({...prev,[e.target.name]:e.target.value}));
    }
    const navigate=useNavigate();
  return (
    <div className="shipping">
            <button className="back-btn" onClick={()=>navigate('/cart')}>
                <BiArrowBack/>
            </button>
            <form >
                <h1>Shipping Address</h1>
                <input required type="text" placeholder="Address" name="address"
                 value={shippingInfo.address} onChange={changeHandler} />
                <input required type="text" placeholder="City" name="city"
                 value={shippingInfo.city} onChange={changeHandler} />
                <input required type="text" placeholder="State" name="state"
                 value={shippingInfo.state} onChange={changeHandler} />

                <select onChange={changeHandler} name="country" required value={shippingInfo.country}>
                        <option value="">Choose Country</option>
                        <option value="india">India</option>
                </select>

                <input required type="number" placeholder="Pin Code" name="pinCode"
                 value={shippingInfo.pinCode} onChange={changeHandler} />
                 <button type="submit">Pay Now</button>
            </form>
    </div>
  )
}

export default Shipping