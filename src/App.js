import React from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { ToastProvider } from "react-toast-notifications";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import Header from "./components/Header";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

const hist = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={hist}>
        <ToastProvider>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </ToastProvider>
      </Router>
    </Provider>
  );
}

export default App;
