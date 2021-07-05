import { Layout, Tabs } from "antd";
import { Redirect } from "react-router-dom";
import logo from "../../../assets/img/svg/logo.svg";
import RegisterForm from "../../../components/Admin/RegisterForm";
import LoginForm from "../../../components/Admin/LoginForm";

import "./SignIn.scss";


export default function SignIn(){

    const {Content} = Layout;
    const {TabPane} = Tabs;

    return (
      <Layout className="sign-in">
        <Content className="sign-in__content">
          <h1 className="sign-in__content-logo">
            <img src={logo} alt="Timo Ruiz" />
          </h1>
          <div className="sign-in__content-tabs">
            <Tabs type="card">
              <TabPane tab={<span>Iniciar Sesion</span>} key="1">
                <LoginForm />
              </TabPane>
              <TabPane tab={<span>Nuevo Usuario</span>} key="2">
                <RegisterForm />
              </TabPane>
            </Tabs>
          </div>
        </Content>
      </Layout>
    );
}