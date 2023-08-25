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
  const projectState = useSelector((state) => state.detailSelector);
  // const modeState = useSelector((state) => state.viewSelector.mode);

  const setDetails = () => {
    viewState === "Art"
      ? dispatch(setArt(props.project))
      : dispatch(setApp(props.project));
    dispatch(selectDetail());
  };

  return (
    <div className="artcardcontainer">
      <div onClick={setDetails}>
        <div className="coverImgContainer">
          <img className="coverImg" alt={props.cover} src={props.src} />
        </div>
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default ArtCard;
