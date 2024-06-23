import React from "react";
import { Row, Col, Form, Input } from "antd";
import { Link as RouterLink } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { userLogin } from "../redux/actions/userActions";
function Login() {

    const dispatch = useDispatch()

    function onFinish(values){
        dispatch(userLogin(values))
        console.log(values)
      }


  return (
    <div className="login">
      <Row gutter={16} className="d-flex align-items-center">
        <Col lg={16} style={{ position: "relative" }}>
          <img src="https://th.bing.com/th/id/R.f37a855707664d48fb9ee46116262cdf?rik=%2fQp3t2zUgWykmw&riu=http%3a%2f%2fpapers.co%2fwallpaper%2fpapers.co-ak64-lamborghini-car-dark-black-awesome-29-wallpaper.jpg&ehk=zb38mkAl2GZPWSwlnHSWnt4%2blf0AJZo2ScMVz09PkOA%3d&risl=&pid=ImgRaw&r=0" />
          <h1 className="login-logo">RentACar</h1>
        </Col>
        <Col lg={8} className="text-left p-5">
          <Form layout="vertical" className="login-form p-5" onFinish={onFinish}>
            <h1>Login</h1>
            <hr />
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <button className="btn2 mt-2 mb-3">Login</button>
            <br />

            <RouterLink to="/register">Click Here to Register</RouterLink>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
