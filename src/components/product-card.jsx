export default function ProductCard(props) {
    console.log(props); // Logs the product name to the console
  
    return (
      <div className="product-card">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <p> {props.price}</p>
        <button>Add to cart</button>
      </div>
    )
  }
  