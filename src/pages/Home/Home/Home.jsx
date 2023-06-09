import { useState } from "react";
import Button from "../../../components/Button";
import HomeBanner from '../HomeBanner/HomeBanner'


const Home = () => {
      const [isDarkTheme, setIsDarkTheme] = useState(false);

      // Your app logic

      const themeStyles = {
            light: {
                  backgroundColor: '#f5f5f5',
                  color: '#333',
            },
            dark: {
                  backgroundColor: '#444444',
                  color: '#fff',
            },
      };
      return (
            <div style={isDarkTheme ? themeStyles.dark : themeStyles.light}>
                  <button className=' animate__animated animate__fadeInUp animate__delay-1s animate__repeat-2 btn btn-outline  bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded flex justify-center items-center' onClick={() => setIsDarkTheme(!isDarkTheme)}>
                        {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
                  </button>
                  <h2>  This is home</h2>
                  <Button text="Submit" className="mb-4" />
                  <Button text="Cancel" className="ml-4" />
                  <HomeBanner></HomeBanner>

            </div>
      );
};

export default Home;