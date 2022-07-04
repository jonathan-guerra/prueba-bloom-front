import React from "react";

import computerSVG from "../components/img/computer.7f0714e4.png";
import moneySVG from "../components/img/money.3fd805f6.png";
import money2SVG from "../components/img/money.b227661f.png";
import lookingSVG from "../components/img/looking.42a6b69c.png";
import seniorSVG from "../components/img/Imagen2.png";

import "../styles/style.css";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <Header />
      <div className="container contMedio2">
        <div>
          <div>
            <b>Este es el primer espacio donde todos</b>
          </div>
          <div>
            <b>Avanzamos juntos</b>
          </div>
          <div>
            Somos el primer Crowdfundig de Financiación en Perú, donde empresas
            y emprendedores podrán solicitar recursos para un proyecto y todos
            podemos invertir recibiendo una ganancia por nuestros recursos.
          </div>
          <br></br>
          <div className="centrado">
            <Link to={"/inscribete"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <div className=" mx-0 inscribeteButton ">Inscríbete</div>
            </Link>
          </div>
          <br></br>
        </div>
      </div>
      <div className="container contenedorGrandeSenior">
        <div className="row row-cols-3">
          <div className="col-3">
            <div className="contenedorAzulPeq">
              <img className="img-fluid imagenesPeq1" alt="money" src={money2SVG}></img>

              <div
                style={{
                  fontSize: "18px",
                  marginBottom: "15px",
                  paddingTop: "15px",
                }}
              >
                <b>Proyectos con Garantía</b>
              </div>

              <div style={{ fontSize: "11px" }}>
                Todos los proyectos en nuestra plataforma cuenta con garantía,
                entendiendo que siempre existe un riesgo al momento de invertir.
              </div>
            </div>
          </div>
          <div className="col contMedio proyectos">
            <div>
              <b>Este es el primer espacio donde todos</b>
            </div>
            <br />
            <div>
              <b>Avanzamos juntos</b>
            </div>
            <br />
            <div>
              Somos el primer Crowdfundig de Financiación en Perú, donde
              empresas y emprendedores podrán solicitar recursos para un
              proyecto y todos podemos invertir recibiendo una ganancia por
              nuestros recursos.
            </div>
            <br></br>
            <div className="centrado">
              <Link to={"/inscribete"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <div className="mx-0 inscribeteButton">Conoce más</div>
              </Link>
            </div>
          </div>

          <div className="contenedorAzul row mt-5">
            <div className="col">
              <img className="img-fluid imagenesPeq" alt="looking" src={lookingSVG}></img>
              <div>Crea una Campaña de Financiación</div>
            </div>
            <div className="col">
              <img className="img-fluid imagenesPeq" alt="computer" src={computerSVG}></img>
              <div>Invierte en el proyecto que quieras</div>
            </div>
            <div className="col">
              <img className="img-fluid imagenesPeq" alt="money" src={moneySVG}></img>
              <div>Recibe una ganancia por tu inversión</div>
            </div>
            <div className="col-md colSenior">
              <img className="imagenSenior" alt="senior" src={seniorSVG}></img>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div>
        <div className="container  contenedorGrande ">
          <div className="row contenedorImagen custom-class">
            <div className="col mt-5 ">
              <div className="margen">
                <h3>¿Esto es legal en Perú?</h3>
                <br></br>
                Somos una Sociedad Administradora de Plataformas de
                Financiamiento Participativo Financiero, estas son vigiladas por
                la SMV (Superintendencia del Mercado de Valores), actualmente
                nos encontramos en proceso de Solicitud de Permiso de
                Funcionamiento ante el regulador.
              </div>
            </div>
            <div className="col mt-5">
              <div className="invertir">
                <h3>¿Cuando pedo invertir?</h3>
                <div>
                  Por el momento no estamos en funcionamiento, esperamos poder
                  hacer un lanzamiento cuando la SMV nos autorice.
                </div>
                <br></br>
                <div>
                  Estaremos actualizando a todos sobre las fechas de
                  lanzamiento, puedes estar atento a nuestras redes o
                  inscribirte a nuestros boletines.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="">
        <Link to={"/inscribete"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <div className="conoceMas">Conoce más</div>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
