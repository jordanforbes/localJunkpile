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
    viewState === "Art"
      ? dispatch(setArt(props.project))
      : dispatch(setApp(props.project));
    dispatch(selectDetail());
    console.log(projectState);
    console.log("!!!!artcardSrc");
    console.log(props.src);
  };

  return (
    <div className="artcardcontainer">
      <button onClick={setDetails}>
        <div className="coverImgContainer">
          <img className="coverImg" alt={props.cover} src={props.src} />
        </div>
        <p>{props.title}</p>
      </button>
    </div>
  );
};

export default ArtCard;
