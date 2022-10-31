import React from "react";

export const NotFound = () => {
  return (
    <>
      <HeaderPage message="404" />
      <section className="ls s-py-100 s-py-md-160 error-404 not-found page_404">
        <div className="container">
          <div className="row">
            <div className="d-none d-lg-block divider-70"></div>

            <div clasNames="col-sm-12 text-center">
              <header className="page-header">
                <h1>404</h1>
                <h3>Oops! No se pudo encontrar esta página!</h3>
                <h6>
                  Lo sentimos, pero la pagina que busca no existe, ha sido
                  eliminada o sa le cambió el nombre
                </h6>
              </header>

              <div className="page-content">
                <div id="search-404" className="widget widget_search"></div>

                <p>
                  <a href="./" className="btn btn-white">
                    <span>Regresa a inicio</span>
                  </a>
                </p>
              </div>
            </div>
            <div className="d-none d-lg-block divider-80"></div>
          </div>
        </div>
      </section>
    </>
  );
};
