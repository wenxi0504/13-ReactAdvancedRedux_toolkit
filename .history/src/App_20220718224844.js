import { useSelector } from "react-redux/es/exports";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  useSelector((state) => state.ui.cartIsVisible);
  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
}

export default App;
