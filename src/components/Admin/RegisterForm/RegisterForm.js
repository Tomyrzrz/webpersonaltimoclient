
import { Form, Input, Button, Checkbox, notification } from "antd";
import {useState} from "react";
import {
  BorderVerticleOutlined,
  IdcardTwoTone,
  LockOutlined
} from "@ant-design/icons";
import { emailValidation, minLengthValidation } from "../../../utils/formValidation";
import { singUpApi } from "../../../api/user";

import "./RegisterForm.scss";

export default function RegisterForm(){

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    privacyPolicy: false
  });

  const [formValid, setFormValid] = useState({
    email: false,
    password: false,
    repeatPassword: false,
    privacyPolicy: false
  })

  const chanceForm = e => {
    if (e.target.name === "privacyPolicy"){
      setInputs({
        ...inputs,
        [e.target.name]: e.target.checked
      });
    }else{
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value,
      });
    }
  }

  const inputValidations = e => {
    const { type, name } = e.target
    if(type === "email"){
      setFormValid({ ...formValid, [name]: emailValidation(e.target) });
    }
    if(type === "password"){
      setFormValid({ ...formValid, [name]: minLengthValidation(e.target, 7)});
    }
    if(type === "checkbox"){
      setFormValid({ ...formValid, [name]: e.target.checked });
    }
  }

  const register = async e => {
    //const { email, password, repeatPassword, privacyPolicy } = formValid;
    const emailVal = inputs.email;
    const passwordValue = inputs.password;
    const repeatPasswordValue = inputs.repeatPassword;
    const privacyPolicyVal = inputs.privacyPolicy;
    if(!emailVal || !passwordValue || !repeatPasswordValue || !privacyPolicyVal){
      notification["error"]({
        message: "Todos los campos son necesarios."
      });
    }else{
      if(passwordValue !== repeatPasswordValue){
        notification["error"]({
          message: "Las contraseñas deben ser iguales.",
        });
      }else{
        const result = await singUpApi(inputs);
        if(!result.ok){
          notification["error"]({
            message: result.message,
          });
        }else{
        notification["success"]({
          message: result.message,
        });
        resetForm();
      }
      }
    }
  }

  const resetForm = () => {
    const inputs = document.getElementsByTagName('input');
    for (let i = 0 ; i < inputs.length; i++){
      inputs[i].classList.remove('success');
      inputs[i].classList.remove('error');
    }
    setInputs({
      email: "",
      password: "",
      repeatPassword: "",
      privacyPolicy: false,
    });
    setFormValid({
      email: false,
      password: false,
      repeatPassword: false,
      privacyPolicy: false,
    });
  }
    return (
      <Form className="register-form" onFinish={register} onChange={chanceForm}>
        <Form.Item>
          <Input
            prefix={<IdcardTwoTone />}
            type="email"
            name="email"
            placeholder="correo@example.com"
            className="register-form__input"
            onChange={inputValidations}
            value={inputs.email}
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<BorderVerticleOutlined />}
            type="password"
            name="password"
            placeholder="Password al menos 8 caracteres."
            className="register-form__input"
            onChange={inputValidations}
            value={inputs.password}
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<LockOutlined />}
            type="password"
            name="repeatPassword"
            placeholder="Repetir Password"
            className="register-form__input"
            onChange={inputValidations}
            value={inputs.repeatPassword}
          />
        </Form.Item>
        <Form.Item>
          <Checkbox
            name="privacyPolicy"
            checked={inputs.privacyPolicy}
            onChange={inputValidations} >
            He leido y acepto las condiciones del servicio.
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" className="register-form__button">
            Crear Cuenta
          </Button>
        </Form.Item>
      </Form>
    );
}