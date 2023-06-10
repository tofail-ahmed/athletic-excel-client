import React, { useState } from 'react';
import './HomeBanner.css'
import image1 from '../../../assets/home_banner/image1.jpg'
import image2 from '../../../assets/home_banner/image2.jpg'
import image3 from '../../../assets/home_banner/image3.jpg'
import image4 from '../../../assets/home_banner/image4.webp'
import image5 from '../../../assets/home_banner/image5.webp'
import image6 from '../../../assets/home_banner/image6.webp'
import SectionHeader from '../../../components/SectionHeader/SectionHeader';

const HomeBanner = () => {
      const [hoveredIndex, setHoveredIndex] = useState(null);

      const handleHover = (index) => {
            setHoveredIndex(index);
      };

      const handleMouseLeave = () => {
            setHoveredIndex(null);
      };

      const images = [image1, image2, image3, image4, image5, image6];

      return (
            <div className='my-8'> 
                  
                  <SectionHeader title={"Top Activities"}></SectionHeader>
                  <div className="image-grid mx-24">
                  {images.map((image, index) => (
                        <div
                              key={index}
                              className={`image ${hoveredIndex === index ? 'hovered' : ''}`}
                              onMouseEnter={() => handleHover(index)}
                              onMouseLeave={handleMouseLeave}
                        >
                              <img src={image} alt={`Image ${index + 1}`} />
                        </div>
                  ))}
            </div>
            </div>

      );
};

export default HomeBanner;
