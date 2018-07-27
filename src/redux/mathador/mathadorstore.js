import { createStore } from "redux";
import mathador from './mathadorreducer';

const mathadorStore = createStore(
  mathador,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.mathadorStore = mathadorStore;

export default mathadorStore;
