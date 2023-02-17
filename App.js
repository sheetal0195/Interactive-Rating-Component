import { useState } from "react";
import "./App.css";
import Rating from "./Rating";
import Thankyou from "./Thankyou";


const App = () =>{
    const [showThankYouPage, setShowThankYouPage] = useState(false);
    const [rating, setRating] = useState(null);
    return( 
        <>
            {showThankYouPage ? 
                <Thankyou rating={rating}/> : 
                <Rating 
                    rating={rating} 
                    setRating={setRating} 
                    setShowThankYouPage={setShowThankYouPage}
        /> }
        </>
        );
}
export default App;