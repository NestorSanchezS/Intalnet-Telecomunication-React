import React from "react";
import pdf from "../assets/docs/tv.pdf";

export const ButtonGrillTv = ({ name }) => {
  return (
    <div className="container_btn-parrilla">
      {name !== "Los Córdoba -Córdoba" && (
        <button type="button" className="btn btn-maincolor2 btn_parrilla-tv ">
          <span>
            <a
              className="btn_parrilla_tv-a"
              href={pdf}
              rel="noopener noreferrer"
              target="_blank"
            >
              Ver parrilla de canales
            </a>
          </span>
        </button>
      )}
    </div>
  );
};
