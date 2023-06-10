import React from 'react';
import Button from '../../../../components/Button.jsx'
import img1 from '../../../../assets/home_banner/sportsbanner1.jpg'
import img2 from '../../../../assets/home_banner/sportsbanner2.jpg'
import img3 from '../../../../assets/home_banner/sportsbanner3.jpg'
import img4 from '../../../../assets/home_banner/sportsbanner4.jpg'
import img5 from '../../../../assets/home_banner/sportsbanner5.jpg'


import { Link } from 'react-router-dom';

const HomeSlider = () => {




      return (
            <div >
                  
                  <div className='mx-auto flex justify-center items-center mb-8'>
                  <div className=' my-8 w-[90vw]  carousel  bg-slate-400' >
                        <div id="slide1" className="carousel-item relative w-full">
                              <img src={img1} className="w-[100vw] h-[60vh]" />
                              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide5" className="btn btn-circle">❮</a>
                                    <a href="#slide2" className="btn btn-circle">❯</a>
                              </div>
                              <div className=" left-[15vw] right-[15vw] absolute top-[5vh]   text-[#032755] font-bold text-3xl carousel-caption">

                                    <p>"Sports have the power to change the world. It has the power to inspire, <br /> the power to unite people in a way that little else does." - Nelson Mandela</p>
                                   <div className='m-4'> <Button  text={"Explore"}><Link  to={'/alltoys'}></Link></Button></div>
                              </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                              <img src={img2} className="w-[100vw] h-[60vh]" />
                              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" className="btn btn-circle">❮</a>
                                    <a href="#slide3" className="btn btn-circle">❯</a>
                              </div>
                              <div className=" left-[15vw] right-[15vw] absolute top-[5vh]   text-[#80b1f0] font-bold text-3xl carousel-caption">

                                    <p>"Sports promote a healthy lifestyle and physical fitness. They help us stay active, improve our overall well-being, and reduce the risk of various health issues." - Usain Bolt</p>
                                   <div className='m-4 '> <Button  text={"Explore"}><Link  to={'/alltoys'}></Link></Button></div>
                              </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                              <img src={img3} className="w-[100vw] h-[60vh]" />
                              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" className="btn btn-circle">❮</a>
                                    <a href="#slide4" className="btn btn-circle">❯</a>
                              </div>
                              <div className=" left-[10vw] right-[10vw] absolute top-[5vh]   text-[#acb9c9] font-bold text-3xl carousel-caption">

                                    <p>"Sports bring people together. They transcend boundaries of race, nationality, and religion, fostering a sense of community and unity." - Pelé</p>
                                   <div className='m-4 '> <Button  text={"Explore"}><Link  to={'/alltoys'}></Link></Button></div>
                              </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                              <img src={img4} className="w-[100vw] h-[60vh]" />
                              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide3" className="btn btn-circle">❮</a>
                                    <a href="#slide5" className="btn btn-circle">❯</a>
                              </div>
                              <div className=" left-[15vw] right-[15vw] absolute top-[5vh]   text-[#391b1b] font-bold text-3xl carousel-caption">

                                    <p>"Sports provide a platform for personal growth and development. They teach you to push your limits, overcome challenges, and strive for excellence." - Serena Williams</p>
                                   <div className='m-4'> <Button  text={"Explore"}><Link  to={'/alltoys'}></Link></Button></div>
                              </div>
                        </div>
                        <div id="slide5" className="carousel-item relative w-full">
                              <img src={img5} className="w-[100vw] h-[60vh]" />
                              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" className="btn btn-circle">❮</a>
                                    <a href="#slide1" className="btn btn-circle">❯</a>
                              </div>
                              <div className=" left-[15vw] right-[15vw] absolute top-[5vh]  text-[#254475] font-bold text-3xl carousel-caption">

                                    <p>"Sports teach us the values of teamwork, perseverance, and dedication. They teach us to set goals and work towards them." - Michael Jordan</p>
                                   <div className='m-4'> <Button  text={"Explore"}><Link  to={'/alltoys'}></Link></Button></div>
                              </div>
                        </div>
                  </div>
            </div>
            </div>
      );
};

export default HomeSlider;
