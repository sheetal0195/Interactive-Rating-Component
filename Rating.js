import "./Rating.css";
import Card from "./Card";
import { useState } from "react";

const Rating = ({rating, setRating, setShowThankYouPage}) =>{
    const[activeRating, setActiveRating] = useState({
        oneStar: false,
        twoStar: false,
        threeStar: false,
        fourStar: false,
        fiveStar: false,
    });

    const handleSubmit = () =>{
        if(!rating) return;
        setShowThankYouPage(true);
    }
    return <Card>
        <div className="star_img_container">
            <img alt="" src="images/icon-star.svg"/>
        </div>
        <h2 className="title">How did we do?</h2>
        <p className="text">
            Please let us know how we did with your support request. All feedback os appreciated to help us omprove our offering! 
        </p>
        <div className="rating">
            <div 
                className={activeRating.oneStar ? "rating_container active" : "rating_container"}
                onClick = {() =>{
                    setActiveRating({
                        oneStar: true,
                        twoStar: false,
                        threeStar: false,
                        fourStar: false,
                        fiveStar: false,
                    });
                    setRating(1);
                }}
            >
                1
            </div>
            <div 
                className={activeRating.twoStar ? "rating_container active" : "rating_container"}
                onClick= {()=>{
                    setActiveRating({
                        oneStar: false,
                        twoStar: true,
                        threeStar: false,
                        fourStar: false,
                        fiveStar: false,
                    })
                    setRating(2);
                }}
            >2</div>
            <div 
                className={activeRating.threeStar ? "rating_container active" : "rating_container"}
                onClick= {()=>{
                    setActiveRating({
                        oneStar: false,
                        twoStar: false,
                        threeStar: true,
                        fourStar: false,
                        fiveStar: false,
                    })
                    setRating(3);
                }}
            >3</div>
            <div 
                className={activeRating.fourStar ? "rating_container active" : "rating_container"}
                onClick= {()=>{
                    setActiveRating({
                        oneStar: false,
                        twoStar: false,
                        threeStar: false,
                        fourStar: true,
                        fiveStar: false,
                    })
                    setRating(4);
                }}
            >4</div>
            <div 
                className={activeRating.fiveStar ? "rating_container active" : "rating_container"}
                onClick= {()=>{
                    setActiveRating({
                        oneStar: false,
                        twoStar: false,
                        threeStar: false,
                        fourStar: false,
                        fiveStar: true,
                    })
                    setRating(5);
                }}
            >5</div>
        </div>
        <button className="submit_btn" onClick={handleSubmit}>submit</button>
    </Card>
}
export default Rating;