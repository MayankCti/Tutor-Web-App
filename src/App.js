import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import "./App.css";
import { pipGetAccessToken } from "./utils/pip";
import Headers from "./layout/Headers";
import Sidebar from "./layout/Sidebar";
import PrivateRoute from "./layout/PrivateRoute";
import { AllRoutes } from "./routes/pageRoutes";

function App() {
  const isAuth = pipGetAccessToken();
  const { isToggle } = useSelector((state) => state.authReducer);

  if (!isAuth) {
    return (
      <>
        <Routes>
          {AllRoutes?.map((item, i) => (
            <Route
              path={item.path}
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

  return (
    <>
      <main className={isToggle ? "ct_collapsed_sidebar" : ""}>
        <Sidebar />
        <div className="ct_right_content">
          <Headers />
          <Routes>
            {AllRoutes?.map(
              (item, i) =>
                item?.isPrivate && (
                  <Route
                    path={item.path}
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
                )
            )}
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
