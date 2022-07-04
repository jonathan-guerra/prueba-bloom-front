import React from "react";
import "../styles/styleFooter.css";
import bloom from "./img/bloom.png";
import redeslinkedin from "../img/9351735cd3a456e88ad876588ab9e503-logo-de-linkedin.png";
import redesFacebook from "./img/facebookLogo2.png"
import redesYoutube from "./img/youtube-black-logo-11549680987z3oylzt1lb2.png"
import redesInstagram from "./img/instgramLogo2.png"
import { Link } from "react-router-dom";

const Footer = () => {
  const facebookURL =
    "https://www.facebook.com/Bloom-Crowdfunding-COL-114197794597081";
  const linkedinURL =
    "https://www.linkedin.com/company/bloom-crowdfunding/mycompany/?viewAsMember=true";
  const instagramURL = "https://www.instagram.com/bloom_crowdfunding/";
  const youtubeURL = "https://www.youtube.com/watch?v=WcOJ2mRlg4Y&list=RDWcOJ2mRlg4Y&index=1";

  return (
    <>
      <div className="py-3 row containerFooter">
        <div className=" align-self-center p-0 col-md">
          <div className="row mx-4 px-2">
            <div className="mx-2 col separetLine">
              <strong>
                <p>Quienes Somos</p>
                <p>Recursos</p>
                <p>Empleos</p>
                <p>FAQ</p>
              </strong>
            </div>
            <div className="mx-2 col separetLine2">
              <strong>
                <p>Contactanos</p>
                <p>Boletines</p>
              </strong>
            </div>
          </div>
        </div>
        {/*  */}

        <div className="col-md container align-self-center">
          <strong>
            <p className="columnTwo columnTwoUpdate">
              ¿Quieres estar Actualizado?
            </p>
          </strong>
          <div className="emailBox">
            <input type="email" placeholder="example@hello.com"></input>
          </div>
          <div className="emailBox">
            <Link to={"/inscribete"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <div className="inscribeteButtonFooter">Inscríbete</div>
            </Link>
          </div>
          <p className="textInsc columnTwo">
            Al hacer click en el botón “inscríbete” aceptas nuestra <br></br>
            <a href="*"> Política de Tratamiento de Datos</a>
          </p>
        </div>
        {/*  */}
        <div className="col-md redes">
          <br />
          <div>
            <b>Siguenos en nuestras redes</b>
          </div>
          <div>
            <br />
            <div className="row row-cols-4 justify-content-between">
              <div className="col">
                <a href={facebookURL} rel="noreferrer" target="_blank">
                  <img src={redesFacebook} alt="facebook" className=" redesTamFace"></img>
                </a>
              </div>
              <div className="col">
                <a href={linkedinURL} rel="noreferrer" target="_blank">
                  <img src={redeslinkedin} alt="linkedin" className="redesTam"></img>
                </a>
              </div>
              <div className="col">
                <a href={youtubeURL} rel="noreferrer" target="_blank">
                  <img src={redesYoutube} alt="youtube" className=" redesTam"></img>
                </a>
              </div>
              <div className="col">
                <a href={instagramURL} rel="noreferrer" target="_blank">
                  <img src={redesInstagram} alt="instagram" className=" redesTamInsta"></img>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="vigilados">
          <br />
          <div className="sm-vigilados2">
            <span>Vigilados por: </span>
            <Link to={"/"}>
              <img className="img-fluid" alt="bloom" src={bloom} />
            </Link>
          </div>
          <br />
        </div>

        <div className="derechos">
          © 2022 Bloom Crowdfunging S.A.C, todos los derechos reservados
        </div>
      </div>
    </>
  );
};

export default Footer;
