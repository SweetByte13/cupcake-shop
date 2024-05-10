import React, { useState } from "react";


function ReviewForm({ reviews, setReviews }) {

  const [formName, setFormName] = useState("")
  const [formScore, setFormScore] = useState("")
  const [formDetails, setFormDetails] = useState("")

  function handleFormSubmit(e) {
    e.preventDefault();

    const newReview = {
      name: formName,
      score: formScore,
      details: formDetails,
    };

    fetch("http://localhost:8000/Reviews", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newReview)
    })
      .then((resp) => resp.json())
      .then((data) => {
      setReviews([...reviews, data])
        setFormDetails("");
        setFormName("");
        setFormScore("");
    })
  }

  return (
    <div className="review-form">
      <h2 className="review-form-title">Tell Us How We're Doing and Write A Review!</h2>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <input type="text" name="name" placeholder="Name" value={formName} onChange={(e) => setFormName(e.target.value)} />
        <input type="text" name="score" placeholder="Rate us out of 10" value={formScore} onChange={(e) => setFormScore(e.target.value)}/>
        <textarea className="textarea" rows = "5" cols = "60" name = "description" placeholder="Write us a Review..." value={formDetails} onChange={(e) => setFormDetails(e.target.value)}>
         </textarea><br></br>
        <button className="review-button" type="submit">Submit Review</button>
      </form>
    </div>
  )
}
export default ReviewForm;
