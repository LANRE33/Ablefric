import React from 'react';

function Register(){
    return (
        <div className="container" id="login">
    <div className="row">
        <div className="col-md-5 py-3 py-md-0" id="side1">
            <h3 className="text-center">Register</h3>
        </div>
        <div className="col-md-7 py-3 py-md-0" id="side2">
            <h3 className="text-center">Create Account</h3>
            <div className="input2 text-center">
            <input type="name" placeholder="Name" />
            <input type="name" placeholder="User Name" />
            <input type="number" placeholder="Phone" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            </div>
            <p className="text-center" id="btnlogin"><a href="/">SIGN UP</a></p>
        </div>

    </div>
   </div>
    );

}

export default Register;