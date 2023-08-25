import { useDispatch } from "react-redux";

import {
  selectArt,
  selectApp,
  selectList,
  selectDetail,
  selectAdmin,
} from "../../features/viewSelectorSlice/viewSelectorSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleAdmin = () => {
    dispatch(selectAdmin());
  };
  return (
    <div className="headerBox">
      <h1 className="headerName">Jordan Forbes</h1>
      <br />
      {/* <button onClick={toggleAdmin}>Admin</button> */}
    </div>
  );
};

export default Header;
