import React from 'react';

function Login(){
    return (
        <div className="container" id="login">
    <div className="row">
        <div className="col-md-5 py-3 py-md-0" id="side1">
            <h3 className="text-center">Welcome Back!</h3>
        </div>
        <div className="col-md-7 py-3 py-md-0" id="side2">
            <h3 className="text-center">Account login</h3>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, sequi.</p>
            <div className="input2 text-center">
            <input type="name" placeholder="User Name" />
            <input type="password" placeholder="Password" />
            </div>
            <p className="text-center" id="btnlogin"><a href="/">LOG IN</a></p>
            <p className="text-center">Forgot Password<a href="/">Click</a></p>
        </div>

    </div>
   </div>
  

    );

}

export default Login;