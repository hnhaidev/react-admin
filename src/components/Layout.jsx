import { useContext, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Routes from "./Routes";
import Topnav from "./Topnav";
import ThemeContext from "../context/ThemeContext";
import ThemeAction from "../context/ThemeAction";

const Layout = () => {
  const { state, dispatch } = useContext(ThemeContext);
  console.log(state);

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");

    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

    dispatch(ThemeAction.setMode(themeClass));

    dispatch(ThemeAction.setColor(colorClass));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div className={`layout ${state.mode} ${state.color}`}>
            <Sidebar {...props} />
            <div className="layout__content">
              <Topnav />
              <div className="layout__content-main">
                <Routes />
              </div>
            </div>
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;
