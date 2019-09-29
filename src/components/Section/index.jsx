import React, { useEffect } from "react";

import Logo from "../Logo";
import Gallery from "../Gallery";
import Footer from "../Footer";

const Section = props => {
  const { data, heading, type, assets } = props;

  useEffect(() => {
    document.body.classList.add("body-overflow");
  }, [data]);

  return (
    <section className="section-wrapper">
      <Logo heading={heading} type={type} data={data} />
      <Gallery type={type} assets={assets} />
      <Footer />
    </section>
  );
};

export default Section;
