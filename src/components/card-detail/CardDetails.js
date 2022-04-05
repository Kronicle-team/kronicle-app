const CardDetails = () => {
  return (
      <section className="card-detail">
        <div>
          <img src={"../../media/images/placeholder-612x612.jpg"} alt="card"/>
        </div>

        <div>
          <p>Han Sooyoung's special card</p>
          <h1>100,000 VND</h1>
          <h3>Product Description</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <h3>Seller</h3>
          <div>
            <img src={"../../media/images/placeholder-612x612.jpg"} alt="seller-avatar"/>
            <p>Go Junho</p>
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