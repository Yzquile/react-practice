import React, { useEffect } from "react";
import "../../App.css";
import Aos from "aos";
import "aos/dist/aos.css";

const SectionHeading = ({ title, subtitle, dataAos, dataAosDuration} ) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="section-heading"
      data-aos={ dataAos }
      data-aos-duration={ dataAosDuration }
    >
      <h1>{ title }</h1>
      { subtitle && <p>{subtitle}</p> }
    </div>
  );
};

export default SectionHeading;
