import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Escenarios = () => {
  return (
    <div className="bg-light text-center">
    
      <section className="container py-5">
        <h2 className="fw-bold mb-3">ESCENARIOS</h2>

        <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
          La página se vuelve un escenario de cómo diseñar e interpretar
          emociones de una ciudad que cambia. Un recorrido visual donde las
          imágenes transmiten experiencias urbanas y narrativas modernas.
        </p>
      </section>

    
      <section className="container py-5">
        <h4 className="fw-bold mb-5">MAS AVENTURAS POR DESCUBRIR</h4>

        <div className="row g-4">
          {[1, 2, 3, 4].map((item) => (
            <div className="col-6 col-md-3" key={item}>
              <div
                className="bg-secondary-subtle border position-relative"
                style={{
                  height: "150px",
                  overflow: "hidden",
                }}
              >
            
                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background:
                      "linear-gradient(to bottom right, transparent 49%, #999 50%, transparent 51%), linear-gradient(to top right, transparent 49%, #999 50%, transparent 51%)",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

     
        <div className="d-flex justify-content-center mt-4 gap-2">
          <span
            className="bg-dark rounded-circle"
            style={{ width: "10px", height: "10px" }}
          ></span>
          <span
            className="bg-secondary rounded-circle"
            style={{ width: "10px", height: "10px" }}
          ></span>
          <span
            className="bg-secondary rounded-circle"
            style={{ width: "10px", height: "10px" }}
          ></span>
        </div>
      </section>

    
      <section className="container py-5">
        <h4 className="fw-bold mb-4">CONOCENOS BISUALEX</h4>

        <div className="row align-items-center">
          <div className="col-md-6 text-start">
            <p className="text-muted">
              El ingenio y la estética visual conectan desde la idea hasta la
              forma final. Diseñamos experiencias digitales modernas y
              auténticas que resaltan la creatividad y la innovación visual.
            </p>

            <button className="btn btn-dark px-4">CONOCÉ MÁS</button>
          </div>

          <div className="col-md-6 mt-4 mt-md-0">
            <div
              className="bg-secondary-subtle border mx-auto position-relative"
              style={{
                width: "100%",
                maxWidth: "350px",
                height: "220px",
              }}
            >
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background:
                    "linear-gradient(to bottom right, transparent 49%, #999 50%, transparent 51%), linear-gradient(to top right, transparent 49%, #999 50%, transparent 51%)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <h5 className="fw-bold mb-5">INTEGRANTES</h5>

        <div className="row justify-content-center g-5">
          {["Luisa Restrepo", "Lucía Chaverra"].map((name, index) => (
            <div className="col-6 col-md-3" key={index}>
              <div
                className="bg-secondary-subtle border mx-auto position-relative"
                style={{
                  width: "160px",
                  height: "160px",
                }}
              >
                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background:
                      "linear-gradient(to bottom right, transparent 49%, #999 50%, transparent 51%), linear-gradient(to top right, transparent 49%, #999 50%, transparent 51%)",
                  }}
                ></div>
              </div>

              <p className="mt-3 fw-semibold">{name}</p>
            </div>
          ))}
        </div>
      </section>

    
      <section className="container py-5">
        <h5 className="fw-bold mb-4">SUGERENCIAS O COMENTARIOS</h5>

        <div className="mx-auto" style={{ maxWidth: "500px" }}>
          <textarea
            className="form-control mb-3"
            rows="6"
            placeholder="Escribe aquí..."
          ></textarea>

          <button className="btn btn-dark px-5">ENVIAR</button>
        </div>
      </section>

    
      <footer className="bg-secondary text-white py-5 mt-5">
        <div className="container">
          <div className="row text-start">
            <div className="col-md-4 mb-4">
              <h6 className="fw-bold">CONTACTUS</h6>
              <p className="mb-1">bisualex@gmail.com</p>
              <p className="mb-1">+540405 45</p>
              <p>Bogotá</p>

              <div className="d-flex gap-3 fs-5">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
              </div>
            </div>

            <div className="col-md-8 text-md-end">
              <h6 className="fw-bold">POLÍTICAS DE PRIVACIDAD</h6>
              <p className="mb-0">
                © 2025 Bisualex. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Escenarios;