import { connect } from "react-redux";
import { setVisibilityFilter } from "../../Store/action/index";
import Link from "../../Component/link";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.setvisibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
