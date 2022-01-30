import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllData } from "./api/api";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { MainPage } from "./pages/MainPage";
import { Projects } from "./pages/Projects";
import { Project } from "./pages/Project";
import { AboutMe } from "./pages/AboutMe";
import { Loading } from "./components/Loading";

export const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getAllData(setData)
  }, [])

  const extractMainPageData = () => {
    return [data.mainPageProject1, data.mainPageProject2, data.mainPageProject3, data.mainPageProject4, data.mainPageProject5];
  }
  const extractProjectsData = () => {
    return data.projects.filter((project) => {
      return project.isInterior !== true;
    })
  }
  const extractInteriorsData = () => {
    return data.projects.filter((project) => {
      return project.isInterior === true;
    })
  }
  const extractSingleProjectData = (id) => {
    return data.projects[id - 1]
  }

  if (data === null) {
    return <div className="main__container-outer--loading">
      <Loading />
    </div>
  }
  return <Router>
    <Navigation logoUrl={data.navLogo.url} />
    <div className='main__container-outer'>
      <Switch>
        <Route exact path="/">
          <MainPage mainPageData={extractMainPageData()} />
        </Route>
        <Route path="/project/:id">
          <Project getData={extractSingleProjectData} />
        </Route>
        <Route exact path="/projects">
          <Projects projectsData={extractProjectsData()} isInteriors={false} />
        </Route>
        <Route exact path="/interiors">
          <Projects projectsData={extractInteriorsData()} isInteriors={true} />
        </Route>
        <Route exact path="/about">
          <AboutMe />
        </Route>
      </Switch>
    </div>
    <Footer />
  </Router>

}