import React, { useEffect } from "react";
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
            <div className="review-inner-container">
            {review}
            </div>
        </div>
    )
}
export default ReviewsContainer;