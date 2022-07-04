import React from "react";
import bloom from "./img/bloom.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="row justify-content-evenly mt-5 mb-5 linea">
        <div className="col-5">
          <div className="container m-4 my-0">
            <Link to={"/"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <img className="img-fluid" alt="bloom" src={bloom} />
            </Link>
          </div>
        </div>

        <div className="mx-5 col-4 align-self-center ">
          <div className="row">
            <div className="col"> </div>
            <div className="col"> </div>

            <div className="col">
              <Link to={"/inscribete"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <div className="mx-0 inscribeteButton">Inscríbete</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
