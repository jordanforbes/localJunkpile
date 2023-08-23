import ArtCard from "./ArtCard/ArtCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

const ProjectList = (props) => {
  const appList = useSelector(
    (state) => state.projectListSelector.app_projects
  );
  const artList = useSelector((state) => state.projectListSelector.artwork);
  const viewState = useSelector((state) => state.viewSelector.view);
  // const modeState = useSelector((state) => state.viewSelector.mode);
  const folder = viewState === "Art" ? "artwork" : "app_project";

  const projectList =
    viewState === "Art" ? artList : viewState === "App" ? appList : [];
  const imageFolder = `${process.env.PUBLIC_URL}/media/${folder}/`;

  useEffect(() => {
    console.log(projectList);
    console.log(imageFolder);
  }, []);

  return (
    <div className="projectList">
      {projectList ? (
        projectList.map((p) => (
          <>
            {console.log(`${imageFolder}${p.id}/${p.images.cover}`)}
            <div>
              <img
                alt={p.images.cover}
                src={`${imageFolder}${p.id}/${p.images.cover}`}
              />
            </div>
            <p>{p.title}</p>
          </>
        ))
      ) : (
        <p>not loaded</p>
      )}
    </div>
  );
};

export default ProjectList;
