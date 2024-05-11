import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import FullScreenSpinner from "./Components/Spinner";
const Login = lazy(() => import("./Components/Login"));
const Signup = lazy(() => import("./Components/Signup"));
import "./App.css";

function App() {
  return (
    <>
      <Suspense fallback={<FullScreenSpinner />}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
