import "./App.css";
import { Route, Routes } from "react-router";
import { AllRoutes } from "./routes/pageRoutes";
import PrivateRoute from "./layout/PrivateRoute";

function App() {
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
