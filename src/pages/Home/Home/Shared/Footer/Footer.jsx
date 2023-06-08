

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
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
  };

  return (
    <footer style={footerStyle}>
      <h1 style={logoStyle}>Your Website</h1>
      <nav>
        <a href="#" style={linkStyle}>Home</a>
        <a href="#" style={linkStyle}>About</a>
        <a href="#" style={linkStyle}>Contact</a>
      </nav>
      <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
};

export default Footer;
