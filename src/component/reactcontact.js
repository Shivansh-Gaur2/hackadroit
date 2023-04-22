import React from 'react'

const Reactcontact =() => {
    return(
        <>
            <div className="conatiner-contact100">
                <div className="wrap-contact100">
                    <form className="conatct100-form">
                        <span className="contact100-form-title">Contact Us</span>

                        <div className="wrap-input100 rs1-wrap-input100">
                            <span className="label-input100">Your Name</span>
                            <input
                            className="input100"
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            autoComplete="off"
                            required
                            />
                            <span className="focus-input100"></span>
                        </div>

                        <div className="wrap-input100 rs1-wrap-input100">
                            <span className="label-input100">Email</span>
                            <input
                            className="input100"
                            type="text"
                            name="email"
                            placeholder="Enter your email address"
                            autoComplete="off"
                            required
                            />
                            <span className="focus-input100"></span>
                        </div>

                        <div className="wrap-input100 rs1-wrap-input100">
                            <span className="label-input100">Mobile Number</span>
                            <input
                            className="input100"
                            type="text"
                            name="phone"
                            placeholder="Enter your phone number"
                            autoComplete="off"
                            required
                            />
                            <span className="focus-input100"></span>
                        </div>

                        <div className="wrap-input100 rs1-wrap-input100">
                            <span className="label-input100">Address</span>
                            <input
                            className="input100"
                            type="text"
                            name="address"
                            placeholder="Enter your address"
                            autoComplete="off"
                            required
                            />
                            <span className="focus-input100"></span>
                        </div>

                        <div className="wrap-input100">
                            <span className="label-input100">Message</span>
                            <textarea
                            className="input-100"
                            name="message"
                            placeholder="Your message here..."></textarea>
                            <span className="focus-input100"></span>
                        </div>

                        <div className="container-contact100-form-btn">
                            <button className="contact100-form-btn">
                                <span>
                                    Submit
                                    <i
                                    className="fa fa-long-arrow-right m-l-7"
                                    aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                    </form>

                    <span className="contact100-more">
                        For any question contact our 24/7 call center:
                        <span className="contact100-more-highlight">+91 123 6889</span>
                    </span>
                </div>
            </div>

                    
        </>

    )
}

export default Reactcontact