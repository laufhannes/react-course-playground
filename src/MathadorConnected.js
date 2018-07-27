import { connect } from "react-redux";
import Mathador from "./Mathador";
import { TIMES3, MINUS7 } from "./redux/mathador/mathadorconstants";

const mapStateToProps = state => ({
  mathadorNumber: state.mathadorNumber
});

const mapDispatchToProps = dispatch => ({
  onTimes3Click: () => {
    dispatch({ type: TIMES3 });
  },
  onMinus7Click: () => {
    dispatch({ type: MINUS7 });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mathador);
