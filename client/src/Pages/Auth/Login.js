// import React from "react";
// import Form from "../../Component/shared/form/Form";
// import { useSelector } from "react-redux";
// import Spinner from "./../../Component/shared/Spinner";

// const Login = () => {
//   const { loading, error } = useSelector((state) => state.auth);
//   return (
//     <>
//       {error && <span>{alert(error)}</span>}
//       {loading ? (
//         <Spinner />
//       ) : (
//         <div className="row g-0">
//           <div className="col-md-8 form-banner">
//             <img src="./assets/images/banner1.jpg" alt="loginImage" />
//           </div>
//           <div className="col-md-4 form-container">
//             <Form
//               formTitle={"Login Page"}
//               submitBtn={"Login"}
//               formType={"login"}
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Login;

import React from "react";
import Form from "../../Component/shared/form/Form";
import { useSelector } from "react-redux";
import Spinner from "./../../Component/shared/Spinner";
import "./login.css"; // Custom CSS for additional styling

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <div className="container-fluid login-page">
      {error && alert(error)}
      {loading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <Spinner />
        </div>
      ) : (
        <div className="row g-0 vh-100">
          {/* Banner Section */}
          <div className="col-md-8 form-banner d-none d-md-block">
            <img
              src="./assets/images/banner1.jpg"
              alt="loginImage"
              className="img-fluid h-100 w-100"
            />
          </div>

          {/* Form Section */}
          <div className="col-md-4 form-container d-flex align-items-center justify-content-center">
            <div className="form-wrapper">
              <Form
                formTitle={"Login Page"}
                submitBtn={"Login"}
                formType={"login"}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
