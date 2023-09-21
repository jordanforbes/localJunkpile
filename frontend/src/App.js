import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  populateList,
  getListObj,
} from "./features/projectListSelectorSlice/projectListSelectorSlice";
import "./App.css";
import "./styles/styles.css";
import axios from "axios";
import ProjectList from "./Components/ProjectList/ProjectList";
import Admin from "./Components/Admin/Admin";
import ProjectDetails from "./Components/ProjectList/ArtCard/ProjectDetails/ProjectDetails";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const modeState = useSelector((state) => state.viewSelector.mode);
  // const viewState = useSelector((state) => state.viewSelector.view);

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
    if (data) {
      dispatch(populateList(data));
      // console.log("list", dispatch(getListObj()));
    }
  }, [data]);

  return (
    <>
      <div className="App">
        <div className="container">
          <div className="row">
            <Header />
          </div>

          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6"></div>
            <br />
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
      </div>
      <Footer />
    </>
  );
};

export default App;
