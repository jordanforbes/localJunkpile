import ArtCard from "./ArtCard/ArtCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

const ProjectList = (props) => {
  // redux state selectors
  const appList = useSelector(
    (state) => state.projectListSelector.app_projects
  );
  const artList = useSelector((state) => state.projectListSelector.artwork);
  const viewState = useSelector((state) => state.viewSelector.view);

  // recieve list of projects
  const projectList =
    viewState === "Art" ? artList : viewState === "App" ? appList : [];

  // select folders
  const folder = viewState === "Art" ? "artwork" : "app_project";
  const imageFolder = `${process.env.PUBLIC_URL}/media/${folder}/`;

  console.log(projectList);
  return (
    <div className="projectList ">
      {projectList ? (
        projectList.map((p) => (
          <div className="artDeck">
            <ArtCard project={p} />
          </div>
        ))
      ) : (
        <p>not loaded</p>
      )}
    </div>
  );
};

export default ProjectList;
