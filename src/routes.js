import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./pages/main";
import Pagamento from "./pages/pagamento";
import Header from "./components/Header";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/pagamento" component={Pagamento} />
        </Switch>
      </main>    
    </BrowserRouter>
  )
};

export default Routes;
