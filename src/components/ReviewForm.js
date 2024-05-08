import React, { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";


function ReviewForm({ reviews, setReviews }) {

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.details.value);
    console.log(e.target.name.value)
    // const formData = new FormData(e.target);
    // const formProps = Object.fromEntries(formData);
    // console.log(formProps["new-review-description"])

    const newReview = {
      "name": e.target.name.value,
      "score": e.target.score.value,
      "details": e.target.details.value,
    }

    fetch("http://localhost:8000/Reviews", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newReview)
    })
      .then((resp) => resp.json())
      .then((data) => setReviews([...reviews,data]))

  }


  return (
    <div className="review-form">
      <h2>Tell Us How We're Doing and Write A Review!</h2>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="score" placeholder="Rate us out of 10" />  
        <input type="text" name="details" step="0.01" placeholder="Write us a Review" />
        <p></p>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  )
}
export default ReviewForm;