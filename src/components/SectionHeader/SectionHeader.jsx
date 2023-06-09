import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SectionHeader = ({ title }) => {
      useEffect(() => {
            AOS.init({
                  duration: 800,
                  easing: 'ease-in-cubic',
                  once: false,
            });
      }, []);

      return (
            <header className='text-4xl font-bold text-[#a73dfe] text-center my-12' data-aos="slide-down">
                  <h1>{title}</h1>
            </header>
      );
};

export default SectionHeader;
