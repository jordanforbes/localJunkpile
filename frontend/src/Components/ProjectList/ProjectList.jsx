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

  const projectList =
    viewState === "Art" ? artList : viewState === "App" ? appList : [];

  return (
    <div className="projectList">
      {projectList ? (
        projectList.map((p) => <p>{p.title}</p>)
      ) : (
        <p>not loaded</p>
      )}
    </div>
  );
};

export default ProjectList;
