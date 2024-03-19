/*eslint-disable*/
import React from "react";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

export default function CustomHeader() {

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  return (
      <Header
        brand="Xamir Security Portal"
        links={<HeaderLinks dropdownHoverColor="dark" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "dark",
        }}
      />
  );
}
