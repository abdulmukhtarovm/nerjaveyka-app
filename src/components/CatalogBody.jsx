// import { getAllByAltText } from '@testing-library/react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { PulseLoader } from 'react-spinners';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { getText } from '../locales';
import { API_PATH, LANGUAGE } from '../tools/constants';



const CatalogBody = () => {
    const [sort, setSort] = useState(true)
    const [plitka, setPlitka] = useState("square")
    const [menus, setMenus] = useState([]);
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(false);

    const getALLCategory = async () => {
        const arr = [];
        setLoading(true)
        const res = await axios.get(API_PATH + '/' + localStorage.getItem(LANGUAGE) + "/product/category-list/");
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
    // const getAllProducts = async (id) => {
    //     let objArr = [];
    //     if (id) {
    //         try {
    //             setLoading(true)
    //             const res = await axios.get(`http://backend.metallart.uz/product/product-detail/${id}/`)
    //             objArr.push(res.data);
    //             setMenus(objArr);
    //             setLoading(false)
    //         }
    //         catch (err) {
    //             console.log(err);
    //         }
    //     }
    //     else if (id === 0) {
    //         try {
    //             setLoading(true)
    //             const res = await axios.get(`http://backend.metallart.uz/product/product-list/`)
    //             setMenus(res.data);
    //             setLoading(false);
    //         }
    //         catch (err) {
    //             console.log(err);
    //         }
    //     }
    // }
    // const menuHandler = (id) => {
    //     menu.forEach((el) => {
    //         if (el.id === id) {
    //             el.className = "active";
    //         }
    //         else {
    //             el.className = "noActive"
    //         }
    //     })
    //     getAllProducts(id);
    // }

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
        await axios.get(API_PATH + '/' + localStorage.getItem(LANGUAGE) + `/product/product-list/`)
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
        <div className='CatalogBody'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="categories">
                            <div className="cat-top">
                                <h4>{getText("categories")}</h4>
                            </div>
                            <div className="cat-body">
                                <ul>
                                    <li onClick={getAllProduct} > {getText("all")} </li>
                                    {
                                        menu?.map((element) => {
                                            return <li key={element.id} onClick={() => getId(element.id)} className={element.className}> {element.name} </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="product-menu">
                            <div className="sorting d-none d-lg-flex">
                                <div className="buttons">
                                    <div onClick={changeHendler2} className={`kvadrat ${sort ? 'sorted' : ''}`}>
                                        <div className="item"></div>
                                        <div className="item"></div>
                                        <div className="item"></div>
                                        <div className="item"></div>
                                        <div className="item"></div>
                                        <div className="item"></div>
                                        <div className="item"></div>
                                        <div className="item"></div>
                                        <div className="item"></div>
                                    </div>
                                    <div onClick={changeHandler} className={`plitka ${sort ? '' : 'sorted'}`}>
                                        <div className="item"></div>
                                        <div className="item"></div>
                                        <div className="item"></div>
                                        <div className="item"></div>
                                        <div className="item"></div>
                                        <div className="item"></div>
                                    </div>
                                </div>
                                <h6>{getText("sort")}</h6>
                            </div>
                            <div className="producty">
                                <div className='d-flex flex-wrap justify-content-between'>
                                    {loading && <PulseLoader />}
                                    {!loading &&
                                        menus?.map((el) => {
                                            return (
                                                <>
                                                    <div key={el.id} className={`${plitka}`}>
                                                        <div className="img">
                                                            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                                                                {el.product_images && el.product_images.map(item => (
                                                                    <SwiperSlide key={item.id} ><img className='w-100' src={item.image} alt="" /></SwiperSlide>
                                                                ))}
                                                                {/* <SwiperSlide><img className='w-100' src="img/1-1.jpg" alt="" /></SwiperSlide> */}
                                                            </Swiper>
                                                            {/* <img className='w-100' src={el?.image} alt="" /> */}
                                                        </div>
                                                        <div className="info">
                                                            <div>
                                                                <h4>{el?.name}</h4>
                                                                <p>{el?.description}</p>
                                                            </div>

                                                        </div>
                                                    </div>



                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CatalogBody