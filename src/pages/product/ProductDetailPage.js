import Layout from "../../components/Layout";

const ProductDetailPage = () => {
    return (
    <Layout header footer>
    <ul>
        <li><a>Home</a></li>
        <li><a></a></li>
        <li><a></a></li>
    </ul>
           
    <section id="product-info">
      <span>
        <img src="" alt="another image of the product"/>
        <img src="" alt="another image of the product"/>
        <img src="" alt="another image of the product"/>
        <img src="" alt="another image of the product"/>
      </span>

      <span>
        <img src="" alt="main image of the product"/>
      </span>

      <div>
        <p></p>
        <h2></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div>
          <p></p>
          <p></p>
        </div>
        <div>
          <button>ADD TO CART</button>
          <button></button>
        </div>
      </div>
    </section>

      <p>kefkk</p>
        

    <section id="product-description">
      <h3>Product Description</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, aspernatur dolores magni,
        aliquam perferendis debitis ipsa necessitatibus nisi quisquam velit ex dolorem, facilis
        et rerum quod blanditiis ducimus voluptatem adipisci.</p>

      <h3>More information</h3>
      <table>
        <tr>
          <th>Publisher</th>
          <td>Soph &amp; Eph Company</td>
        </tr>
        <tr>
          <th>ID number</th>
          <td></td>
        </tr>
        <tr>
          <th>Language</th>
          <td>English</td>
        </tr>
        <tr>
          <th>No. pages</th>
          <td>345</td>
        </tr>
        <tr>
          <th>Dimension</th>
          <td>20 x 15 x 17 cm</td>
        </tr>
        <tr>
          <th>Special gift</th>
          <td>Purple Hyacinth bookmark</td>
        </tr>
      </table>
    </section>
    </Layout>
    )
}

export default ProductDetailPage;