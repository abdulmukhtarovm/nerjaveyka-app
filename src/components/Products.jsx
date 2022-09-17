import React, { useState } from 'react';

import { Link } from 'react-router-dom'

import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';

const Products = () => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <div className='Products'>
            <div className="text-center">
                <h2 className='blog-title'>Наши продукты</h2>
                <ul tabs>
                <li>
                    <button
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}>
                        Для ресторанов
                    </button>
                </li>
                <li>
                    <button
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}>
                        Операционная мебель
                    </button>
                </li>
                <li>
                    <button
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => { toggle('3'); }}>
                        Мебель лофт
                    </button>
                </li>
            </ul>
            </div>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1" className=''>
                    <Row className='myRow'>
                        <div className="col-lg-4 col-md-6">
                            <div className="card">
                                <div className="img">
                                    <img className='w-100' src="img/product4.png" alt="" />
                                </div>
                                <div className="text">
                                    <h4>Lorem, ipsum dolor.</h4>
                                    <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, modi!</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card">
                                <div className="img">
                                    <img className='w-100' src="img/product5.png" alt="" />
                                </div>
                                <div className="text">
                                    <h4>Lorem, ipsum dolor.</h4>
                                    <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, modi!</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card">
                                <div className="img">
                                    <img className='w-100' src="img/product6.png" alt="" />
                                </div>
                                <div className="text">
                                    <h4>Lorem, ipsum dolor.</h4>
                                    <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, modi!</h6>
                                </div>
                            </div>
                        </div>
                    </Row>
                </TabPane>
                <TabPane tabId="2" className=''>
                    <Row className='myRow'>
                        <div className="col-lg-4 col-md-6">
                            <div className="card">
                                <div className="img">
                                    <img className='w-100' src="img/product1.png" alt="" />
                                </div>
                                <div className="text">
                                    <h4>Lorem, ipsum dolor.</h4>
                                    <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, modi!</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card">
                                <div className="img">
                                    <img className='w-100' src="img/product8.png" alt="" />
                                </div>
                                <div className="text">
                                    <h4>Lorem, ipsum dolor.</h4>
                                    <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, modi!</h6>
                                </div>
                            </div>
                        </div>
                    </Row>
                </TabPane>
                <TabPane tabId="3" className=''>
                    <Row className='myRow'>
                        <div className="col-lg-4 col-md-6">
                            <div className="card">
                                <div className="img">
                                    <img className='w-100' src="img/product2.png" alt="" />
                                </div>
                                <div className="text">
                                    <h4>Lorem, ipsum dolor.</h4>
                                    <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, modi!</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card">
                                <div className="img">
                                    <img className='w-100' src="img/product3.png" alt="" />
                                </div>
                                <div className="text">
                                    <h4>Lorem, ipsum dolor.</h4>
                                    <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, modi!</h6>
                                </div>
                            </div>
                        </div>
                    </Row>
                </TabPane>
           

            </TabContent>
            {/* <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="card">
                        <div className="img">
                            <img className='w-100' src="img/product1.png" alt="" />
                        </div>
                        <div className="text">
                            <h4>Lorem, ipsum dolor.</h4>
                            <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, modi!</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="card">
                        <div className="img">
                            <img className='w-100' src="img/product2.png" alt="" />
                        </div>
                        <div className="text">
                            <h4>Lorem, ipsum dolor.</h4>
                            <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, modi!</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="card">
                        <div className="img">
                            <img className='w-100' src="img/product3.png" alt="" />
                        </div>
                        <div className="text">
                            <h4>Lorem, ipsum dolor.</h4>
                            <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, modi!</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="card">
                        <div className="img">
                            <img className='w-100' src="img/product4.png" alt="" />
                        </div>
                        <div className="text">
                            <h4>Lorem, ipsum dolor.</h4>
                            <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, modi!</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="card">
                        <div className="img">
                            <img className='w-100' src="img/product5.png" alt="" />
                        </div>
                        <div className="text">
                            <h4>Lorem, ipsum dolor.</h4>
                            <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, modi!</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="card">
                        <div className="img">
                            <img className='w-100' src="img/product6.png" alt="" />
                        </div>
                        <div className="text">
                            <h4>Lorem, ipsum dolor.</h4>
                            <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, modi!</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="card">
                        <div className="img">
                            <img className='w-100' src="img/product7.png" alt="" />
                        </div>
                        <div className="text">
                            <h4>Lorem, ipsum dolor.</h4>
                            <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, modi!</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="card">
                        <div className="img">
                            <img className='w-100' src="img/product8.png" alt="" />
                        </div>
                        <div className="text">
                            <h4>Lorem, ipsum dolor.</h4>
                            <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, modi!</h6>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="text-center buy-btn">
                <Link className='btn' to="/catalog">ПОСМОТРЕТЬ ВСЕ</Link>
            </div>
        </div>
    )
}

export default Products