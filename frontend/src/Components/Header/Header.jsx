import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Navbar/Navbar";
import {
  selectSplash,
  selectAdmin,
} from "../../features/viewSelectorSlice/viewSelectorSlice";
import { useSpring, animated } from "react-spring";

const Header = () => {
  // const [splash, notSplash] = useState(false);
  const viewState = useSelector((state) => state.viewSelector.view);
  const springProps = useSpring({
    fontSize: viewState === "Splash" ? "150px" : "50px",
  });
  const dispatch = useDispatch();
  const toggleAdmin = () => {
    dispatch(selectAdmin());
  };

  const toggleSplash = () => {
    dispatch(selectSplash());
  };

  return (
    <div className="headerBox">
      <div
        onClick={toggleSplash}
        className={`${viewState === "Splash" ? "" : "selectorBox"}`}
      >
        <animated.h1
          className={` ${viewState === "Splash" ? "splashName" : "headerName"}`}
          style={springProps}
        >
          Jordan Forbes
        </animated.h1>
      </div>
      <br />
      <NavBar />
    </div>
  );
};

export default Header;
