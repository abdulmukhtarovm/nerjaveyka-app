import React from 'react'

const ContactsBody = () => {
  return (
    <div className='ContactsBody'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-details">
              <h4>Contacts</h4>

              <div className="row">
                <div className="col-6 d-flex justify-content-between flex-column">
                  <div className="blok mb-4">
                    <h6>Phone</h6>
                    <a href="tel:+998999992727">+998 90 123 45 67</a> <br />
                    <a href="tel:+998999992727">+998 90 123 45 67</a>
                  </div>
                  <div className="blok">
                    <h6>Adress</h6>
                    <a href="mail">1771 Herzog Village Apt. 616 Sandrineport, VA 63303</a>
                  </div>
                </div>
                <div className="col-6 d-flex justify-content-between flex-column">
                  <div className="blok">
                    <h6>Working mode</h6>
                    <p>ПН-ПТ 10:00 - 20:00</p>
                    <p>СБ-ВС Выходной день</p>
                  </div>
                  <div className="socials d-flex">
                    <div className="icon">
                      <a href="https://instagram.com"><img src="img/fb.png" alt="" /></a>
                    </div>
                    <div className="icon">
                      <a href="https://instagram.com"><img src="img/insta.png" alt="" /></a>
                    </div>
                    <div className="icon">
                      <a href="https://instagram.com"><img src="img/tg.png" alt="" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="feedback">
              <h4>Feedback</h4>

              <div className="">
                <input type="text" placeholder='Name' className='form-control name' name="" id="name" />
              </div>
              <div className="">
                <input type="tel" placeholder='Phone' className='form-control tel' name="" id="tel" />
              </div>
              <div className="send-btn">
                <button className='btn' href="">Send</button>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="map">
              <iframe className='w-100 h-100' title='Location' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d187.51608664052296!2d69.34531860589108!3d41.23795102786353!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae5f2ad5f82f65%3A0x3e11809d18d033ca!2z0KLQtdGF0L3QvtC_0LvQsNGB0YI!5e0!3m2!1sru!2sus!4v1656072386996!5m2!1sru!2sus" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactsBody