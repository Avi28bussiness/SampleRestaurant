import { Link } from 'react-router-dom';
// Optional: Uncomment below if you're using react-icons
// import { FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-4 mt-5">
      <div className="container">
        <div className="row">

          {/* About */}
          <div className="col-md-4 mb-3">
            <h5>🍽️ MyRestaurant</h5>
            <p>Delicious food served with love. Visit us for an unforgettable experience.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/menu/starters/all" className="text-light text-decoration-none">Starters</Link></li>
              <li><Link to="/menu/main/all" className="text-light text-decoration-none">Main Courses</Link></li>
              <li><Link to="/menu/chinese/all" className="text-light text-decoration-none">Chinese</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-3">
            <h6>Contact</h6>
            <p><i className="bi bi-telephone-fill me-2"></i>+91 9876543210</p>
            <p><i className="bi bi-envelope-fill me-2"></i>info@myrestaurant.com</p>

            {/* Optional social icons (requires react-icons) */}
            {/* <div className="d-flex gap-3 mt-2">
              <a href="#" className="text-light"><FaFacebook /></a>
              <a href="#" className="text-light"><FaInstagram /></a>
            </div> */}
          </div>
        </div>

        <hr className="bg-light" />
        <p className="text-center mb-0 pb-3">© {new Date().getFullYear()} MyRestaurant. All rights reserved.</p>
      </div>
    </footer>
  );
}
