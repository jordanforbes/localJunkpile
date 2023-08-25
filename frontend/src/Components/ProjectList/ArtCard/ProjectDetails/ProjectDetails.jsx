import { useSelector, useDispatch } from "react-redux";
import { selectList } from "../../../../features/viewSelectorSlice/viewSelectorSlice";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

const ProjectDetails = (props) => {
  const dispatch = useDispatch();
  const viewState = useSelector((state) => state.viewSelector.view);
  const projectState = useSelector((state) => state.detailSelector);

  const folder = viewState === "Art" ? "artwork" : "app_project";

  const imageFolder = `${process.env.PUBLIC_URL}/media/${folder}/`;
  const appList = useSelector(
    (state) => state.projectListSelector.app_projects
  );
  const artList = useSelector((state) => state.projectListSelector.artwork);
  const projectList =
    viewState === "Art" ? artList : viewState === "App" ? appList : [];
  const [cover, setCover] = useState("");
  const [otherImages, setOtherImages] = useState([]);

  const handleClick = () => {
    dispatch(selectList());
  };

  useEffect(() => {
    setCover(imageFolder + projectState.id + "/" + projectState.images.cover);
  }, []);

  const HTMLRenderer = ({ htmlString }) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  const buildCarousel = () => {
    return (
      <Carousel variant="dark">
        <Carousel.Item>
          <img className="carouselImg" src={cover} alt="cover" />
        </Carousel.Item>
        {/* {otherImages.map((i) => (
          <Carousel.Item>
            <img className="carouselImg" src={i} alt="other" />
          </Carousel.Item>
        ))} */}
      </Carousel>
    );
  };

  return (
    <>
      <div className="container">
        <h1>{projectState.title}</h1>
        {otherImages[0] ? (
          buildCarousel()
        ) : (
          <img className="carouselImg" src={cover} alt="cover" />
        )}

        <HTMLRenderer htmlString={projectState.description} />
        <button onClick={handleClick}>back</button>
      </div>
    </>
  );
};

export default ProjectDetails;
