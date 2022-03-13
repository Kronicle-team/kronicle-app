const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
      <footer>
        <div>
          <div>
            <a href="">
              <img alt="Kronicle logo" src={"../media/icons/logo.png"} />
            </a>
            <ul>
              <li><a href="">About Us</a></li>
              <li><a href="">Contact Us</a></li>
              <li><a href="">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h2>CATEGORIES</h2>
            <ul>
              <li><a href="">Artist</a></li>
              <li><a href="">Album Photocards</a></li>
              <li><a href="">Trading photocards</a></li>
            </ul>
          </div>

          <div>
            <h2>CUSTOMER SERVICES</h2>
            <ul>
              <li><a href="">Shipping Policy</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Refund Policy</a></li>
              <li><a href="">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <p>&copy; {currentYear} We are Kronicle. All Rights Reserved.</p>
          </div>
        </div>
</footer>
  )
}

export default Footer