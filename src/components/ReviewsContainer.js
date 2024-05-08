import React, { useState, useEffect } from "react";
import ReviewForm from "./ReviewForm";
import ReviewCard from "./ReviewCard";


function ReviewsContainer({ reviews, setReviews }) {



    useEffect(() => {
        fetch("http://localhost:8000/Reviews")
            .then((resp) => (resp.json()))
            .then((data) => setReviews(data))
    }, [])

    const review = reviews.map((review) => {
      return <ReviewCard key={review.id} review={review}/>
    })
    return (
        <div className="review-container">
            {review}
        </div>
    )
    
}
export default ReviewsContainer;