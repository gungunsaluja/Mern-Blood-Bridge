import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import Login from './Pages/Auth/Login';
import {ToastContainer} from 'react-toastify';
import Register from './Pages/Auth/Register';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './Component/Routes/ProtectedRoute';
import PublicRoute from './Component/Routes/PublicRoute';
import Donar from './Pages/Dashboard/Donar';
import Hospital from './Pages/Dashboard/Hospital';

import OrganisationPage from './Pages/Dashboard/OrganisationPage';


function App() {
  return (
    <div>
      <ToastContainer/>

      <Routes>
      <Route path = "/hospital" element = {<ProtectedRoute><Hospital></Hospital></ProtectedRoute>}>


</Route>
        <Route path = "/donar" element = {<ProtectedRoute><Donar></Donar></ProtectedRoute>}>


        </Route>
        <Route path = '/' element ={<ProtectedRoute>
          <HomePage/>
        </ProtectedRoute>} />
        <Route path = "/login" element = {
          <PublicRoute>
              <Login/>
          </PublicRoute>
          } />
           <Route path = "/organisation" element = {
          <ProtectedRoute>
              <OrganisationPage></OrganisationPage>
          </ProtectedRoute>
          } />
        <Route path = "/register" element = {
          
          <PublicRoute>
            <Register/>

          </PublicRoute>
          }/>

        
      </Routes>

      
    </div>
  );
}

export default App;
