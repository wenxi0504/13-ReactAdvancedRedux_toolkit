import { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { uiActions } from "./store//ui-slice";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  //put override the existing data
  useEffect(() => {
    //--------------remove below codes if you use action thunk-cart-slice
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data",
        })
      );

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
      // -----only keep this code--------
      if (isInitial) {
        isInitial = false;
        return;
      }
      if (cart.changed) {
        dispatch(sendCartData(cart));
      }
      //----------------------------------------------
    };
    //------remove to cart slice
    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sent cart data failed",
        })
      );
    });
    //---------------------------------
    // add new code
    dispatch(sendCartData(cart));
    //----------------------------------
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}

        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
