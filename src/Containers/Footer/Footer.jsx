import './styles.scss';

const Footer = () => {
  return (

    <footer className="footer">
      <div className="footer__container">
        <div className="footer__info">
          <h3 className="footer__name">Contact-me</h3>
          <br/>
          <p className="footer__contact">Phone: +27 827 612 678</p>
          
          <p className="footer__email">
            Email: <a href="mailto:cassiusmaropene@gmail.com" className="footer__link">cassiusmaropene@gmail.com</a>
          </p>
          <p className="footer__location">Location: Johannesburg, South Africa</p>
        </div>
        <div className="footer__socials">
          <a href="https://www.youtube.com/channel/UCbalrskoCgN-hnaaFTRfq6Q" className="footer__social-link" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
          <a href="https://portfolio-blue-delta-46.vercel.app/" className="footer__social-link" target="_blank" rel="noopener noreferrer">
            Portfolio
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        &copy; 2024 Maropene Cassius Makalapetlo. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
