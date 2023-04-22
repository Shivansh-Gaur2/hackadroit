import React, {useState} from 'react'
import InputIcon from '@mui/icons-material/Input';
import './reactcontact.css'

const Reactcontact =() => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
    });
    
    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUser({ ...user, [name]: value });
    };

    const postData = async(e) => {
        e.preventDefault();

        const {name, email, phone, address, message } = user;

        if(name && email && phone && address && message){
            const res = await fetch("https://hackadroit-54d73-default-rtdb.firebaseio.com/ourDatabase.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                address,
                message,
            }),
        }
        ) ;

        if(res){
            setUser({
                name: "",
                email: "",
                phone: "",
                address: "",
                message: "",
            }
            );

            alert("Thanks for contacting us, we will reach you out within the next 24 hours.");
        }
        }
        else{
            alert("Please fill all the fields!!!");
        }
    };
        

    return(
        <>
        <div className="bgImg">
        <div className="container-contact100">
                <div className="wrap-contact100">
                    <form className="contact100-form" method="POST">
                        <span className="contact100-form-title">
                            <div className="row justify-content-end">
                                <div className="col col-4">
                                <h2 className="ms-10 mt-4 mb-4 fw-bold">Contact Us</h2>
                                </div>
                            </div>
                            </span>

                        <div className="wrap-input100 rs1-wrap-input100 container text-center">
                            <div className="row justify-content-end">
                            <div className="col col-2 bg-light">
                            <span className="label-input100"><h5>Your Name</h5></span>
                            </div>
                            <div className="col col-4 bg-danger-subtle">
                            <input
                            className="input100 effect-1 my-1"
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={user.name}
                            onChange={getUserData}
                            autoComplete="off"
                            required/>
                            <span class="focus-border"></span>
                            </div>
                            </div>
                            <span className="focus-input100"></span>
                        </div>

                        <div className="wrap-input100 rs1-wrap-input100 container text-center mt-3">
                            <div className="row justify-content-end">
                                <div className="col col-2 bg-light">
                                <span className="label-input100"><h5>Email</h5></span>
                                </div>
                                <div className="col col-4 bg-danger-subtle">
                                <input
                            className="input100 effect-1 my-1"
                            type="text"
                            name="email"
                            placeholder="Enter your email address"
                            value={user.email}
                            onChange={getUserData}
                            autoComplete="off"
                            required/>
                                </div>
                            </div>
                            <span className="focus-input100"></span>
                        </div>

                        <div className="wrap-input100 rs1-wrap-input100 container text-center mt-3">
                            <div className="row justify-content-end">
                                <div className="col col-2 bg-light">
                                <span className="label-input100"><h5>Mobile Number</h5></span>
                                </div>
                                <div className="col col-4 bg-danger-subtle">
                                <input
                            className="input100 effect-1 my-1"
                            type="text"
                            name="phone"
                            placeholder="Enter your phone number"
                            value={user.phone}
                            onChange={getUserData}
                            autoComplete="off"
                            required/>
                                </div>
                            </div>
                            <span className="focus-input100"></span>
                        </div>

                        <div className="wrap-input100 rs1-wrap-input100 container text-center mt-3">
                            <div className="row justify-content-end">
                                <div className="col col-2 bg-light">
                                <span className="label-input100"><h5>Address</h5></span>
                                </div>
                                <div className="col col-4 bg-danger-subtle">
                                <input
                            className="input100 effect-1 my-1"
                            type="text"
                            name="address"
                            placeholder="Enter your address"
                            value={user.address}
                            onChange={getUserData}
                            autoComplete="off"
                            required/>
                                </div>
                            </div>
                            <span className="focus-input100"></span>
                        </div>

                        <div className="wrap-input100 container text-center mt-3">
                            <div className="row justify-content-end">
                                <div className=" col col-2 bg-light">
                                <span className="label-input100"><h5>Query</h5></span>
                                </div>

                                <div className="col col-4 bg-danger-subtle">
                                <textarea
                            className="input-100 effect-1 mt-1 messageBox"
                            name="message"
                            placeholder="Enter your query here..."
                            value={user.message}
                            onChange={getUserData}>
                            </textarea>
                                </div>
                            </div>
                                
                            <span className="focus-input100"></span>
                        </div>

                        <div className="container-contact100-form-btn">
                            <div className="mx-auto text-center mt-4">
                            <div className="row justify-content-end">
                            <div className="col col-6">
                            <button className="contact100-form-btn btn btn-danger btn-round bold" onClick={postData}>
                                
                                    <span className="me-2">
                                    Submit
                                    </span>
                                    <InputIcon/>
                                    
                            </button>
                            </div>
                            </div>
                            </div>
                        </div>
                    </form>

                    <span className="contact100-more">
                        <div className="text-center mt-3 fs-5">
                            <div className="row justify-content-end">
                                <div className="col col-6">
                                <p>For any question contact our 24/7 call center:</p>
                                </div>
                            </div>
                        </div>
                        
                        <span className="contact100-more-highlight">
                            <div className="text-center fs-5">
                            <div className="row justify-content-end">
                                <div className="col col-6">
                                <p>+91 012 3456 789</p>
                                </div>
                            </div>
                            </div>
                        </span>
                    </span>
                </div>
            </div>

        </div>
            
                    
        </>

    )
}

export default Reactcontact