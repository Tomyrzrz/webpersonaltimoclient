import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";

import "./LayoutBasic.scss";

export default function LayoutBasic(props) {
  const { routes } = props
  const { Content, Footer } = Layout

  return (
    <Layout>
      <h2>Menu Usuario Basico </h2>
      <Layout>
        <Content>
          <LoadRoutes routes={routes} />
        </Content>
        <Footer>
          Timoteo Ruiz Ruiz
        </Footer>
      </Layout>
    </Layout>
  );
}

function LoadRoutes({routes}){
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
