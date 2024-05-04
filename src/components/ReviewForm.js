

function ReviewForm() {

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(e.target);

  //   const formData = new FormData(e.target);
  //   const formProps = Object.fromEntries(formData);
  //   console.log(formProps["new-review-description"])

  //   const newJsonObj = {
  //     "id": 1,
  // "image":
  // "name": 
  // "price": 
  // "flavor": 
  // "details": 
  // "rating":
  // //   }
  
  //   fetch("http://localhost:3000/toys", {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(newJsonObj)
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => renderToyCards([data]))
  
  // }

  }

  return (
    <div className="cupcake-form">
      <h2>Order Cupcakes</h2>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <input type="text" name="name" placeholder="Full Name" />
        <input type="text" name="email" placeholder="Email Address" />
        <input type="text" name="review" step="0.01" placeholder="Review" />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  )
}
export default ReviewForm;