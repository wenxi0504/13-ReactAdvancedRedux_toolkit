import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { uiActions } from "./store//ui-slice";

function App() {
  const dispatch = useDispatch();
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

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent cart data successfully",
        })
      );

      // const responseData = await response.json();

      sendCartData().catch(
        error => (
           dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Sent cart data failed",
          })
        );
        )
      );
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
