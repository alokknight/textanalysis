import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import './signin.css';
import Form from './Form';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      token: '',
      redirect: localStorage.getItem('userTokenTime') ? true : false,
      requestError: '',
      reqErr: ''
    }
  }

  onSubmitHandler=()=> {
    if (!(this.state.email === '' || this.state.password === '')
      && (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email))) {
      axios.post('/api/signin', {
        email: this.state.email,
        password: this.state.password
      }).then(res => {
        // console.log("res",res)
        localStorage.setItem('userTokenTime', res.data.token);
        this.setState({
          redirect: true
        });
      }).catch(err => {
        console.log("error- ", err.message)
        if(err.message === "Request failed with status code 401")
          this.setState({
            requestError: "Please confirm verification sent to your email address. Check Spam/Junk also and mark it as safe."
          })
        else{
          this.setState({
            requestError: "Please enter valid details."
          })
        }
      });
    } else {
      this.setState({
        requestError: "Please fill all the details"
      })
      // alert('Please enter valid details');
    }
  }
  changeHandler=(e)=>{
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    if (this.state.redirect) return <Navigate to="/" />;
    return (
      <React.Fragment>
        <div>
        <div className="container">
          <div className="d-flex justify-content-center h-100">
            <div className="signincard">
              <div className="signincard-header">
                {/* <img style= "align:center"; src="{{request.scheme}}://{{request.META.HTTP_HOST}}/static/img/smartservelogo.jpg" alt="EMS"width="50" height="50"></img> */}
                {/* <div className="d-flex justify-content-end social_icon">
                  <span><i className="fa fa-facebook-square"></i></span>
                  <span><i className="fa fa-google-plus-square"></i></span>
                  <span><i className="fa fa-twitter-square"></i></span>
                </div> */}
                {/* <h2>Event ManageMent</h2> */}
              </div>

              <div className="card-body"></div>

              <Form onSubmit={this.onSubmitHandler}>
                <h3 className="text-center text-info">Login</h3>
                <div>
                  <label htmlFor="email" className="text-info">Email:</label><br />
                  <input
                    id="email"
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="xyz@domain.com"
                    onChange={this.changeHandler}
                    required />
                </div>
                <div>
                  <label htmlFor="password" className="text-info">Password:</label><br />
                  <input
                    id="password"
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="********"
                    onChange={this.changeHandler}
                    required />
                </div>
                <div className="d-flex justify-content-between align-items-end my-2 text-warning">
                  {this.state.requestError && <p>{this.state.requestError}</p>}
                </div>

                <div className="card-footer">
                <button onClick={this.onSubmitHandler}
                  className="btn float-left login_btn transonclick"
                  style={{ textDecoration: 'none', color:"black"}}
                  type="button">Login</button>
                <div className="mt-2 d-flex justify-content-center links transonclick" >
                  <Link to="/signup" style={{ textDecoration: 'none', color:"#ffff"}} className="d-flex justify-content-centertext-info">Sign Up</Link>
                </div>

                <div className="d-flex justify-content-center transonclick">
                <Link to="/password/forgot" style={{ textDecoration: 'none', color:"#ffff"}}>
                  Forgot password?
                </Link>
                </div>
              </div>
              </Form>

{/*
              <div className="card-footer">

              </div> */}

            </div>
          </div>
        </div>
          <div class="ocean">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
          </div>
        </div>
      </React.Fragment>

    );
  }
}

export default SignIn;