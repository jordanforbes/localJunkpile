import { useSelector, useDispatch } from "react-redux";
import { selectList } from "../../../../features/viewSelectorSlice/viewSelectorSlice";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

const ProjectDetails = (props) => {
  const dispatch = useDispatch();
  const viewState = useSelector((state) => state.viewSelector.view);

  const folder = viewState === "Art" ? "artwork" : "app_project";
  const projectState = useSelector((state) => state.detailSelector);

  const imageFolder = `${process.env.PUBLIC_URL}/media/${folder}/${projectState.id}/`;
  const [coverUrl, setCoverUrl] = useState("");
  const [otherImages, setOtherImages] = useState();

  const handleClick = () => {
    dispatch(selectList());
  };

  useEffect(() => {
    projectState.images.map((img) => {
      if (img.cover) {
        console.log("cover", img.url);
        setCoverUrl(imageFolder + img.url);
      } else {
        console.log("not cover", img.url);
        setOtherImages(img.url);
      }
      console.log("otherimages", otherImages);
    });

    // setCover(imageFolder + projectState.id + "/" + projectState.images.cover);
  }, []);
  // useEffect(() => {
  //   console.log("cover list", cover);
  //   console.log("other list", otherImages);
  // }, [cover, otherImages]);
  // console.log("images", projectState.images);

  const HTMLRenderer = ({ htmlString }) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  const buildCarousel = () => {
    return (
      <Carousel variant="dark">
        <Carousel.Item>
          <img className="carouselImg" src={coverUrl} alt="cover" />
        </Carousel.Item>
      </Carousel>
    );
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <h1>{projectState.title}</h1>
        </div>
        <div
          className="row"
          // style={{
          //   display: "flex",
          //   justifyContent: "space-between",
          //   alignItems: "center",
          // }}
        >
          {otherImages ? (
            buildCarousel()
          ) : (
            <img className="carouselImg" src={coverUrl} alt="cover" />
          )}
        </div>
        <div className="row">
          <p>{projectState.caption}</p>
        </div>
        <div className="row">
          <HTMLRenderer htmlString={projectState.description} />
          {/* <HTMLRenderer htmlString={projectState.caption} /> */}
        </div>
        <div className="row">
          <button onClick={handleClick}>back</button>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
