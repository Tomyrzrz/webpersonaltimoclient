import "./LoginForm.scss";
import { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { signInApi } from "../../../api/user";
import { IdcardTwoTone, LockOutlined } from "@ant-design/icons";

export default function LoginForm(){

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const changeForm = e => {
        setInputs({...inputs, [e.target.name]: e.target.value });
    }

    const login = e => {
        console.log(inputs);
        signInApi(inputs);
    }

    return (
      <Form className="login-form" onFinish={login} onChange={changeForm}>
        <Form.Item>
          <Input
            prefix={<IdcardTwoTone />}
            type="email"
            name="email"
            placeholder="correo@example.com"
            className="login-form__input"
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<LockOutlined />}
            type="password"
            name="password"
            placeholder="Password"
            className="login-form__input"
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" className="login-form__button">
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    );
}