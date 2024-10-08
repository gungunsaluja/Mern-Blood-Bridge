import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Auth/Login";
import { ToastContainer } from "react-toastify";
import Register from "./Pages/Auth/Register";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./Component/Routes/ProtectedRoute";
import PublicRoute from "./Component/Routes/PublicRoute";
import Donar from "./Pages/Dashboard/Donar";
import Hospital from "./Pages/Dashboard/Hospital";

import OrganisationPage from "./Pages/Dashboard/OrganisationPage";
import Consumer from "./Pages/Dashboard/Consumer";
import Donation from "./Pages/Donation";
import Analytics from "./Pages/Dashboard/Analytics";
import DonarList from "./Pages/Admin/DonarList";
import HospitalList from "./Pages/Admin/HospitalList";
import OrgList from "./Pages/Admin/OrgList";

function App() {
  return (
    <div>
      <ToastContainer />

      <Routes>
        <Route
          path="/hospital"
          element={
            <ProtectedRoute>
              <Hospital></Hospital>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/donar"
          element={
            <ProtectedRoute>
              <Donar></Donar>
            </ProtectedRoute>
          }
        >
          <Route path="/consumer">
            element ={" "}
            {
              <ProtectedRoute>
                <Consumer></Consumer>
              </ProtectedRoute>
            }
          </Route>
          <Route path="/donation" element={<Donation></Donation>}></Route>
        </Route>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/organisation"
          element={
            <ProtectedRoute>
              <OrganisationPage></OrganisationPage>
            </ProtectedRoute>
          }
        />

        <Routes>
        <Route
          path="/admin"
          element={
            <PublicRoute>
              <AdminHome />
            </PublicRoute>
          }
        />

          <Route path = "/donar-list" element={<ProtectedRoute>
            <DonarList></DonarList>
          </ProtectedRoute>}>


          </Route>
          <Route path = "/org-list" element = {
            <ProtectedRoute>
              <OrgList></OrgList>
            </ProtectedRoute>
          }></Route>

        </Routes>



        <Routes>

<Route path = "/hospital-list" element={<ProtectedRoute>
  <HospitalList></HospitalList>
</ProtectedRoute>}>


</Route>

</Routes>
        <Route path = "/analytics"
        element = {
          <ProtectedRoute>
            <Analytics></Analytics>
          </ProtectedRoute>
        }>

        </Route>
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
