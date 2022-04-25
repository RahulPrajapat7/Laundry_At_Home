const reducer = (state = [null], action) => {
  if (action.type === "deposit") {
    return [...state, action.payload];
  } else if (action.type === "withdraw") {
    return action.payload;
  } else if (action.type === "update") {
    return action.payload;
  } else if (action.type === "getData") {
    return action.payload;
  } else {
    return state;
  }
};
export default reducer;
