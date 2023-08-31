import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setArt,
  setApp,
} from "../../../features/detailSelectorSlice/detailSelectorSlice";
import { selectDetail } from "../../../features/viewSelectorSlice/viewSelectorSlice";

const ArtCard = (props) => {
  const [cover, setCover] = useState();
  const [coverUrl, setCoverUrl] = useState();
  const dispatch = useDispatch();
  const viewState = useSelector((state) => state.viewSelector.view);
  const projectState = useSelector((state) => state.detailSelector);
  // const modeState = useSelector((state) => state.viewSelector.mode);

  const folder = viewState === "Art" ? "artwork" : "app_project";

  const imageFolder = `${process.env.PUBLIC_URL}/media/${folder}/${props.project.id}/`;

  const images = props.project.images;
  useEffect(() => {
    props.project.images.map((i) =>
      i.cover.url ? (i.cover === true ? setCover(i) : "") : ""
    );
    console.log("cover", cover);
  }, [props.project]);

  useEffect(() => {
    setCoverUrl(imageFolder + cover.url);
  }, [cover]);
  const setDetails = () => {
    viewState === "Art"
      ? dispatch(setArt(props.project))
      : dispatch(setApp(props.project));
    dispatch(selectDetail());
  };

  // console.log("artcard", coverUrl);
  return (
    <div className="artcardcontainer">
      <div onClick={setDetails}>
        <div className="coverImgContainer">
          <img className="coverImg" alt={"project"} src={"none"} />
        </div>
        <p>{props.project.title}</p>
      </div>
    </div>
  );
};

export default ArtCard;
