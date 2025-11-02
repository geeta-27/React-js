import React,{useState} from "react"

function OnChange(){
    const [name, setName]=useState("");
    const [quantity, setQuantity]=useState(0);
    const [comment, setComment]=useState("");
    const [payment, setPayment]=useState("");
    const [shipping, setShipping]=useState("");

    const handleNameChange=(event)=>{setName(event.target.value)};
    const handleQuantityChange=(event)=>{setQuantity(event.target.value)};
    const handleCommentChange=(event)=>{setComment(event.target.value)};
    const handlePaymentChange=(event)=>{setPayment(event.target.value)};
    const handleShippingChange=(event)=>{setShipping(event.target.value)};
   
    return(
        <div className="ONCHANGE">
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quanatity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter the delivery instructions"/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
            <option value="">Selcet an option</option>
            <option value="Visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="GiftCard">GiftCard</option>
            </select>
            <p>Payment: {payment}</p>

            <lable>
                <input type="radio" value="Pick Up" checked={shipping==="Pick Up"}
                on onChange={handleShippingChange}/>Pick Up
            </lable><br></br>
            <lable>
                <input type="radio" value="Delivery" checked={shipping==="Delivery"}
                on onChange={handleShippingChange}/>Delivery
            </lable>
            <p>Delivery: {shipping}</p>
        </div>
    );
}
export default OnChange