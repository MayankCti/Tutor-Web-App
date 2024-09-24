import "./App.css";
import { useEffect } from "react";
import { saveTheme } from "./utils/pip";
import { Route, Routes } from "react-router";
import { useLocation } from "react-router-dom";
import { AllRoutes } from "./routes/pageRoutes";
import PrivateRoute from "./layout/PrivateRoute";

function App() {
  const pathname = useLocation()?.pathname;
  useEffect(() => {
    saveTheme();
  }, [pathname]);
  return (
    <>
      <Routes>
        {AllRoutes?.map((item, i) => (
          <Route
            path={item?.path}
            key={i}
            exact
            element={
              item?.isPrivate ? (
                <PrivateRoute>{item?.element}</PrivateRoute>
              ) : (
                item?.element
              )
            }
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
