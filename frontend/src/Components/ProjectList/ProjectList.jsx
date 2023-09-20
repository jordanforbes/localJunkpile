import ArtCard from "./ArtCard/ArtCard.jsx";
import { useSelector } from "react-redux";

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

  console.log(projectList);
  return (
    <div className="projectList ">
      {projectList ? (
        projectList.map((p, i) => (
          <div className="artDeck">
            <ArtCard project={p} index={i} />
          </div>
        ))
      ) : (
        <p>not loaded</p>
      )}
    </div>
  );
};

export default ProjectList;
