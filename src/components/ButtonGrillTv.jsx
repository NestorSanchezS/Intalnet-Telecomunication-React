import React from "react";
import pdf from "../assets/docs/MONTERIA.pdf";
import pdf2 from "../assets/docs/VALENCIA_TIERRALTA.pdf";

export const ButtonGrillTv = ({ name, plane }) => {
  const typeTvChannels = plane?.map((service) =>
    service.services.map((service) => service)
  );
  const typeTvChannels2 = typeTvChannels?.map(
    (serv) => serv.find((e) => e.id === 16)?.name
  );
  let filepdf = pdf;
  if (typeTvChannels2?.includes("75 Canales TV")) {
    filepdf = pdf2;
  }
  return (
    <div className="container_btn-parrilla">
      {name !== "Los Córdoba -Córdoba" && (
        <button type="button" className="btn btn-maincolor2 btn_parrilla-tv ">
          <span>
            <a
              className="btn_parrilla_tv-a"
              href={filepdf}
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
