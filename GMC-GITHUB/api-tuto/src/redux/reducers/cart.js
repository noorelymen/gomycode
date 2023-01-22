const initialState = {
  cart: [],
  totalAmount: 0,
};

// reducer
const CartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const exists = state.cart.find((el) => el.id === payload.id);
  switch (type) {
    case "ADD":
      if (exists) {
        //update qty
        //return { ...state, cart: state.cart.qty + 1 };
      } else {
        //add item
        return { ...state, cart: [...state.cart, { ...payload, qty: 1 }] };
        //return { ...state, cart: state.cart.push({ ...payload, qty: 1 }) };
      }
    // case "REMOVE":
    //   if (exists) {
    //     //update qty if > 0
    //     return { ...state, cart: state.cart.qty - 1 };
    //   } else {
    //     //remove it from dom and from array
    //     return { ...state, cart: state.cart.push({ ...payload, qty: 1 }) };
    //   }
    default:
      return state;
  }
};

export default CartReducer;
