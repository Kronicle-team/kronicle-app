const CardDetails = () => {
  return (
      <section className="card-detail">
        <div>
          <img src={"../../media/images/placeholder-612x612.jpg"} alt="card"/>
        </div>

        <div>
          <p>Han Sooyoung's special card</p>
          <h1>100,000 VND</h1>
          <h4>Product Description</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <h4>Seller</h4>
          <div>
            <img src={"../../media/images/placeholder-612x612.jpg"} alt="seller-avatar"/>
            <p>Neyra Elena Darcy</p>
          </div>

          <div>
            <button>ADD TO CART</button>
            <button>BUY NOW</button>
          </div>
        </div>
      </section>
  )
}

export default CardDetails