import { TIMES3, MINUS7 } from "./mathadorconstants";

const mathador = (state = {mathadorNumber: 1}, action) => {
  switch (action.type) {
    case TIMES3:
      return {mathadorNumber: state.mathadorNumber * 3};
    case MINUS7:
      return {mathadorNumber: state.mathadorNumber - 7};
    default:
      return state;
  }
}

export default mathador;
