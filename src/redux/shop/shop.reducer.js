import SHOP_DATA from "./shop.data";
const INITIAL_STATES = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATES, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;