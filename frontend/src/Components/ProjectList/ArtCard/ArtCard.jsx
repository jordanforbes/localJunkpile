import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setArt,
  setApp,
} from "../../../features/detailSelectorSlice/detailSelectorSlice";
import { selectDetail } from "../../../features/viewSelectorSlice/viewSelectorSlice";

const ArtCard = (props) => {
  const [cover, setCover] = useState();
  const dispatch = useDispatch();
  const viewState = useSelector((state) => state.viewSelector.view);
  // const projectState = useSelector((state) => state.detailSelector);
  // const modeState = useSelector((state) => state.viewSelector.mode);

  const folder = viewState === "Art" ? "artwork" : "app_project";

  const imageFolder = `${process.env.PUBLIC_URL}/media/${folder}/${props.project.id}/`;

  const images = props.project.images;

  useEffect(() => {
    setCover(props.project.images.url);
    props.project.images.map((img) => {
      if (img.cover) {
        setCover(img.url);
      }
    });
  }, [viewState]);

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
          <img className="coverImg" alt={"project"} src={imageFolder + cover} />
        </div>
        <p>{props.project.title}</p>
      </div>
    </div>
  );
};

export default ArtCard;
