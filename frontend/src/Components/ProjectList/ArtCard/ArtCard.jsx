import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setArt,
  setApp,
} from "../../../features/detailSelectorSlice/detailSelectorSlice";
import { selectDetail } from "../../../features/viewSelectorSlice/viewSelectorSlice";

const ArtCard = (props) => {
  const dispatch = useDispatch();
  const viewState = useSelector((state) => state.viewSelector.view);
  const modeState = useSelector((state) => state.viewSelector.mode);
  const projectState = useSelector((state) => state.detailSelector);
  const setDetails = () => {
    viewState === "ArtList"
      ? dispatch(setArt(props.project))
      : dispatch(setApp(props.project));
    dispatch(selectDetail());
  };

  return (
    <button onClick={setDetails}>
      {/* <img
        key={props.image.id}
        src={props.image.image}
        style={{ maxWidth: "400px" }}
        alt="project"
      /> */}
    </button>
  );
};

export default ArtCard;
