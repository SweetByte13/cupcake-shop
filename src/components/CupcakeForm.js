

function CupcakeForm () {

function handleFormSubmit(e) {
    console.log(e)
}

return(
    <div className="cupcake-form">
    <h2>Order Cupcakes</h2>
    <form onSubmit={(e) => handleFormSubmit(e)}>
      <input type="text" name="name" placeholder="Plant name" />
      <input type="text" name="image" placeholder="Image URL" />
      <input type="number" name="price" step="0.01" placeholder="Price" />
      <button type="submit">Order Cupcakes</button>
    </form>
  </div>
)
}
export default CupcakeForm;