import { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  //put override the existing data
  useEffect(() => {
    const sendCartData = async () => {
      const response = await fetch(
        "http://react-http-6b4a6.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("sending cart data failed");
      }

      const responseData = await response.json();
    };
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}

      <Products />
    </Layout>
  );
}

export default App;
