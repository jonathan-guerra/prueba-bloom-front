import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import girl from "./img/girlSmile.png";
import bloomTransparent from "./img/bloomTransparente.png";
import arrow from "./img/arrow.png";

import { Link } from "react-router-dom";
import "../styles/styleRegister.css";
import axios from "axios";

const Inscribete = () => {
  const bloomURL =
    "https://72fc7xa4pk.execute-api.us-east-2.amazonaws.com/prueba/api/v2/portal/dev-test";

  const [getName, setName] = useState("");
  const [getEmail, setEmail] = useState("");
  const [getPhone, setPhone] = useState("");
  const [getInvestorInfo, setInvestorInfo] = useState("");
  const [getAcceptsPolitics, setAcceptsPolitics] = useState(false);

  const SendData = async (e) => {
    e.preventDefault();

    console.log(getInvestorInfo);
    let interestedInInvesting = false;
    let interestedInBorrowing = false;

    if (getInvestorInfo === "Empresa") {
      interestedInInvesting = false;
      interestedInBorrowing = true;
    } else {
      interestedInInvesting = true;
      interestedInBorrowing = false;
    }

    let dataToSend = {
      name: getName,
      email: getEmail,
      cellphone: getPhone,
      acceptsPolitics: getAcceptsPolitics,
      interestedInInvesting: interestedInInvesting, //interesado en invertir
      interestedInBorrowing: interestedInBorrowing, //interesado en tomar prestado
    };

    console.log(dataToSend);
    await axios.post(bloomURL, dataToSend ).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  return (
    <>
      <Header />
      <div className="backButton2">
        <Link to={"/"} style={{ color: "inherit", textDecoration: "inherit" }}>
          <img src={arrow} alt="goBack" className="backButton"></img>
        </Link>
      </div>
      <div className="mb-5 row">
        <div className="col">
          <form className="formCard" onSubmit={(e) => SendData(e)}>
            <h4 className="titleForm">
              Deja tus datos y recibe actualizaciones
            </h4>
            <div className="container">
              <div>
                <label className="labelForm">Nombre Completo</label>
                <br />
                <input
                  type="text"
                  required
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="inputForm"
                  placeholder="José Luis Flores Sánchez"
                ></input>
              </div>
              <div>
                <label className="labelForm">Correo Electrónico</label>
                <br />
                <input
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  className="inputForm"
                  placeholder="example@hello.com"
                ></input>
              </div>
              <div>
                <label className="labelForm">Número de celular</label>
                <br />
                <input
                  type="number"
                  required
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  className="inputForm"
                  placeholder="896 345 3453"
                ></input>
              </div>
              <div>
                <label className="labelForm">
                  ¿Qué información quieres recibir?
                </label>
                <br />
                <select
                  onChange={(event) => setInvestorInfo(event.target.value)}
                  className="selectForm"
                >
                  <option
                    disabled
                    selected
                    className="selectOption"
                    style={{ opacity: "0.3" }}
                  >
                    Selecciona una opción
                  </option>
                  <option value="Inversionista">Inversionista</option>
                  <option value="Empresa">Empresa</option>
                </select>
              </div>
            </div>
            <br></br>
            <div className="container">
              <label className="switch">
                <input
                  required
                  onClick={() => {
                    setAcceptsPolitics(!getAcceptsPolitics);
                    console.log(getAcceptsPolitics);
                  }}
                  className="inputToggle"
                  type="checkbox"
                ></input>
                <span className="slider round"></span>
              </label>
              <label className="acept" style={{ marginLeft: "15px" }}>
                He leído y acepto la{" "}
                <span className="spanPoli">
                  Política de tratamiento de datos
                </span>
              </label>
            </div>
            <div className="container">
              <button className="inscribeteFormButton">Inscríbete</button>
            </div>
          </form>
        </div>
        <div className="col secondColumn">
          <img src={girl} alt="girl" className="girlImg"></img>

          <div className="miniCard">
            <div className="p-1">Vigilados por:</div>
            <img src={bloomTransparent} alt="bloom" className="bloomTransparente"></img>
          </div>
          <Link
            to={"/"}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div className="regresarFormButton">Regresar</div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Inscribete;
