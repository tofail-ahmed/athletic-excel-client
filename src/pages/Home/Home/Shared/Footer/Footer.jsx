import logo from '../../../../../assets/home_banner/logo-removebg-preview.png'
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'black',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    
    left: 0,
    bottom: 0,
    width: '100%',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
    margin: '0 10px',
    fontWeight: 'bold',
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
    width: "300px"
  };

  return (
    <footer className='md:flex justify-around items-center' style={footerStyle}>

      <img className='text-white ' style={logoStyle} src={logo} alt="" />
      <nav className='font-bold text-slate-300'>
        <div> Phone: +1 (555) 123-4567</div>
        <div>  Email: info@example.com</div>
        <div>  Address: 123 Main Street, City, State, Country</div>
        <div style={linkStyle} className='flex justify-center my-4 text-2xl gap-4'> <FaFacebookSquare></FaFacebookSquare> <FaWhatsapp></FaWhatsapp><FaLinkedin></FaLinkedin><FaInstagram></FaInstagram></div>
      <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </nav>
    </footer>
  );
};

export default Footer;
