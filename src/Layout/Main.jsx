
import Header from '../pages/Home/Home/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Home/Home/Shared/Footer/Footer';
import { useState } from 'react';

const Main = () => {
      const [isDarkTheme, setIsDarkTheme] = useState(true);

      // Your app logic

      const themeStyles = {
            light: {
                  backgroundColor: '#f5f5f5',
                  color: '#333',
            },
            dark: {
                  backgroundColor: '#333',
                  color: '#fff',
            },
      };

      return (
            <div style={isDarkTheme ? themeStyles.dark : themeStyles.light}>
                  <Header></Header>
                  <button className=' animate__animated animate__fadeInUp animate__delay-1s animate__repeat-2 btn btn-outline  bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded flex justify-center items-center' onClick={() => setIsDarkTheme(!isDarkTheme)}>
                        {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
                  </button>

                  <Outlet></Outlet>


                  <Footer></Footer>
            </div>
      );
};

export default Main;