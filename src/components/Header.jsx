import React from 'react' 
import { getText } from '../locales'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
;
const Header = () => {
    return (
        <div className='Header mt-lg-5'>
            <Swiper
                navigation={true}
                loop={true}
                modules={[Navigation]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                className="mySwiper">
                <SwiperSlide>
                    <div className="container">
                        <div className="row justify-content-center align-items-lg-start align-items-center">
                            <div className="col-lg-9">
                                <div className="row justify-content-lg-between justify-content-center align-items-center">
                                    <div className="col-lg-4 col-6">
                                        <div className="img">
                                            <img className='w-100' src="img/header1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="text">
                                            {/* <h6>Tincidunt sit nisl sapien.</h6> */}
                                            <h1>{getText("slide1")}</h1>
                                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ultricies ut netus lorem vel. Nunc, orci egestas tortor nam. Turpis ridiculus eu, et tincidunt aenean varius.</p> */}
                                            <div className="buy-btn">
                                                <a className='btn' href="">Заказать</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <div className="row justify-content-lg-between justify-content-center align-items-center">
                            <div className="col-10">
                                <div className="row justify-content-lg-between justify-content-center align-items-center">
                                    <div className="col-lg-4 col-6">
                                        <div className="img">
                                            <img className='w-100' src="img/header2.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="text">
                                            {/* <h6>Tincidunt sit nisl sapien.</h6> */}
                                            <h1>{getText("slide2")}</h1>
                                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ultricies ut netus lorem vel. Nunc, orci egestas tortor nam. Turpis ridiculus eu, et tincidunt aenean varius.</p> */}
                                            <div className="buy-btn">
                                                <a className='btn' href="">Заказать</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <div className="row justify-content-lg-between justify-content-center align-items-center">
                            <div className="col-10">
                                <div className="row justify-content-lg-between justify-content-center align-items-center">
                                    <div className="col-lg-4 col-6">
                                        <div className="img">
                                            <img className='w-100' src="img/header3.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="text">
                                            {/* <h6>Tincidunt sit nisl sapien.</h6> */}
                                            <h1>{getText("slide3")}</h1>
                                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ultricies ut netus lorem vel. Nunc, orci egestas tortor nam. Turpis ridiculus eu, et tincidunt aenean varius.</p> */}
                                            <div className="buy-btn">
                                                <a className='btn' href="">Заказать</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Header