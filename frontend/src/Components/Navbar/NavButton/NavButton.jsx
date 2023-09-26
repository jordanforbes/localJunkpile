import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import viewSelectorSlice, {
  selectArt,
  selectApp,
  selectList,
  selectDetail,
  selectAdmin,
} from "./../../../features/viewSelectorSlice/viewSelectorSlice";
import Nav from "react-bootstrap/Nav";

const NavButton = (props) => {
  const [active, toggleActive] = useState(false);
  const view = useSelector((state) => state.viewSelector.view);

  const dispatch = useDispatch();
  const toggleArt = () => {
    dispatch(selectArt());
    dispatch(selectList());
  };
  const toggleApps = () => {
    dispatch(selectApp());
    dispatch(selectList());
  };

  const handleClick = () => {
    if (view !== props.view) {
      props.view === "Art" ? toggleArt() : toggleApps();
    }
  };

  useEffect(() => {
    view === props.view ? toggleActive(true) : toggleActive(false);
  });

  return (
    <Nav.Link
      className={`${active ? "activeBtn" : ""}`}
      // className="activeBtn"
      onClick={handleClick}
    >
      {props.name}
    </Nav.Link>
  );
};

export default NavButton;
