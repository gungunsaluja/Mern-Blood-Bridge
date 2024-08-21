import React from "react";
import { useState } from "react";
import InputType from "./InputType";
import {Link} from 'react-router-dom'

const Form = ({ submitButton, formTitle, formType }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donar");
  const [name, setName] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div>
      <form>
        <h1 className="text-center">{formTitle}</h1>
        <hr></hr>
        <div className="d-flex mb-3">
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="donarRadio"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              defaultChecked
            ></input>
            <label htmlFor="donarRadio" className="form-check-label">
              Donar
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="adminRadio"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            ></input>
            <label htmlFor="donarRadio" className="form-check-label">
              Admin
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="hospitalRadio"
              value={"admin"}
              onChange={(e) => setRole(e.target.value)}
            ></input>
            <label htmlFor="hospitalRadio" className="form-check-label">
              Hospital
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="organisationRadio"
              value={"organisation"}
              onChange={(e) => setRole(e.target.value)}
            ></input>
            <label htmlFor="organisationRadio" className="form-check-label">
              Organisation
            </label>
          </div>
        </div>
        {/* switch */}
        {(() => {
          // eslint-disable-next-line
          switch (true) {
            case formType === "login": {
              return (
                <>
                  <InputType
                    labeltext={"email"}
                    labelfor={"forEmail"}
                    inputtype={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></InputType>

                  <InputType
                    labeltext={"Password"}
                    labelfor={"forPassword"}
                    inputtype={"Password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></InputType>
                </>
              );
            }
            case formType === "register": {
              return (
                <>
                  {(role === "admin" || role === "donar") && (
                    <InputType
                      labeltext={"email"}
                      labelfor={"forEmail"}
                      inputtype={"email"}
                      name={"email"}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></InputType>
                  )}

                  <InputType
                    labeltext={"Password"}
                    labelfor={"forPassword"}
                    inputtype={"Password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></InputType>

                  {role === "admin" ||
                    (role === "donar" && (
                      <InputType
                        labeltext={"Name"}
                        labelfor={"forName"}
                        inputtype={"text"}
                        name={"name"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      ></InputType>
                    ))}
                  {role === "organisationName" && (
                    <InputType
                      labeltext={"Organisation Name"}
                      labelfor={"fororganisationName"}
                      inputtype={"text"}
                      name={"organisationName"}
                      value={organisationName}
                      onChange={(e) => setOrganisationName(e.target.value)}
                    ></InputType>
                  )}
                  {
                    role=== 'hospital' && (
                      <InputType
                      labeltext={"Hospital Name"}
                      labelfor={"forhospitalName"}
                      inputtype={"text"}
                      name={"hospitalName"}
                      value={hospitalName}
                      onChange={(e) => setHospitalName(e.target.value)}
                    ></InputType>

                    )
                  }


                

                  <InputType
                    labeltext={"website"}
                    labelfor={"forWebsite"}
                    inputtype={"text"}
                    name={"website"}
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  ></InputType>

                  <InputType
                    labeltext={"Address"}
                    labelfor={"forAddress"}
                    inputtype={"text"}
                    name={"address"}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></InputType>

                  <InputType
                    labeltext={"Phone"}
                    labelfor={"forPhone"}
                    inputtype={"text"}
                    name={"phone"}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  ></InputType>
                </>
              );
            }
          }
        })()}


        <div className="d-flex flex-row justify-content-between">

          {formType === 'login'?(  
            <p>Not registered yet ? Register
              {/* ek page se dusre page par jump karte h using link tag without refreshing the page */}
              <Link to = "/register">Here !</Link>
            </p>
          ):(
            <p>Already User please
              <Link to = "/login">Login !</Link>
            </p>

          )

          }
          <button className="btn btn-primary" type="submit">
            {submitButton}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
