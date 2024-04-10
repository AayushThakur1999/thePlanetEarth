import Contact from './Contact'

const Footer = () => {
  return (
    <footer id="contact-sec">
        <div className="h-secondary">Contact Us</div>
        <Contact />
        <div id="credits">
          <p>These beautiful Icons and Images are provided by <a href="https://icons8.com" target="_blank">Icons8</a> and <a href="https://pexels.com" target="_blank" >Pexels</a> respectively</p>
        </div>
      </footer>
  );
};

export default Footer;