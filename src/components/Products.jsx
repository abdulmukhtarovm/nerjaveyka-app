

import { Link } from 'react-router-dom'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { PulseLoader } from 'react-spinners';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { API_PATH, LANGUAGE } from '../tools/constants';
import { getText } from '../locales';
const Products = () => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    const [sort, setSort] = useState(true)
    const [plitka, setPlitka] = useState("square")
    const [menus, setMenus] = useState([]);
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(false);

    const getALLCategory = async () => {
        const arr = [];
        setLoading(true)
        const res = await axios.get( API_PATH + '/' + localStorage.getItem(LANGUAGE) + "/product/category-list/");
        arr.push(...res.data);
        // arr.unshift({ id: 0, name: 'Все' });
        arr.forEach((el) => {
            if (el.id === 0) {
                el.className = "active";
            }
            else {
                el.className = "noActive"
            }
        })
        setMenu(arr);
        setLoading(false)
    }


    useEffect(() => {
        // if (menus.length > 0) return
        // else {
        // getAllProducts(0);
        getALLCategory();
        getAllProduct()
        // }
    }, [])

    const changeHandler = () => {
        setPlitka("card")
        setSort(!true)
    }
    const changeHendler2 = () => {
        setPlitka("square")
        setSort(!false)
    }

    const getAllProduct = async () => {
        await axios.get( API_PATH + '/' + localStorage.getItem(LANGUAGE) + `/product/product-list/`)
            .then(res => {
                setMenus(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    const getId = async id => {
        if (id === 0) {
            getAllProduct()

        } else {
            await axios.get(API_PATH + '/' + localStorage.getItem(LANGUAGE) + `/product/product-list/?id=${id}`)
                .then(res => {
                    setMenus(res.data)
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
    return (

        <div className='Products'>
            <div className="text-center">
                <h2 className='blog-title'>Наши продукты</h2>
                <ul>
                <li onClick={getAllProduct} > {getText("all")} </li>
                    {
                        menu?.map((element) => {
                            return <li key={element.id} onClick={() => getId(element.id)} className={element.className}> {element.name} </li>
                        })
                    }
                </ul>
            </div>
            <div className='row'>
                <div className="text-center">
                {loading && <PulseLoader />}
                </div>
                {!loading &&
                    menus?.map((el) => {
                        return (
                            <>
                          <div className="col-lg-4 mb-5">
                          <div key={el.id} className={`card`}>
                                    <div className="img">
                                        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                                            {el.product_images && el.product_images.map(item => (
                                                <SwiperSlide key={item.id} ><img className='w-100' src={item.image} alt="" /></SwiperSlide>
                                            ))}
                                          
                                        </Swiper>
                                      
                                    </div>
                                    <div className="info">
                                        <div>
                                            <h4>{el?.name}</h4>
                                            {/* <p>{el?.description}</p> */}
                                        </div>

                                    </div>
                                </div>
                          </div>



                            </>
                        )
                    })
                }
            </div>
 
            <div className="text-center buy-btn">
                <Link className='btn' to="/catalog">ПОСМОТРЕТЬ ВСЕ</Link>
            </div>
        </div>
    )

}
export default Products