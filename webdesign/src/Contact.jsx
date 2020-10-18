import React, { useState } from "react";

const Contact =() => {
    const [data, setData] = useState({
        fullname:"",
        phone: "",
        email:"",
        msg:"",
    });
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preval) =>{
            return {
                ...preval,
                [name] : value,
                
            }
        })
    };
    const formSubmit = (e) => {
        alert(
            `My name is ${data.fname}. My moblile number is ${data.Phone} and email is ${data.email}, Here is what I want to say ${data.msg}`
            );
    };
    
    return (
        <>
        <div className="my-5">
            <h1 className="text-center"> Contact US </h1>

        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                    
                    <div className="mb-3">
                     <label for="exampleFormControlInput1" className="form-label">FullName</label>
                     <input type="text" className="form-control" id="exampleFormControlInput1" name="fname" value={data.fname} onChange={InputEvent} placeholder="Enter your Name"/>
                    </div>
                    <div className="mb-3">
                     <label for="exampleFormControlInput1" className="form-label">Phone</label>
                     <input type="text" className="form-control" id="exampleFormControlInput1" name="Phone" value={data.Phone} onChange={InputEvent} placeholder="Moblie number"/>
                    </div>
                    <div className="mb-3">
                     <label for="exampleFormControlInput1" className="form-label">Email address</label>
                     <input type="text" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com"/>
                    </div>

                
                    <div className="mb-3">
                    <label for="exampleFormControlTextarea1"> Message </label>
                   
                    <textarea type="text" className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent} ></textarea>
                    </div>
                    <div>
                        <button className="btn btn-outline-primary" type="submit"> Submit form </button>
                    </div>
                    
                        


                    </form>

                </div>

            </div>

        </div>

        </>
    );
};

export default Contact; 