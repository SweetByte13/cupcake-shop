import React, { useState, useEffect } from "react"

function ReviewCard({ review }) {

    const { name, score, details } = review

    return (
        <div className="review-card">
            <h3>{score}</h3>
            {details}
            <p>{name}</p>
        </div>
    )
}
export default ReviewCard;