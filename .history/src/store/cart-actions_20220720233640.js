import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
  return (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "http://react-http-6b4a6.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Could not fetch cart data");
      }
      const data = await response.json();
      return data;
    };
    try {
      fetchData();
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sent cart data failed",
        })
      );
    }
  };
};

// 260 using an action creator thunk: thunk is a function that delays an action until later
// sendCartData is an action creator
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );
    // adding new code
    const sendRequest = async () => {
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
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sent cart data failed",
        })
      );
    }

    //----------------------------------------
  };
};
