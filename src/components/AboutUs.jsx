import React from 'react'

const AboutUs = () => {
    return (
        <div className='AboutUs'>
            <div className="text-center">
                <h2 className='blog-title'>About Us</h2>    
            </div>
            <div className="row justify-content-cente align-items-center">
                <div className="col-lg-6 col-md-8 mb-4">
                    <div className="info">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat dui at lacus aliquet, a consequat enim aliquet. Integer molestie sit amet sem et faucibus. Nunc ornare pharetra dui, vitae auctor orci fringilla eget. Pellentesque in placerat felis. Etiam mollis venenatis luctus. Morbi ac scelerisque mauris. Etiam sodales a nulla ornare viverra. Nunc at blandit neque, bibendum varius purus.
                        </p>
                        <p className='d-lg-block d-none'>
                            Nam sit amet sapien vitae enim vehicula tincidunt. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc faucibus imperdiet vulputate. Morbi volutpat leo iaculis elit vehicula, eu convallis magna finibus. Suspendisse tristique ullamcorper erat a elementum. Cras eget elit non nunc aliquam ullamcorper quis sed metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada, erat in ullamcorper bibendum, elit lacus mattis lorem, quis luctus diam lorem vel ligula.
                        </p>
                        <a className='d-lg-block d-none' href="">Learn more</a>
                    </div>
                </div>
                <div className="col-lg-10">
                 <div className="img">
                 <img src="img/aboutus.png" className='w-100' alt="" />
                 </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs