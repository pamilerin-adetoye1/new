import { useSnapshot } from "valtio";
import state from "../pages/store";
import PropTypes from "prop-types";

const CustomButton = ({ type, handleClick, title, customStyles }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
      };
    }
  };
  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );


};

  CustomButton.propTypes = {
    type: PropTypes.string,
    handleClick: PropTypes.func,
    title: PropTypes.string,
    customStyles: PropTypes.func,
  };
export default CustomButton;
