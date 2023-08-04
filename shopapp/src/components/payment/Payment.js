import React, { useState, useEffect } from "react";
import axios from "axios";
import env from "react-dotenv";
import { useSelector, useDispatch } from "react-redux";
// import Razorpay from 'razorpay'

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('RazorPay');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [content, setContent] = useState("")

  let amount = useSelector((state) => state.subTotalReducer);
console.log("amt", amount)
  async function handleBuy() {
      console.log(paymentMethod)
    if(paymentMethod == 'RazorPay') {
        let res = await axios.post('http://localhost:4000/create/orderId/razorpay', {
            amount : amount, 
            name: name,
            email : email,
            phone : phoneNumber
        })
        .then(res => {
            alert(`Your total amount is ${amount} and confirm pay with ${paymentMethod}`);            
            razorpay(amount, name, email, phoneNumber) 
        })
        .catch(err => console.log("err", err))
    }
    else if(paymentMethod == 'PayTm') {
        let res = await axios.post('http://localhost:4000/create/orderId/paytm', {
            amount : amount, 
            name: name,
            email : email,
            phone : phoneNumber
        })
        .then(res => {
            console.log(res.data)
            setContent(res.data.order)
        })
    }
    else {
        console.log('please select a appropriate payment method')
    }
  }

  return (
      <div>
          {content ? <div dangerouslySetInnerHTML={{__html: `${content}`}}></div> : (
        <div className="body d-flex flex-column container">
        <div className="text-center mt-2">
          <h1>Welcome to the Payment Page</h1>
        </div>
        <div className="border border-primary my-2 px-5">
          <div className="form-main p-4">
            <form>
              <div className="mode  text-center mt-2">
                <label>Select Payment option</label>
                <select className="form-control" id="pay-opt" required value="RazorPay">
                  <option value="RazorPay">RazorPay</option>
                  {/* <option value="PayTm">PayTM</option> */}
                </select>
              </div>
    
              <div className="form-group  text-center mt-2">
                <label>Name: </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter your full name"
                  id="name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group  text-center mt-2">
                <label>Email: </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter your Email"
                  id="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group  text-center mt-2">
                <label>Phone: </label>
                <input
                  className="form-control"
                  type="phone"
                  placeholder="Enter your phone No. registered with payment option"
                  id="phone"
                  required
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
    
              <button
                type="button"
                id="rzp-button1"
                className="submit btn btn-primary text-center mt-2 w-100"
                onClick={handleBuy}
              >
                BUY
              </button>
            </form>
          </div>
        </div>
      </div>
      )}</div>
    
  )
}
let orderId;
function razorpay(totalamt, name, email, phn) {
    let options = {
        "key": 'rzp_live_Z4F87shT2a3elH', // Enter the Key ID generated from the Dashboard
        "amount": totalamt+'00', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Testing",
        "description": "Testing Payment",
        "image": "https://example.com/your_logo",
        "order_id": orderId, 
        "handler": function (response){
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature)
            let settings = {
                "url": "http://localhost:4000/api/payment/verify",
                "method": "POST",
                "timeout": 0,
                "headers": {
                    "Content-Type": "application/json"
                },
                "data": JSON.stringify({response}),
            }
        },
        "prefill": {
            "name": name,
            "email": email,
            "contact": phn
        },
        "theme": {
        "color": "#3399cc"
        },
    }

    
    let rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response){
        alert(response.error.code);
        alert(response.error.description);
    });
    rzp1.open();
    // e.preventDefault();
}

export default Payment;


