import { getAllByAltText } from '@testing-library/react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { PulseLoader } from 'react-spinners';

const menu = [
    {
        id: 23,
        name: 'Все',
        className: "active",
    },
    {
        id: 24,
        name: "Для ресторанов",
        className: "noActive"
    },
    {
        id: 25,
        name: "Операционная мебель",
        className: 'noActive'
    },
    {
        id: 26,
        name: "Мебель лофт",
        className: 'noActive'
    },
];

const CatalogBody = () => {
    const [sort, setSort] = useState(true)
    const [plitka, setPlitka] = useState("square")
    // const [active, setActive] = useState(false);
    const [menus, setMenus] = useState([]);
    const [loading, setLoading] = useState(false);

    const getAllProducts = async (id) => {
        if ((id === 23) || id === undefined) {
            try {
                setLoading(true)
                const res = await axios.get(`http://backend.metallart.uz/`)
                setMenus(res.data);
                setLoading(false)
            }
            catch (err) {
                console.log(err);
            }
        }
        else if (id) {
            try {
                setLoading(true)
                const res = await axios.get(`http://backend.metallart.uz/?id=${id}`)
                console.log(res.data);
                setMenus(res.data);
                setLoading(false)
            }
            catch (err) {
                console.log(err);
            }
        }
    }
    const menuHandler = (id) => {
        menu.forEach((el) => {
            if (el.id === id) {
                el.className = "active";
            }
            else {
                el.className = "noActive"
            }
        })
        getAllProducts(id);
    }
    const changeHandler = () => {
        setPlitka("card")
        setSort(!true)
    }
    const changeHendler2 = () => {
        setPlitka("square")
        setSort(!false)
    }


    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <div className='CatalogBody'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="categories">
                            <div className="cat-top">
                                <h4>Категории</h4>
                            </div>
                            <div className="cat-body">
                                <ul>
                                    {
                                        menu?.map((element) => {
                                            return <li key={element.id} onClick={() => menuHandler(element.id)} className={element.className}> {element.name} </li>;
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
                                        <div class="item"></div>
                                        <div class="item"></div>
                                        <div class="item"></div>
                                        <div class="item"></div>
                                        <div class="item"></div>
                                        <div class="item"></div>
                                        <div class="item"></div>
                                        <div class="item"></div>
                                        <div class="item"></div>
                                    </div>
                                    <div onClick={changeHandler} className={`plitka ${sort ? '' : 'sorted'}`}>
                                        <div class="item"></div>
                                        <div class="item"></div>
                                        <div class="item"></div>
                                        <div class="item"></div>
                                        <div class="item"></div>
                                        <div class="item"></div>
                                    </div>
                                </div>
                                <h6>Sort by</h6>
                            </div>
                            <div className="producty">
                                <div className='d-flex flex-wrap justify-content-between'>
                                    {loading && <PulseLoader />}
                                    {!loading &&
                                        menus?.map((el, index) => {

                                            return (
                                                <div key={el.id} className={`${plitka}`}>
                                                    <div className="img">
                                                        <img className='w-100' src={el?.image} alt="" />
                                                    </div>
                                                    <div className="info">
                                                        <div>
                                                            <h4>{el?.name}</h4>
                                                            <p>{el?.description}</p>
                                                        </div>
                                                        <div className="buy-btn">
                                                            <a className='btn' href="">buy</a>
                                                        </div>
                                                    </div>
                                                </div>
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