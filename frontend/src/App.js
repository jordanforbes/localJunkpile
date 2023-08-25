import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectArt,
  selectApp,
  selectList,
  selectDetail,
  selectAdmin,
} from "./features/viewSelectorSlice/viewSelectorSlice";
import { populateList } from "./features/projectListSelectorSlice/projectListSelectorSlice";
import "./App.css";
import "./styles/styles.css";
import axios from "axios";
import ProjectList from "./Components/ProjectList/ProjectList";
import Admin from "./Components/Admin/Admin";
import ProjectDetails from "./Components/ProjectList/ArtCard/ProjectDetails/ProjectDetails";
import Header from "./Components/Header/Header";
import { Button, ButtonGroup } from "react-bootstrap";

const App = () => {
  const [artworkList, setArtworkList] = useState([]);
  const [appProjectList, setAppProjectList] = useState([]);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const viewState = useSelector((state) => state.viewSelector.view);
  const modeState = useSelector((state) => state.viewSelector.mode);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("/db/data.json")
        .then((res) => {
          setData(res.data);
        })
        .catch((e) => {
          console.error("Error fetching data", e);
        });
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log("data", data);
    if (data) {
      dispatch(populateList(data));
    }
  }, [data]);

  const toggleArt = () => {
    dispatch(selectArt());
    dispatch(selectList());
  };
  const toggleApps = () => {
    dispatch(selectApp());
    dispatch(selectList());
  };

  const toggleAdmin = () => {};

  const DisplayProjects = (props) => {
    const appList = useSelector(
      (state) => state.projectListSelector.app_projects
    );
    const artList = useSelector((state) => state.projectListSelector.artwork);
    const viewState = useSelector((state) => state.viewSelector.view);
    const modeState = useSelector((state) => state.viewSelector.mode);

    return (
      <>
        <div>display projects</div>
      </>
    );
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <ButtonGroup>
              <Button
                onClick={toggleArt}
                className="mx-2 d-inline-block btn btn-primary float-left"
              >
                Art
              </Button>
              <Button
                onClick={toggleApps}
                className="mx-2 d-inline-block btn btn-primary  float-left"
              >
                Apps
              </Button>
            </ButtonGroup>
          </div>
          <div className="row">
            {modeState === "Admin" ? (
              <Admin />
            ) : modeState === "Detail" ? (
              <ProjectDetails />
            ) : (
              <ProjectList />
            )}
          </div>
        </div>
      </div>
      <div className="col-md-3"></div>
    </div>
  );
};

export default App;
