import Layout from "../../components/Layout";

const ProductDetailPage = () => {
    return () => {
    <Layout>
    <ul>
        <li><a>Home</a></li>
        <li><a></a></li>
        <li><a></a></li>
    </ul>
           
    <section id="product-info">
      <span class="product-info-other-media flex-container flex-direction-column">
        <img src="" alt="another image of the product"/>
        <img src="" alt="another image of the product"/>
        <img src="" alt="another image of the product"/>
        <img src="" alt="another image of the product"/>
      </span>

      <span class="product-info-main-img">
        <img src="" alt="main image of the product"/>
      </span>

      <div class="product-info-main">
        <p class="product-detail-store-name"></p>
        <h2></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div class="product-info-details">
          <p class="product-info-price float-left"></p>
          <p class="product-info-date float-left"><</p>
        </div>
        <div class="shop-bttn clear-both">
          <button class="add-to-cart">ADD TO CART</button>
          <button class="buy-now"></button>
        </div>
      </div>
    </section>
        

    <section id="product-description" class="content-body">
      <h3>Product Description</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, aspernatur dolores magni,
        aliquam perferendis debitis ipsa necessitatibus nisi quisquam velit ex dolorem, facilis
        et rerum quod blanditiis ducimus voluptatem adipisci.</p>

      <h3 class="more-info">More information</h3>
      <table class="product-info-table">
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
    }
}

export default ProductDetailPage;