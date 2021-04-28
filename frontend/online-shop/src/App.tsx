import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ProductDetail } from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import MyTheme from "./theme/MyTheme";
import { store } from "./store/Store";
import { Provider } from "react-redux";

export const App = () => {
  return (
    <ThemeProvider theme={MyTheme}>
      <Provider store={store}>
        <CssBaseline>
          <Router>
            <Switch>
              <Route path="/product/:id" component={ProductDetail}></Route>
              <Route path="/products" component={ProductList}></Route>
              <Route exact path="/">
                {" "}
                <Redirect to="/products"></Redirect>
              </Route>
              <Route
                path="*"
                render={() => <div>Error 404: Page not found</div>}
              />
            </Switch>
          </Router>
        </CssBaseline>
      </Provider>
    </ThemeProvider>
  );
};
