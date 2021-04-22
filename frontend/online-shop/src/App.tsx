import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import "./App.css";
import ProductList from "./components/ProductList";
import MyTheme from "./theme/MyTheme";

function App() {
  return (
    <ThemeProvider theme={MyTheme}>
      <CssBaseline>
        <ProductList />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
