import Card from "./Card"
import React from "react";
import "./Thankyou.css";

const Thankyou = ({rating}) =>{
    return(
        <Card>
            <div className="thank_you_img_container">
                <img src="images/thank-you.svg"/>
            </div>
            <div className="selected">
                <p>You selected {rating} out of 5</p>
            </div>
            <h2 className="title">Thank You!</h2>
            <p className="text">
                We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
            </p>
        </Card>
    )
}
export default Thankyou;