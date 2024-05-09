import React, { useState, useEffect } from "react"

function ReviewCard({ review }) {

    const { name, score, details } = review

    return (
        <div className="review-card">
            <h3 className="score">{score}</h3>
           <span className="details">{details}</span> 
            <p className="name">{name}</p>
        </div>
    )
}
export default ReviewCard;