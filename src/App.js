
import { BrowserRouter as Rutas, Route, Switch } from "react-router-dom";
import routes from "./config/routes";

import './App.scss';

function App() {
  
  return (
      <Rutas>
        <Switch>
          {routes.map((route, index) => (
             <RouteWithSubRoutes key={index} {...route} />
          ))}
        </Switch>
      </Rutas>
  );
}

function RouteWithSubRoutes(route){

  return (
    <Route 
      path={route.path} 
      exact={route.exact} 
      render={props => <route.component routes={route.routes} {...props} /> }
    />
  );
}

export default App;
